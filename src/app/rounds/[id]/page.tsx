"use client";

import { useCallback, useEffect, useState } from "react";
import { useBuyIntoRound, useClaimRewards, useRoundDetails } from "./hooks";
import RightAside from "./right-aside";
import MainContent from "./main-content";
import LoadingModal from "@/components/ui/loading-modal";
import { formatTokenAmount } from "../utils";
import { useWaitForTransactionReceipt } from "wagmi";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

// TODO: Convert getting round details to static props

export default function Rounds({ params: { id } }: { params: { id: string } }) {
  const [buyLoading, setBuyLoading] = useState(false);
  const [claimLoading, setClaimLoading] = useState(false);
  const router = useRouter();
  const roundDetails = useRoundDetails(BigInt(id));

  const { buyIntoRound, hash: buyHash } = useBuyIntoRound();
  const { claimRewards, hash: claimHash } = useClaimRewards();
  const { data: buyTxReceipt } = useWaitForTransactionReceipt({
    hash: buyHash,
  });
  const { data: claimTxReceipt } = useWaitForTransactionReceipt({
    hash: claimHash,
  });
  useEffect(() => {
    console.log("Effect called");
    if (buyTxReceipt || claimTxReceipt) {
      console.log("Refresh called");
      location.reload();
    }
  }, [buyTxReceipt, claimTxReceipt, router]);

  const handleBuyButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setBuyLoading(true);
      console.log("Starting buy-in");

      buyIntoRound(BigInt(id)).finally(() => {
        setBuyLoading(false);
      });
    },
    [buyIntoRound, id]
  );
  const handleClaimButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setClaimLoading(true);
      console.log("Starting claim");

      claimRewards(BigInt(id)).finally(() => {
        setClaimLoading(false);
      });
    },
    [claimRewards, id]
  );

  return (
    <>
      <LoadingModal isOpen={buyLoading || !!buyHash}>
        {!buyHash ? (
          <span>
            Confirm the transaction from your wallet to buy into this pot for{" "}
            {formatTokenAmount(roundDetails.currentPrice)}
          </span>
        ) : !buyTxReceipt ? (
          <span>Waiting for transaction confirmation</span>
        ) : (
          <span>{buyTxReceipt.transactionHash}</span>
        )}
      </LoadingModal>
      <LoadingModal isOpen={claimLoading || !!claimHash}>
        {!claimHash ? (
          <span>Confirm the transaction to claim your rewards</span>
        ) : !claimTxReceipt ? (
          <span>Waiting for transaction confirmation</span>
        ) : (
          <span>{claimTxReceipt.transactionHash}</span>
        )}
      </LoadingModal>
      <div className="p-5 flex">
        <Button variant="outline" asChild>
          <Link href="/rounds" className="">
            <ChevronLeft className="h-[1em] w-[1em] mr-[0.3em]" />
            Back
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-5 relative overflow-y-scroll">
        <div className="lg:col-span-4 w-full lg:order-2 space-y-6 sticky top-0 h-fit">
          <RightAside
            claimFn={handleClaimButton}
            buyFn={handleBuyButton}
            roundDetails={roundDetails}
          />
        </div>
        <div className="lg:col-span-8 lg:order-1">
          <MainContent roundDetails={roundDetails} />
        </div>
      </div>
    </>
  );
}
