import { TOKEN_CONTRACT_ADDRESS } from "@/config/constants";
import { erc20Abi } from "@/generated";
import { useCallback, useMemo } from "react";
import { Address, zeroAddress } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

export function useRequireAllowance<T extends Array<any>, U>(
  spender: Address,
  amount: bigint,
  action: (...args: T) => U
) {
  const { address } = useAccount();
  const { data: allowanceData } = useReadContract({
    abi: erc20Abi,
    address: TOKEN_CONTRACT_ADDRESS,
    functionName: "allowance",
    args: [address ?? zeroAddress, spender],
  });
  const allowance = useMemo(() => {
    if (allowanceData !== undefined) {
      return allowanceData;
    }
  }, [allowanceData]);

  const { writeContractAsync: tokenWriteContract } = useWriteContract();

  const modifiedAction = useCallback(
    async (...args: T) => {
      let hash;
      console.log(allowance);
      if (allowance !== undefined && allowance < amount) {
        hash = await tokenWriteContract({
          abi: erc20Abi,
          address: TOKEN_CONTRACT_ADDRESS,
          functionName: "approve",
          args: [spender, amount],
        });
        if (!hash) return;
      }
      if (allowance === undefined) return;

      return await action(...args);
    },
    [action, allowance, amount, spender, tokenWriteContract]
  );

  return modifiedAction;
}
