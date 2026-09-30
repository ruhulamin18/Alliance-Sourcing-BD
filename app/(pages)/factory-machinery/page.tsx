import { FactoryHero } from "@/components/sections/factory-machinery/factory-hero";
import { OwnFactory } from "@/components/sections/factory-machinery/own-factory";
import { AdvancedMachinery } from "@/components/sections/factory-machinery/advanced-machinery";
import { MachineryInventory } from "@/components/sections/factory-machinery/machinery-inventory";

export default function FactoryMachineryPage() {
  return (
    <main>
      <FactoryHero />
      <OwnFactory />
      <AdvancedMachinery />
      <MachineryInventory />
    </main>
  );
}