import { AboutUs } from "@/components/sections/about/about-us";
import { EstablishedExcellence } from "@/components/sections/about/established-excellence";
import { WhyUs } from "@/components/sections/about/why-us";
import { HowWeWork } from "@/components/sections/about/how-we-work";

export default function AboutPage() {
  return (
    <main>
      <AboutUs />
      <EstablishedExcellence />
      <WhyUs />
      <HowWeWork />
    </main>
  );
}