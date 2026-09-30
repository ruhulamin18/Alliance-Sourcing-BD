import { BuyingHouseHero } from "@/components/sections/buying-house/buying-house-hero";
import { BuyingHouseServices } from "@/components/sections/buying-house/buying-house-services";
import { BuyingHouseProducts } from "@/components/sections/buying-house/buying-house-products";

export default function BuyingHousePage() {
  return (
    <main>
      <BuyingHouseHero />
      <BuyingHouseServices />
      <BuyingHouseProducts />
    </main>
  );
}