import { cn } from "@/lib/utils";
import Hero from "./(components)/hero";
import Image from "next/image";

function Section({
  children,
  imgSrc,
  alternate,
  imgAlt,
}: {
  children: React.ReactNode;
  imgSrc: string;
  alternate?: boolean;
  imgAlt?: string;
}) {
  return (
    <section className="min-h-[50vh] grid gap-10 md:grid-cols-2 container justify-items-center items-center">
      <div
        className={cn(
          "rounded-3xl overflow-hidden w-full max-w-[400px] aspect-square",
          {
            "order-2": alternate,
          }
        )}
      >
        <Image
          src={imgSrc}
          alt={imgAlt ?? ""}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-[400px] text-lg text-primary-foreground leading-relaxed text-center">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Section imgSrc="/static/images/lp-2.jpg">
        <p>You can create a pot where you invite friends to join</p>
      </Section>
      <Section alternate imgSrc="/static/images/lp-1.jpg">
        <p>
          You play with your BabyDoge tokens, the highest bidder wins 40% of the
          Pot, the other 40% is shared amongst the other participants and the
          remaining 20% goes towards poverty alleviation
        </p>
      </Section>
      <Section imgSrc="/static/images/lp-3.jpg">
        <p>
          You can play the game and also get a charity NFT after the game, a
          token of your contrubution to a noble cause
        </p>
      </Section>
      <Section alternate imgSrc="/static/images/lp-4.jpg">
        <p>
          Tokens in the pot will also be staked into a profitable yield farm for
          the duration of the game, accruing yield in the pot
        </p>
      </Section>
      <div></div>
    </div>
  );
}
