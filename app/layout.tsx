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
  title: "Continental 12 — Decal Kits for the Royal Enfield Continental GT 650 Chrome Edition",
  description:
    "Premium heritage racing decal kits, made to order for the Royal Enfield Continental GT 650 Chrome Edition. Pre-cut automotive vinyl, kit-by-kit fitment, straight-to-WhatsApp ordering.",
  openGraph: {
    title: "Continental 12 — Heritage Racing Decal Kits",
    description:
      "Premium decal kits made to order for the Continental GT 650 Chrome Edition.",
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
