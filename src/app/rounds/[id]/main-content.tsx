/* eslint-disable @next/next/no-img-element */
import { usePublicClient } from "wagmi";
import { KeyPurchase, Round, RoundExtended } from "../types";
import { formatTokenAmount } from "../utils";
import { useEffect, useState } from "react";
import KeyPurchaseTile from "./(components)/key-purchase-tile";
import { sunkCostCharityAbi } from "@/generated";
import { LOCAL_DEV_MODE, MAIN_CONTRACT_ADDRESS } from "@/config/constants";
import { bscTestnet, localhost } from "viem/chains";

export default function MainContent({
  roundDetails: { currentPrice, poolSize, round },
}: {
  roundDetails: RoundExtended;
}) {
  const client = usePublicClient({
    chainId: LOCAL_DEV_MODE ? localhost.id : bscTestnet.id,
  });
  const [keyPurchases, setKeyPurchases] = useState<KeyPurchase[]>([]);
  useEffect(() => {
    const getEvents = async () => {
      console.log("Getting contract events");
      const result = await client.getContractEvents({
        abi: sunkCostCharityAbi,
        address: MAIN_CONTRACT_ADDRESS,
        eventName: "KeyPurchased",
        fromBlock: "earliest",
        strict: true,
        args: {
          roundId: round?.id,
        },
      });
      setKeyPurchases(
        result
          .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
          .map((e) => {
            return new KeyPurchase({
              buyer: e.args.buyer,
              price: e.args.price,
              roundId: e.args.roundId,
              timestamp: e.args.timestamp,
            });
          })
      );
    };

    if (round) getEvents();
  }, [client, round, round?.id]);
  return (
    <>
      <PoolStatus
        poolSize={poolSize}
        currentPrice={currentPrice}
        round={round}
      />
      <div className="mt-10">
        <ul className="grid lg:grid-cols-2 gap-4">
          {keyPurchases.map((p) => {
            return <KeyPurchaseTile key={p.id} keyPurchase={p} />;
          })}
        </ul>
      </div>
    </>
  );
}
function PoolStatus({
  poolSize,
  currentPrice,
  round,
}: {
  poolSize: bigint | undefined;
  currentPrice: bigint | undefined;
  round: Round | undefined;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      <div className="p-5 bg-white rounded-xl w-full shadow grid grid-rows-2 gap-3 shadow-primary-foreground">
        <div className="text-xs text-center font-mono">Total Pool Size</div>
        <div className="text-lg font-bold text-center text-primary-foreground font-mono">
          {formatTokenAmount(poolSize)}
        </div>
      </div>

      <div className="p-5 bg-white rounded-xl w-full shadow grid grid-rows-2 gap-3 shadow-primary-foreground">
        <div className="text-xs text-center font-mono">Current Price</div>
        <div className="text-lg font-bold text-center text-primary-foreground font-mono">
          {formatTokenAmount(currentPrice)}
        </div>
      </div>

      <div className="p-5 bg-white rounded-xl w-full shadow grid grid-rows-2 gap-3 shadow-primary-foreground">
        <div className="text-xs text-center font-mono">Starting Price</div>
        <div className="text-lg font-bold text-center text-primary-foreground font-mono">
          {formatTokenAmount(round?.initialBalance)}
        </div>
      </div>
    </div>
  );
}
