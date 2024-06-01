"use client";

import { ReactNode } from "react";
import { State } from "wagmi";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "./(components)/header";
import { WagmiProvider } from "wagmi";
import { config as WagmiConfig } from "@/config/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import AIChat from "./ai-chat";
import Footer from "./(components)/footer";

const queryClient = new QueryClient();

export default function ContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
  initialState?: State;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      disableTransitionOnChange
    >
      <WagmiProvider config={WagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
