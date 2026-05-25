import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HUDOverlay } from "@/components/hud/HUDOverlay";
import { NavMenu } from "@/components/hud/NavMenu";
import { ScanlineGrain } from "@/components/ui/ScanlineGrain";
import { BootSequence } from "@/components/hud/BootSequence";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  axes: ["opsz"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Imam — IT Graduate · Frontend Developer · Melbourne",
  description:
    "Mohamed Imam — IT graduate from RMIT University (June 2026). Frontend, full-stack, and cloud projects from Melbourne, Australia.",
  authors: [{ name: "Mohamed Imam Mohamed Nazar" }],
  openGraph: {
    title: "Mohamed Imam — IT Graduate · Melbourne",
    description:
      "Frontend, full-stack & cloud projects from a final-year IT student at RMIT. Built with care in Melbourne.",
    type: "website",
    url: "https://imamnazar.github.io/portfolio-v4/",
  },
};

export const viewport = {
  themeColor: "#0a0907",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-body">
        <ScanlineGrain />
        <BootSequence />
        <HUDOverlay />
        <NavMenu />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
