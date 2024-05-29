import { Address } from "viem";

export interface Round {
  id: bigint;
  name: string;
  endTime: bigint;
  initialBalance: bigint;
  priceIncrement: bigint;
  timerExtension: bigint;
  maxTimer: bigint;
  keysBought: bigint;
  lastBuyer: Address;
  charityWallet?: Address;
  promotionalImage?: string;
}

export interface RoundExtended {
  round?: Round;
  currentPrice?: bigint;
  poolSize?: bigint;
}

export interface IKeyPurchase {
  id: string;
  roundId: bigint;
  buyer: Address;
  price: bigint;
  timestamp: Date;
}

export class KeyPurchase implements IKeyPurchase {
  id: string;
  roundId: bigint;
  buyer: Address;
  price: bigint;
  timestamp: Date;

  constructor(
    value: Omit<IKeyPurchase, "id" | "timestamp"> & { timestamp: bigint }
  ) {
    this.id = value.roundId + ":" + value.price;
    this.roundId = value.roundId;
    this.buyer = value.buyer;
    this.price = value.price;
    this.timestamp = new Date(Number(value.timestamp) * 1000);
  }
}
