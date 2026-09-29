"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {isSubmitted ? (
              /* ================= SUCCESS MESSAGE ================= */
              <div className="flex min-h-[620px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[650px]">
                {/* Success Icon */}
                <div className="flex h-24 w-24 animate-[scaleIn_0.4s_ease-out] items-center justify-center rounded-full bg-green-50">
                  <div className="flex h-16 w-16 animate-[scaleIn_0.5s_ease-out_0.1s_both] items-center justify-center rounded-full bg-green-500">
                    <Check className="h-8 w-8 animate-[checkIn_0.5s_ease-out_0.2s_both] text-white" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="mt-7 animate-[fadeUp_0.5s_ease-out] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Message Sent Successfully
                </h1>

                {/* Description */}
                <p className="mt-3 max-w-md animate-[fadeUp_0.5s_ease-out_0.1s_both] text-sm leading-7 text-slate-500 sm:text-base">
                  Thank you for contacting Alliance Sourcing BD. Our team will
                  review your message and get back to you shortly.
                </p>

                {/* Button */}
                <button
                  type="button"
                  onClick={handleNewMessage}
                  className="group mt-8 inline-flex animate-[fadeUp_0.5s_ease-out_0.2s_both] items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-sky-600 hover:shadow-md"
                >
                  Send Another Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              /* ================= NORMAL CONTACT CARD ================= */
              <div className="grid lg:grid-cols-2">
                {/* ================= LEFT SIDE ================= */}
                <div className="relative overflow-hidden bg-slate-950 px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                  {/* Background Effects */}
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

                  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                  <div className="relative z-10">
                    {/* Company Name */}
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                      ALLIANCE SOURCING BD
                    </p>

                    {/* Heading */}
                    <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                      Your trusted
                      <span className="block text-sky-400">
                        sourcing partner.
                      </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                      We connect international buyers with reliable garment
                      manufacturers across Bangladesh, providing professional
                      sourcing and production support from development to
                      delivery.
                    </p>

                    {/* Services */}
                    <div className="mt-8 space-y-5">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Garment Sourcing
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-slate-400">
                          Reliable manufacturers for your requirements.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Quality & Production
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-slate-400">
                          Professional monitoring throughout production.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Bangladesh Factory Network
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-slate-400">
                          Trusted manufacturing partners across Bangladesh.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Message */}
                    <div className="mt-9 border-t border-white/10 pt-6">
                      <p className="text-sm leading-6 text-slate-400">
                        Looking for a reliable sourcing partner?
                      </p>

                      <p className="mt-1 text-base font-semibold text-white">
                        Tell us about your next apparel order.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11">
                  {/* Form Header */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-500">
                      LET&apos;S CONNECT
                    </p>

                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                      Contact Us
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Tell us about your sourcing requirements and we&apos;ll
                      get back to you shortly.
                    </p>
                  </div>

                  {/* ================= FORM ================= */}
                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-slate-700"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-300 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-semibold text-slate-700"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-300 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-semibold text-slate-700"
                      >
                        Phone
                        <span className="ml-1 font-normal text-slate-400">
                          (optional)
                        </span>
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-300 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-slate-700"
                      >
                        Your Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        required
                        className="min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition duration-300 placeholder:text-slate-300 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-base font-bold text-white shadow-sm transition duration-300 hover:bg-blue-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-80"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-20deg);
          }

          70% {
            transform: scale(1.15) rotate(5deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}