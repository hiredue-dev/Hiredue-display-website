import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Footer from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/default";
import Navbar from "@/components/sections/navbar/default";
import Pricing from "@/components/sections/pricing/default";
import Why from "@/components/sections/why/default";
import Metrics from "@/components/sections/metrics/default";
import Bento from "@/components/sections/bento/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Bento />
      <Why />
      <Metrics />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
