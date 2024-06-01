import { ConnectWalletButton } from "@/components/ui/connect-wallet-button";

export default function Header() {
  return (
    <div className="border-border">
      <header className="container flex gap-4 lg:gap-16 items-center justify-end px-8 py-4 h-(var(--header-height))">
        <div className="space-x-2">
          <ConnectWalletButton />
        </div>
      </header>
    </div>
  );
}
