import type { Metadata } from "next";
import ApplyHero from "../components/ApplyHero";
import TrustedBy from "../components/TrustedBy";
import AfterYouApply from "../components/AfterYouApply";
import HelpedFounders from "../components/HelpedFounders";
import ApplyForm from "../components/ApplyForm";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Apply — Optimability",
  description:
    "Apply to Optimability — a done-for-you health system built for founders",
};

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ApplyHero />
      <TrustedBy />
      <AfterYouApply />
      <HelpedFounders />
      <ApplyForm />
      <Faq />
      <Footer />
    </div>
  );
}
