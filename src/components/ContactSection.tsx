"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "E-Commerce Listing Video",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050508] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info & Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Make It Happen
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase leading-[1.05]">
                Get In <span className="text-[#005CFF]">Touch</span>
              </h2>
              <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                Ready to elevate your product videos and outconvert your category rivals? Fill out the inquiry form or reach out directly to our production studio.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:hello@productvideostudio.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-[#005CFF] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#005CFF]/10 text-[#005CFF] group-hover:bg-[#005CFF] group-hover:text-white flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500">
                    Production Inquiries
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#005CFF] transition-colors">
                    hello@productvideostudio.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+13125623874"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-[#005CFF] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#005CFF]/10 text-[#005CFF] group-hover:bg-[#005CFF] group-hover:text-white flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500">
                    Direct Line
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#005CFF] transition-colors">
                    +1 (312) 562-3874
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f0f14] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#005CFF]/10 text-[#005CFF] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500">
                    Studio &amp; Soundstage
                  </div>
                  <div className="text-sm font-bold text-white">
                    320 E 7th St, Brooklyn, New York 11218
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 text-xs text-zinc-400">
              <Clock className="w-4 h-4 text-[#005CFF] shrink-0" />
              <span>We reply to all inquiries within 2 to 4 business hours with an initial estimate.</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#111116] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-zinc-400 max-w-md text-sm mb-6">
                  Thank you, <span className="text-white font-medium">{form.name}</span>! Our lead producer will review your project details and email you a proposal breakdown shortly.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      brand: "",
                      service: "E-Commerce Listing Video",
                      message: "",
                    });
                  }}
                  variant="outline"
                  className="border-white/20 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="text-xl font-bold font-heading text-white">
                    Request a Production Proposal
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Tell us about your brand goals and we&apos;ll send tailored video samples and pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@brand.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">
                      Store or Product Link
                    </label>
                    <input
                      type="text"
                      placeholder="amazon.com/dp/... or shopify.com"
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#16161c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#005CFF]"
                  >
                    <option value="E-Commerce Listing Video">E-Commerce Listing Video</option>
                    <option value="Promo & Commercial Video">Promo &amp; Commercial Video</option>
                    <option value="AI Product Video">AI Product Video &amp; Synthetic CGI</option>
                    <option value="Unboxing & Organic UGC">Unboxing &amp; Organic UGC</option>
                    <option value="Tutorial & Explainer Video">Tutorial &amp; Explainer Video</option>
                    <option value="Product Photography">Product Photography &amp; 360 Spin</option>
                    <option value="Amazon A+ Content Suite">Amazon A+ Content Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Project Scope &amp; Target Launch Date
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your product, how many variations you need, and any visual inspirations you like..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-5 bg-[#005CFF] hover:bg-[#004dc9] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  Submit Request For Free Proposal
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
