import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ZoneMap from "@/components/ZoneMap";
import Zones from "@/components/Zones";
import HowItWorks from "@/components/HowItWorks";
import SponsorKit from "@/components/SponsorKit";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ZoneMap />
        <Zones />
        <HowItWorks />
        <SponsorKit />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
