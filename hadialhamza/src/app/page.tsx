import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AnalyticsPreview from "@/components/landing/AnalyticsPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <AnalyticsPreview />

        {/* Placeholder sections for scroll testing */}
        <section
          id="pricing"
          className="min-h-screen flex items-center justify-center bg-muted/20"
        >
          <h2 className="text-4xl font-bold">Pricing Section</h2>
        </section>
      </main>
    </>
  );
}
