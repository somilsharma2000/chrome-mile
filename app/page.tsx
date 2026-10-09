import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsStrip from "@/components/StatsStrip";
import ZoneMap from "@/components/ZoneMap";
import Lot3DSection from "@/components/Lot3DSection";
import Zones from "@/components/Zones";
import HowItWorks from "@/components/HowItWorks";
import SponsorKit from "@/components/SponsorKit";
import Founder from "@/components/Founder";
import Legal from "@/components/Legal";
import Documents from "@/components/Documents";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <StatsStrip />
        <ZoneMap />
        <Lot3DSection />
        <Zones />
        <HowItWorks />
        <SponsorKit />
        <Founder />
        <Legal />
        <Documents />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
