"use client";

import { ConnectWalletButton } from "@/components/ui/connect-wallet-button";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="section-full-screen flex items-center justify-center">
      <div className="items-center flex flex-col max-w-xl text-center space-y-8">
        <h1 className="header-text-1 text-6xl leading-snug">
          Provide Support in a Fun and Interesting Way
        </h1>
        <Button variant="outline" asChild>
          <a href="/rounds">Explore all ongoing rounds</a>
        </Button>
        <ConnectWalletButton />
      </div>
    </div>
  );
}
