import React from "react";
import CreateRoundForm from "./(components)/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CreateRound() {
  return (
    <main className="p-4">
      <style>
        {`
        body {
          background-image: none !important;
        }`}
      </style>
      <div className="flex max-w-2xl mx-auto">
        <Button variant="outline" asChild>
          <Link href="/rounds" className="">
            <ChevronLeft className="h-[1em] w-[1em] mr-[0.3em]" />
            Back
          </Link>
        </Button>
      </div>
      <div className="max-w-2xl mx-auto">
        <CreateRoundForm />
      </div>
    </main>
  );
}
