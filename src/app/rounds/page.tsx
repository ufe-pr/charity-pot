"use client";

import { Button } from "@/components/ui/button";
import { sunkCostCharityAbi } from "@/generated";
import { useReadContract } from "wagmi";
import RoundCard from "./(components)/round-card";
import { MAIN_CONTRACT_ADDRESS } from "@/config/constants";


export default function Rounds() {
  const { data: counter } = useReadContract({
    abi: sunkCostCharityAbi,
    functionName: "roundCounter",
    address: MAIN_CONTRACT_ADDRESS,
  });

  return (
    <div className="p-5">
      <div className="max-w-screen-lg mx-auto space-y-5">
        <div className="max-w-screen-sm mx-auto space-y-5 mb-10">
          <h1 className="text-center text-3xl text-primary-foreground font-medium">
            Charity Lockers
          </h1>
          <p className="font-script text-lg lg:text-2xl text-center text-pretty">
            Welcome to Charity Lockers game. Lock your tokens in and help us
            raise money in a fun way. For a break down on the rules of the game,
            see{" "}
            <a
              href="/rules"
              target="_blank"
              className="text-primary-foreground hover:underline"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button asChild>
            <a href="/rounds/create">Create Round</a>
          </Button>
        </div>
        <ul className="grid md:grid-cols-2 gap-10">
          {Array.from({ length: Number(counter ?? 0) }).map((_, index) => (
            <RoundCard
              key={Number(counter ?? 0) - index}
              roundId={BigInt(Number(counter ?? 0) - index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
