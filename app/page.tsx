import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Kits from "@/components/Kits";
import Heritage from "@/components/Heritage";
import Included from "@/components/Included";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Kits />
        <Heritage />
        <Included />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
