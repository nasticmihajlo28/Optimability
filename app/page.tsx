import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import HowWeHelpYou from "./components/HowWeHelpYou";
import HowToJoin from "./components/HowToJoin";
import RealResults from "./components/RealResults";
import BuiltToRun from "./components/BuiltToRun";
import WhatFoundersAreSaying from "./components/WhatFoundersAreSaying";
import OptimabilityFounders from "./components/OptimabilityFounders";
import FinalCta from "./components/FinalCta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="hero-gradient">
        <Navbar />
        <Hero />
      </div>
      {/* Reserves space for the hero image that overflows the gradient */}
      <div aria-hidden className="h-[21.25rem]" />
      <TrustedBy />
      <HowWeHelpYou />
      <HowToJoin />
      <RealResults />
      <BuiltToRun />
      <WhatFoundersAreSaying />
      <OptimabilityFounders />
      <FinalCta />
      <Faq />
      <Footer />
    </div>
  );
}
