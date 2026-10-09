import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsStrip from "@/components/StatsStrip";
import RouteLine from "@/components/RouteLine";
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do I bid?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Bidder registration opens on the Chrome Mile platform ahead of the auction window. A refundable \\u20b92,000 deposit gets you a Bidder ID, then bid on any lot with same-day written confirmation and instant outbid notice. Bids above \\u20b925,000 require a GSTIN or PAN for verification.\"}}, {\"@type\": \"Question\", \"name\": \"What exactly do I own?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Exclusive use of your lot's surface for the campaign season: your logo installed at the exact size and position listed, professional install photography, GPS-verified ride certificates from every tour, and usage rights to the ride imagery for your own marketing. One brand per lot \\u2014 no co-branding, no rotation.\"}}, {\"@type\": \"Question\", \"name\": \"Why is a lot on a motorcycle worth this?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For less than a month of a mid-tier agency retainer, your mark crosses the country on a machine people photograph at every fuel stop \\u2014 with documentation no hoarding or wrap can produce: named ride logs, certificates, and a public archive. Twelve lots total. Once they're sold, there is no inventory left this season.\"}}, {\"@type\": \"Question\", \"name\": \"What if not all twelve lots sell by close?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The machine ships in full livery or not at all. If any lot is unsold at close on 26 January 2027, the auction voids and every payment and deposit is returned in full. No half-decal GT 650 ever leaves the showroom.\"}}, {\"@type\": \"Question\", \"name\": \"When do I pay?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"30% on award, 70% only after your install photography is delivered. Deposits are refunded in full if you're outbid or the auction voids. All payments run through a payment gateway with digital receipts.\"}}, {\"@type\": \"Question\", \"name\": \"What do you need from my brand?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Vector logo files, brand colour codes, a completed brand profile form and a signed sponsor agreement \\u2014 all listed in the Documents section. We handle printing, installation and photography; you approve the mockup before anything touches the machine.\"}}]}"}} />
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <StatsStrip />
        <RouteLine />
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
