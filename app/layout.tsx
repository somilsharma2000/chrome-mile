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
  title: "Chrome Yatra — The livery that rides India.",
  description:
    "A livery auction: 12 exclusive decal lots on a Royal Enfield Continental GT 650 Mr. Clean. One brand per lot, GPS-verified ride proof, full livery or full refund. Bidding closes 26 January 2027.",
  openGraph: {
    title: "Chrome Yatra — The livery that rides India.",
    description:
      "A curated livery auction: 12 decal lots on a chrome GT 650, one brand per lot, GPS-proven on every tour. Bidding closes 26 Jan 2027.",
    url: siteUrl,
    siteName: "Chrome Yatra",
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
