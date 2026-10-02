import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    description: "Our friendly team is here to help.",
    details: [
      "info@alliancebdltd.com",
      "mansur@alliancebdltd.com",
      "khan@alliancebdltd.com",
      "faroque@alliancebdltd.com",
    ],
    type: "email",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri from 9am to 6pm.",
    details: ["+880 1972-438732", "+880 171423-8182"],
    type: "phone",
  },
  {
    icon: MapPin,
    title: "Office",
    description:
      "Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh",
    details: [],
    type: "address",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-h-[300px] rounded-3xl border border-slate-200 bg-white px-8 py-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon
                      className="h-7 w-7 text-cyan-600"
                      strokeWidth={2}
                    />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-7 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Email Details */}
                {item.type === "email" && (
                  <div className="mt-6 space-y-3">
                    {item.details.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                )}

                {/* Phone Details */}
                {item.type === "phone" && (
                  <div className="mt-6 space-y-3">
                    {item.details.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                )}

                {/* Office Directions */}
                {item.type === "address" && (
                  <a
                    href="https://maps.app.goo.gl/GAGVNrxbeFdxddQr8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Get directions
                    <span aria-hidden="true">—</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}