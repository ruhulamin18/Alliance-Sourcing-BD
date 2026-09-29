import { Hero } from "@/components/sections/home/hero";
import { FeaturesGrid } from "@/components/sections/home/features-grid";
import { ProcessFlow } from "@/components/sections/home/process-flow";
import { Services } from "@/components/sections/home/services";
import { BuyingHouseServices } from "@/components/sections/home/buying-house-services";
import { FactoryMachinery } from "@/components/sections/home/factory-machinery";
import { Catalog } from "@/components/sections/home/catalog";
import { CTASection } from "@/components/sections/home/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesGrid />
      <ProcessFlow />
      <Services />
      <BuyingHouseServices />
      <FactoryMachinery />
      <Catalog />
      <CTASection />
    </main>
  );
}