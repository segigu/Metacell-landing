import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarketProblem from "@/components/MarketProblem";
import Solution from "@/components/Solution";
import Economy from "@/components/Economy";
import HowItWorks from "@/components/HowItWorks";
import Science from "@/components/Science";
import Comparison from "@/components/Comparison";
import Support from "@/components/Support";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <main>
        <Hero />
        <MarketProblem />
        <Solution />
        <Economy />
        <HowItWorks />
        <Science />
        <Comparison />
        <Support />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
