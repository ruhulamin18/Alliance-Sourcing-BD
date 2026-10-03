"use client";

import {
  ClipboardCheck,
  FileCheck2,
  Handshake,
  PackageCheck,
  ReceiptText,
  Ship,
  LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const iconMap: Record<string, LucideIcon> = {
  "Product development & sampling": PackageCheck,
  "Supplier selection & evaluation": Handshake,
  "Price negotiation & order placement": ReceiptText,
  "Production follow-up & quality inspection test": ClipboardCheck,
  "Compliance Assistance": FileCheck2,
  "Shipping Coordination": Ship,
};

const defaultIcon = PackageCheck;

export function BuyingHouseServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/services`);

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to fetch services"
          );
        }

        setServices(result.data || []);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load services"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const activeServices = useMemo(() => {
    return services.filter((service) => service.isActive);
  }, [services]);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-500">
            Buying House Services
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Buying house services
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            We manage every step of your sourcing journey with precision
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Loading services...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="mt-12 text-center">
            <p className="text-sm text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && activeServices.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              No services available at the moment.
            </p>
          </div>
        )}

        {/* Service Cards */}
        {!loading && !error && activeServices.length > 0 && (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service) => {
              const Icon = iconMap[service.title] || defaultIcon;

              return (
                <div
                  key={service.id}
                  className="
                    group
                    min-h-[175px]
                    rounded-xl
                    border border-slate-100
                    bg-white
                    px-5 py-5
                    shadow-[0_4px_18px_rgba(15,23,42,0.07)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-cyan-600
                    hover:shadow-[0_10px_28px_rgba(8,145,178,0.25)]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-xl
                      bg-sky-50
                      transition-colors duration-300
                      group-hover:bg-white/10
                    "
                  >
                    <Icon
                      className="
                        h-8 w-8
                        text-sky-500
                        transition-colors duration-300
                        group-hover:text-white
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-5
                      text-lg font-bold leading-6
                      text-slate-900
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-sm leading-6
                      text-slate-500
                      transition-colors duration-300
                      group-hover:text-white/95
                    "
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}