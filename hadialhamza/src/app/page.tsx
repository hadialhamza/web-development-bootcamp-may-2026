import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero Section Placeholder */}
        <section className="min-h-screen flex items-center justify-center pt-20 bg-linear-to-b from-background to-muted/30">
          <div className="text-center space-y-6 max-w-3xl px-4">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
              Smart Personal <span className="text-primary">Expense</span> Tracking
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto font-medium">
              Take control of your finances with SpendSentry. Track, analyze, and save with our modern, premium dashboard.
            </p>
          </div>
        </section>

        {/* Placeholder sections for scroll testing */}
        <section id="features" className="min-h-screen flex items-center justify-center bg-card">
          <h2 className="text-4xl font-bold">Features Section</h2>
        </section>
        
        <section id="analytics" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Analytics Section</h2>
        </section>

        <section id="pricing" className="min-h-screen flex items-center justify-center bg-muted/20">
          <h2 className="text-4xl font-bold">Pricing Section</h2>
        </section>
      </main>
    </>
  );
}
