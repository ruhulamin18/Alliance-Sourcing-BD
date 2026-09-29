import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ProcessFlow } from "@/components/sections/process-flow";
import { Services } from "@/components/sections/services";
import { BuyingHouseServices } from "@/components/sections/buying-house-services";
import { FactoryMachinery } from "@/components/sections/factory-machinery";
import { Catalog } from "@/components/sections/catalog";
import { CTASection } from "@/components/sections/cta-section";

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