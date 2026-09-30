"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of garments do you manufacture?",
    answer:
      "We support a wide range of apparel and garment products based on buyer requirements, specifications, and production needs.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "MOQ depends on the product type, fabric, design, production requirements, and factory capacity. Please contact us with your requirements for more information.",
  },
  {
    question: "How long does production typically take?",
    answer:
      "Production time depends on product complexity, order quantity, materials, and production planning. A specific timeline is confirmed after reviewing the order requirements.",
  },
  {
    question: "Do you offer sample production before bulk orders?",
    answer:
      "Yes. Sample development can be arranged before bulk production so buyers can review product details, quality, fit, and specifications.",
  },
  {
    question: "What quality control measures do you have in place?",
    answer:
      "Quality is monitored throughout the production process through inspection and follow-up according to the agreed product specifications and standards.",
  },
  {
    question: "Are your facilities certified for ethical and sustainable production?",
    answer:
      "Compliance and ethical production requirements are considered when selecting and working with manufacturing partners.",
  },
  {
    question: "How do you handle shipping and logistics?",
    answer:
      "We provide documentation support and coordinate with relevant partners to help ensure smooth shipment and delivery.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "Payment terms depend on the order, buyer requirements, production arrangements, and agreed commercial conditions.",
  },
];

export function GlobalPartnersFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Everything you need to know about partnering with Alliance
            Sourcing BD
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-5 py-5
                    text-left
                    transition-colors duration-200
                    hover:bg-slate-50
                  "
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      h-4 w-4 shrink-0
                      text-slate-700
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-5 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}