/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Upload } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Address } from "viem";
import { ICreateRoundSchema } from "../types";
import { useCreateRound } from "../(lib)/hooks";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { ConnectWalletButton } from "@/components/ui/connect-wallet-button";
import DurationPicker, { Duration } from "@/components/ui/duration-picker";
import LoadingModal from "@/components/ui/loading-modal";
import { useRouter } from "next/navigation";
import { parseTokenAmount } from "../../utils";

export default function CreateRoundForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<URL | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected } = useAccount();
  const router = useRouter();
  const { createRound, hash } = useCreateRound();
  const { data: txReceipt } = useWaitForTransactionReceipt({ hash });
  useEffect(() => {
    if (txReceipt) {
      setTimeout(() => {
        router.push("/rounds");
      }, 2 * 1000);
    }
  }, [txReceipt, router]);

  const [duration, setDuration] = useState<Duration>(new Duration({}));
  const [timerExtension, setTimerExtension] = useState<Duration>(
    new Duration({})
  );
  const [maxTimer, setMaxTimer] = useState<Duration>(new Duration({}));

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      // Log Form Values
      const formData = new FormData(e.target as HTMLFormElement);
      const name = formData.get("name");
      const initialBalance = formData.get("initialBalance");
      const priceIncrement = formData.get("priceIncrement");
      const charityWallet = formData.get("charityWallet");

      const round: ICreateRoundSchema = {
        name: name as string,
        duration: BigInt(duration.toSeconds()),
        timerExtension: BigInt(timerExtension.toSeconds()),
        maxTimer: BigInt(maxTimer.toSeconds()),
        initialBalance: parseTokenAmount(initialBalance as string),
        priceIncrement: parseTokenAmount(priceIncrement as string),
        charityWallet: charityWallet as Address,
        promotionalImage: image?.toString(),
      };

      console.log("Creating round:", round);
      createRound(round).finally(() => {
        setIsLoading(false);
      });
    },
    [createRound, duration, image, maxTimer, timerExtension]
  );
  return (
    <form onSubmit={handleFormSubmit}>
      <LoadingModal isOpen={isLoading || !!hash}>
        {!hash
          ? "Waiting for transaction. Accept the prompt in your wallet to sign the transaaction to proceed"
          : !txReceipt
            ? "Waiting for transaction confirmation"
            : `${txReceipt.transactionHash}`}
      </LoadingModal>
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="px-0">
          <CardTitle>Create a Round</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent className="py-4 px-0">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Round name</Label>
              <Input name="name" type="text" required />
            </div>
            <div className="grid gap-3 gap-y-6 grid-cols-2">
              <div className="flex flex-col gap-3 col-span-2 lg:col-span-2">
                <Label htmlFor="duration">Starting Timer [ H | m | s ]</Label>
                <DurationPicker
                  onChange={(value) => {
                    setDuration(value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 col-span-1">
                <Label htmlFor="timerExtension">Timer extension</Label>
                <DurationPicker
                  onChange={(value) => {
                    setTimerExtension(value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 col-span-1">
                <Label htmlFor="maxTimer">Max. Timer</Label>
                <DurationPicker
                  onChange={(value) => {
                    setMaxTimer(value);
                  }}
                />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              <div className="flex flex-col gap-3 col-span-1">
                <Label htmlFor="initialBalance">Starting Pool balance</Label>
                <Input name="initialBalance" type="number" required />
              </div>
              <div className="flex flex-col gap-3 col-span-1">
                <Label htmlFor="duration">Price increment</Label>
                <Input name="priceIncrement" type="number" required />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="charityWallet">Charity Wallet (Optional)</Label>
              <small className="text-sm italic text-slate-500">
                The account that will receive the funds for charity after the
                round ends. Leave empty to use the community wallet.
              </small>
              <Input
                name="charityWallet"
                type="text"
                maxLength={42}
                placeholder="0x"
                pattern="^0x[a-fA-F0-9]{40}$"
              />
            </div>
            <div className="flex flex-col gap-3 col-span-1">
              <Label htmlFor="promotionalImage">
                Promotional Image (Optional)
              </Label>
              <p className="text-sm text-muted-foreground italic">
                The link should be as short as possible because the longer the
                link, the more gas it&apos;ll cost to save it on-chain
              </p>
              <Input
                name="promotionalImage"
                type="text"
                placeholder="https://example.com/image.jpg"
                onChange={(e) => {
                  setImage(new URL(e.target.value));
                }}
                value={image?.toString() || ""}
              />
              <button
                onClick={() => imageRef?.current?.click()}
                className="w-full group relative flex items-center justify-center rounded-md border border-dashed min-h-20 overflow-clip"
              >
                {image && (
                  <img
                    alt="Product image"
                    className="w-full max-h-40 object-cover"
                    src={image.toString()}
                    width={500}
                    height={500}
                  />
                )}
                <div
                  className={cn(
                    "absolute top-0 left-0 h-full w-full flex items-center justify-center",
                    {
                      "bg-opacity-60 duration-300 transition opacity-0 group-hover:opacity-100 bg-black":
                        !!image,
                    }
                  )}
                >
                  <Upload
                    className={cn({
                      "text-white h-8 w-8": !!image,
                      "text-muted-foreground h-4 w-4": !image,
                    })}
                  />
                  <span className="sr-only">Upload</span>
                </div>
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="py-4 justify-center px-0">
          {!isConnected ? (
            <ConnectWalletButton />
          ) : (
            <Button disabled={!!hash}>Create Round {!!hash && "..."}</Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
