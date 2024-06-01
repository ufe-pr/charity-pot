import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Poppins, Seaweed_Script, Kode_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./(components)/header";
import { Analytics } from "@vercel/analytics/react";
import AIChat from "./ai-chat";
import Footer from "./(components)/footer";
import ContextProvider from "./context-provider";

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
        <ContextProvider>
          <Header />
          <AIChat />
          {children}
          <Footer />
        </ContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
