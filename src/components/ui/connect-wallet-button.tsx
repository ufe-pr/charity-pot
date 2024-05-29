"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function ConnectWalletButton() {
  return (
    <div className="inline-block">
      <ConnectButton chainStatus="icon" showBalance={false} />
    </div>
  );
}
