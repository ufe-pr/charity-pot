"use client";

import { ModeToggle } from "../theme-mode-toggle";
import { ConnectWalletButton } from "@/components/ui/connect-wallet-button";

export default function Header() {
  return (
    <div className="border-border">
      <header className="container flex gap-4 lg:gap-16 items-center justify-end px-8 py-4 h-(var(--header-height))">
        {/* <h1 className="text-lg font-semibold">Pot Luck</h1> */}
        {/* <NavigationMenu className="justify-start max-w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                See Open pots
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
        <div className="space-x-2">
          {/* <ModeToggle /> */}
          <ConnectWalletButton />
        </div>
      </header>
    </div>
  );
}
