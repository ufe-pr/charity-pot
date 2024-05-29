import { http } from "wagmi";
import { bscTestnet, localhost } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { LOCAL_DEV_MODE } from "./constants";
// Your WalletConnect Cloud project ID
export const projectId = "5631779592a314149ef3eb3f0ded1275";

// Create a metadata object
const metadata = {
  name: "Charity Sunk Cost",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = getDefaultConfig({
  appName: metadata.name,
  projectId,
  chains: [bscTestnet, ...(LOCAL_DEV_MODE ? [localhost] : [])],
  ssr: true,
  transports: {
    [bscTestnet.id]: http(),
    [localhost.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

// config/index.tsx

// import { cookieStorage, createStorage } from "wagmi";
