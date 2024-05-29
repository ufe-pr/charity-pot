"use client";

import { useMemo } from "react";
import { RoundExtended } from "../types";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Button } from "@/components/ui/button";
import { formatAddress, isRoundActive } from "../utils";
import React from "react";

export default function RightAside({
  roundDetails: { round },
  buyFn,
  claimFn,
}: {
  roundDetails: RoundExtended;
  buyFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  claimFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const promotionalImageLink = round?.promotionalImage;

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
      return <p className="font-mono italic text-green-500/70">Round ended</p>;
    React.startTransition(() => {
      api.isStopped() && api.start();
    });
    return (
      <p className="font-mono text-primary-foreground">
        {(hours + days * 24).toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    );
  }

  return (
    <>
      <div className="border rounded-3xl overflow-hidden h-48 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={promotionalImageLink}
          alt="Round image"
          className="object-cover w-full h-full"
        />
      </div>
      <Button className="cursor-auto h-auto inline-block w-full text-lg">
        <Countdown daysInHours date={date} renderer={renderer} />
      </Button>
      {round && isRoundActive(round) ? (
        <Button
          onClick={buyFn}
          className="h-auto inline-block w-full text-lg text-primary bg-primary-foreground hover:bg-primary-foreground/90"
        >
          Buy into Round
        </Button>
      ) : (
        <Button
          onClick={claimFn}
          className="h-auto inline-block w-full text-lg text-primary bg-primary-foreground hover:bg-primary-foreground/90"
        >
          Withdraw Rewards
        </Button>
      )}
      <h1 className="font-semibold text-xl font-mono">{round?.name}</h1>
      {round && (
        <div className="text-sm font-mono space-y-2">
          <h3>
            <span>Keys: </span>
            {round.keysBought.toLocaleString()}
          </h3>
          <h3 className="">
            <span className="">Charity wallet: </span>
            <span>
              {round.charityWallet && formatAddress(round.charityWallet)}
            </span>
          </h3>
        </div>
      )}
    </>
  );
}
