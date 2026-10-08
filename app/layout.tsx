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
  title: "Continental 12 — Sponsorship Auction on a Royal Enfield Continental GT 650",
  description:
    "24 ad zones on one Continental GT 650 Chrome Edition, auctioned to brands. Win a zone, your mark rides every kilometre of the campaign. Auction closes 26 January 2027.",
  openGraph: {
    title: "Continental 12 — One bike. 24 zones. Your brand rides India.",
    description:
      "Sponsorship auction: 24 decal zones on a touring Continental GT 650. Bids close 26 January 2027.",
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
