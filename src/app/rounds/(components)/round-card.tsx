import Image from "next/image";
import { useRoundDetails } from "../[id]/hooks";
import { formatTokenAmount } from "../utils";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { useMemo } from "react";

function RoundProperty({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="font-mono text-xs text-foreground/70">
        {label}:{" "}
      </span>
      <span className="text-sm font-mono">{value}</span>
    </p>
  );
}

export default function RoundCard({ roundId }: { roundId: bigint }) {
  const { round, poolSize, currentPrice } = useRoundDetails(roundId);
  const date = useMemo(
    () => new Date(Number(round?.endTime ?? 0) * 1000),
    [round?.endTime]
  );

  function renderer({
    completed,
    days,
    hours,
    minutes,
    seconds,
    api,
  }: CountdownRenderProps) {
    if (completed)
      return <p className="opacity-20 text-sm font-mono italic">Round ended</p>;
    api.isStopped() && api.start();
    return (
      <p className="font-mono text-primary-foreground">
        {(hours + days * 24).toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    );
  }
  return (
    <a
      href={`/rounds/${roundId}`}
      className="flex gap-5 -ml-5 lg:ml-0 p-5 duration-300 rounded-3xl bg-transparent hover:bg-white/30 active:bg-white/30"
    >
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src="/static/icons/simple-icons_nextra.svg"
          width={20}
          height={20}
          alt=""
          className="h-3 lg:h-4"
        />
      </div>
      {round && (
        <div className="rounded-3xl overflow-hidden h-32 w-48">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={round.promotionalImage}
            alt="Round image"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="grow">
        <h4 className="font-semibold font-mono">{round?.name}</h4>
        <RoundProperty label="Pool size" value={formatTokenAmount(poolSize)} />
        <RoundProperty
          label="Current price"
          value={formatTokenAmount(currentPrice)}
        />
        <RoundProperty
          label="Total keys"
          value={round?.keysBought.toString() ?? "---"}
        />
        <Countdown
          date={date}
          autoStart
          intervalDelay={100}
          renderer={renderer}
        />
      </div>
    </a>
  );
}
