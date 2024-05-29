import { sunkCostCharityAbi } from "@/generated";
import { useCallback } from "react";
import { isAddress, maxUint256, stringToHex } from "viem";
import { useWriteContract } from "wagmi";
import { ICreateRoundSchema } from "../types";
import { useRequireAllowance } from "../../hooks";
import {
  DEFAULT_CHARITY_WALLET,
  MAIN_CONTRACT_ADDRESS,
} from "@/config/constants";

export function useCreateRound() {
  const {
    writeContractAsync,
    data: hash,
    ...contractState
  } = useWriteContract();

  const createRound = useRequireAllowance(
    MAIN_CONTRACT_ADDRESS,
    maxUint256,
    useCallback(
      async (roundData: ICreateRoundSchema) => {
        const charityWallet =
          roundData.charityWallet && isAddress(roundData.charityWallet, {})
            ? roundData.charityWallet
            : DEFAULT_CHARITY_WALLET;

        await writeContractAsync({
          address: MAIN_CONTRACT_ADDRESS,
          abi: sunkCostCharityAbi,
          functionName: "createRound",
          args: [
            stringToHex(roundData.name, {
              size: 32,
            }),
            roundData.initialBalance,
            roundData.duration,
            roundData.timerExtension,
            roundData.maxTimer,
            roundData.priceIncrement,
            charityWallet,
            stringToHex(roundData.promotionalImage || ""),
          ],
        });
      },
      [writeContractAsync]
    )
  );

  return {
    createRound,
    hash,
    contractState,
  };
}
