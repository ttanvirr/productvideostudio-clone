"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Gabriel O. Eastwood",
      role: "E-Commerce Director, Audio & Tech",
      avatar: "G",
      stars: 5,
      title: "Our Amazon listing conversion jumped by 38% in week one.",
      quote:
        "The team at Product Video Studio understood our direct-response requirements immediately. The lighting, macro shots, and kinetic graphics gave our listing an unmatched premium edge over competitors.",
      brand: "Aura Sound Labs",
    },
    {
      name: "Carlos E. Ashcroft",
      role: "Founder, DTC Kitchen Brand",
      avatar: "C",
      stars: 5,
      title: "Best investment for our Meta and TikTok ad pipeline.",
      quote:
        "We tested 5 hooks they delivered. Two of them became our winning ad creatives for Q4, producing over $280K in sales with a 4.1x blended ROAS. Their 72-hour delivery speed was unbelievable.",
      brand: "Grillion Outdoor",
    },
    {
      name: "Cristian M. Durant",
      role: "Brand Marketing Lead, Robotics",
      avatar: "C",
      stars: 5,
      title: "The AI & 3D rendering looks like a $50k Apple commercial.",
      quote:
        "Our smart cleaning device needed complex internal mechanism cutaways. They synthesized photorealistic 3D exploded views mixed with real studio hands-on footage. Pure art and pure conversion.",
      brand: "OKP Robotics",
    },
    {
      name: "Emilio J. Harper",
      role: "Amazon Aggregator Portfolio Manager",
      avatar: "E",
      stars: 5,
      title: "Over 20 products shot with them and counting.",
      quote:
        "When managing 40+ Amazon ASINs, having a reliable studio is life or death. Product Video Studio handles everything from receiving inventory to final 4K A+ video uploads without any hand-holding.",
      brand: "Elevate DTC Brands",
    },
    {
      name: "Diego H. Redmond",
      role: "Head of Growth, Wearables",
      avatar: "D",
      stars: 5,
      title: "Cut our customer support inquiries by over 40%.",
      quote:
        "The tutorial video they produced for our fitness tracker eliminated repetitive onboarding questions. Customers watch the 45-second guide and get setup instantly without frustration.",
      brand: "Chronos Active",
    },
    {
      name: "Adrian B. Fulton",
      role: "Creative Director, Luxury Watch Brand",
      avatar: "A",
      stars: 5,
      title: "Flawless macro cinema work on complex reflective sapphire.",
      quote:
        "Watches are notoriously tricky to light due to curved crystals and polished bezels. Their studio DP handled it with true mastery. Cinematic, high-energy, and completely stunning.",
      brand: "Depancel Motorsports",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#050508] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
            Real Feedback from Founders &amp; Operators
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Behind Every Statistic <span className="text-[#005CFF]">Pulses A Human Story</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            See how world-class e-commerce brands leverage our studio to establish category dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-[#005CFF]/40 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F9A218]">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F9A218]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-[#005CFF]/30 transition-colors" />
                </div>

                <h3 className="text-sm font-bold font-heading text-white mb-3">
                  &ldquo;{t.title}&rdquo;
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#005CFF] to-blue-800 text-white font-bold flex items-center justify-center text-xs">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005CFF]" />
                    </div>
                    <div className="text-[10px] text-zinc-400">{t.role}</div>
                  </div>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  {t.brand}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
