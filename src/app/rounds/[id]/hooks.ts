"use client";

import { sunkCostCharityAbi } from "@/generated";
import { useCallback, useMemo } from "react";
import { maxUint256 } from "viem";
import { useReadContract, useReadContracts, useWriteContract } from "wagmi";
import { decodeRound } from "../utils";
import { useRequireAllowance } from "../hooks";
import { RoundExtended } from "../types";
import { MAIN_CONTRACT_ADDRESS } from "@/config/constants";

export function useRoundDetails(roundId: bigint): RoundExtended {
  const { data } = useReadContract({
    abi: sunkCostCharityAbi,
    address: MAIN_CONTRACT_ADDRESS,
    functionName: "rounds",
    args: [roundId],
  });
  const round = useMemo(() => {
    if (data) {
      const round = decodeRound(data, roundId);
      return round;
    }
  }, [data, roundId]);
  const { data: detailsData } = useReadContracts({
    contracts: [
      {
        address: MAIN_CONTRACT_ADDRESS,
        abi: sunkCostCharityAbi,
        functionName: "getRoundCurrentPrice",
        args: [roundId],
      },
      {
        address: MAIN_CONTRACT_ADDRESS,
        abi: sunkCostCharityAbi,
        functionName: "roundPoolSize",
        args: [roundId],
      },
    ],
  });
  const currentPrice = useMemo(() => {
    if (detailsData && detailsData[0]?.status === "success") {
      return detailsData[0].result;
    }
  }, [detailsData]);
  const poolSize = useMemo(() => {
    if (detailsData && detailsData[1]?.status === "success") {
      return detailsData[1].result;
    }
  }, [detailsData]);

  return { round, currentPrice, poolSize };
}

export function useBuyIntoRound() {
  const {
    writeContractAsync,
    isPending: contractTxPending,
    isError: contractError,
    isSuccess: contractSuccess,
    data: hash,
    ...contractState
  } = useWriteContract();

  const buyIntoRound = useRequireAllowance(
    MAIN_CONTRACT_ADDRESS,
    maxUint256,
    useCallback(
      async (roundId: bigint) => {
        await writeContractAsync({
          address: MAIN_CONTRACT_ADDRESS,
          abi: sunkCostCharityAbi,
          functionName: "buyRoundKey",
          gas: BigInt(100000),
          args: [roundId],
        });
      },
      [writeContractAsync]
    )
  );

  return {
    buyIntoRound,
    hash,
    contractState,
  };
}

export function useClaimRewards() {
  const {
    writeContractAsync,
    isPending: contractTxPending,
    isError: contractError,
    isSuccess: contractSuccess,
    data: hash,
    ...contractState
  } = useWriteContract();

  const claimRewards = useCallback(
    async (roundId: bigint) => {
      await writeContractAsync({
        address: MAIN_CONTRACT_ADDRESS,
        abi: sunkCostCharityAbi,
        functionName: "claimFunds",
        gas: BigInt(100000),
        args: [roundId],
      });
    },
    [writeContractAsync]
  );

  return {
    claimRewards,
    hash,
    contractState,
  };
}
