import { Address, formatUnits, hexToString, parseUnits } from "viem";
import { Round } from "./types";
import { TOKEN_DECIMALS } from "@/config/constants";

export function decodeRound(data: readonly any[], id: bigint) {
  const round: Round = {
    id,
    name: hexToString(data[0], { size: 32 }),
    endTime: data[1],
    initialBalance: data[2],
    priceIncrement: data[3],
    timerExtension: data[4],
    maxTimer: data[5],
    keysBought: data[6],
    lastBuyer: data[7],
    charityWallet: data[8],
    promotionalImage: hexToString(data[9]) || undefined,
  };
  return round;
}

export function formatTokenAmount(amount?: bigint) {
  if (!amount) return "--";

  return (
    Intl.NumberFormat("en-US").format(
      Number(formatUnits(amount, TOKEN_DECIMALS))
    ) + "$BDG"
  );
}

export function parseTokenAmount(amount: string) {
  return parseUnits(amount, TOKEN_DECIMALS);
}

export function isRoundActive(round: Round) {
  return round.endTime * BigInt(1000) > Date.now();
}

export function formatAddress(address: Address) {
  const leadingChars = 8;
  const trailingChars = 4;
  return address.length < leadingChars + trailingChars
    ? address
    : `${address.substring(0, leadingChars)}\u2026${address.substring(
        address.length - trailingChars
      )}`;
}
