import { Address } from "viem";

export interface ICreateRoundSchema {
  name: string;
  duration: bigint;
  timerExtension: bigint;
  maxTimer: bigint;
  initialBalance: bigint;
  priceIncrement: bigint;
  charityWallet?: Address;
  promotionalImage?: string;
}
