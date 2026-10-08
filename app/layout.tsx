import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Continental 12 — Fund the Ride. Your Brand Tours India.",
  description:
    "12 curated sticker lots on a Royal Enfield Continental GT 650, auctioned to brands to fund the machine. GPS-verified ride proof, all-or-nothing funding, zero risk. Auction closes 26 January 2027.",
  openGraph: {
    title: "Continental 12 — Fund the Ride. Your Brand Tours India.",
    description:
      "12 curated lots on a brand-new GT 650 Mr. Clean. Win a lot, your mark rides every kilometre — with proof.",
    url: siteUrl,
    siteName: "Continental 12",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
