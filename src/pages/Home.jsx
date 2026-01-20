import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Problems from "../components/Problems";
import PracticeAreas from "../components/PracticeAreas";
import Process from "../components/Process";
import LeadMagnet from "../components/LeadMagnet";
import Evidence from "../components/Evidence";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main style={{ paddingTop: "var(--header-h)" }}>
        <Hero />
        <TrustBar />
        <About />
        <Problems />
        <PracticeAreas />
        <Process />
        <LeadMagnet />
        <Evidence />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
