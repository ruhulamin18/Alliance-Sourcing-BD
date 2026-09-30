import { GlobalPartnersHero } from "@/components/sections/global-partners/global-partners-hero";
import { ExplorePartners } from "@/components/sections/global-partners/explore-partners";
import { PartnershipStrengths } from "@/components/sections/global-partners/partnership-strengths";
import { GlobalPartnersFaq } from "@/components/sections/global-partners/global-partners-faq";

export default function GlobalPartnersPage() {
  return (
    <main>
      <GlobalPartnersHero />
      <ExplorePartners />
      <PartnershipStrengths />
      <GlobalPartnersFaq />
    </main>
  );
}