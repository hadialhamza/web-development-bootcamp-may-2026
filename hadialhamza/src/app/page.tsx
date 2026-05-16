import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AnalyticsPreview from "@/components/landing/AnalyticsPreview";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <AnalyticsPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
