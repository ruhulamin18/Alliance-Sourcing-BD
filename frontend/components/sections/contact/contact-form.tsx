"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Google Map */}
          <div className="min-h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              title="Alliance Sourcing BD Office Location"
              src="https://www.google.com/maps?q=Asha%20Plaza%20Hemayetpur%20Savar%20Dhaka%20Bangladesh&output=embed"
              className="h-full min-h-[520px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form / Success Message */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {isSubmitted ? (
              /* Success State */
              <div className="flex min-h-[520px] flex-col items-center justify-center px-6 py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
                    <Check className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight text-slate-900">
                  Message Sent Successfully
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Thank you for contacting Alliance Sourcing BD. We have
                  received your message and will get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={handleNewMessage}
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-700"
                >
                  Send Another Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              /* Contact Form */
              <div className="px-7 py-8 sm:px-9 sm:py-9 lg:px-10">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Send us a Message
                  </h2>

                  <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Have questions? We&apos;d love to hear from you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Name and Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your sourcing needs..."
                      required
                      className="min-h-[130px] w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 px-6 text-sm font-bold text-white shadow-md transition duration-300 hover:from-blue-700 hover:to-sky-500 hover:shadow-lg"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}