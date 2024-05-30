"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Poppins, Seaweed_Script, Kode_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./(components)/header";
import { WagmiProvider } from "wagmi";
import { config as WagmiConfig } from "@/config/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Analytics } from "@vercel/analytics/react";
import AIChat from "./ai-chat";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fontScript = Seaweed_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

const fontMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background bg-no-repeat bg-center bg-fixed font-sans antialiased",
          fontSans.variable,
          fontScript.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WagmiProvider config={WagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                <Header />
                <AIChat />
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
