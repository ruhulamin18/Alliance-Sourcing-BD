import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { Contact } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      
    </main>
  );
}