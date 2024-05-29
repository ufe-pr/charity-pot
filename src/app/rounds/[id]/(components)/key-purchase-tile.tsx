/* eslint-disable @next/next/no-img-element */
import { KeyPurchase } from "../../types";
import { formatAddress, formatTokenAmount } from "../../utils";

export default function KeyPurchaseTile({
  keyPurchase,
}: {
  keyPurchase: KeyPurchase;
}) {
  return (
    <li className="flex items-center gap-3 p-3 py-1 rounded-lg bg-gradient-to-b from-white/40 to-gray-300/40">
      <div className="rounded-full h-10 w-10 overflow-clip border">
        <img
          className="h-full w-full object-cover"
          src="/static/images/background.png"
          alt="AAA"
        />
      </div>
      <span className="text-primary-foreground block grow text-sm font-mono">
        {formatAddress(keyPurchase.buyer)}
      </span>
      <span className="font-mono font-semibold">
        {formatTokenAmount(keyPurchase.price)}
      </span>
    </li>
  );
}
