import { Address } from "viem";

export const MAIN_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS as Address;
export const LOCAL_DEV_MODE =
  process.env.NEXT_PUBLIC_LOCAL_DEV_MODE === "true" ||
  process.env.NODE_ENV === "development";
export const FLOWISE_URL = "/ai-api/";
  // process.env.NEXT_PUBLIC_FLOWISE_URL ?? "http://localhost:8080";
export const FLOWISE_FLOW_ID =
  process.env.NEXT_PUBLIC_FLOWISE_FLOW_ID ??
  "074ab635-b7a1-40fe-868f-03f71bc7ba3d";
export const TOKEN_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS as Address;
export const TOKEN_DECIMALS =
  Number(process.env.NEXT_PUBLIC_TOKEN_DECIMALS) ?? 8;
export const DEFAULT_CHARITY_WALLET = (process.env
  .NEXT_PUBLIC_DEFAULT_CHARITY_WALLET ?? MAIN_CONTRACT_ADDRESS) as Address;
