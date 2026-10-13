"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export function PartnersMarquee() {
  const partners = [
    { name: "UGREEN", category: "Consumer Electronics", badge: "Tech Leader" },
    { name: "OneOdio", category: "Pro Audio & Headphones", badge: "Global Brand" },
    { name: "Depancel", category: "Luxury Swiss Watches", badge: "Horology" },
    { name: "AUREX Labs", category: "Beauty & Biotech", badge: "Skincare" },
    { name: "OKP Life", category: "Smart Home Robotics", badge: "Amazon Top 10" },
    { name: "Grillion", category: "Outdoor & Kitchen", badge: "Kickstarter Funded" },
    { name: "Oniros", category: "Sleep & Wearables", badge: "DTC Brand" },
    { name: "Owkar", category: "Smart Kitchen Appliances", badge: "Direct Brand" },
  ];

  return (
    <section className="py-16 bg-[#08080a] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#005CFF] mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Trusted By Industry Category Leaders
        </div>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">
          Over 300+ ambitious Amazon sellers, Shopify brands, and venture-backed startups trust our video productions to multiply their conversions.
        </p>
      </div>

      <div className="relative overflow-hidden select-none">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#005CFF]/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center font-heading font-black text-lg text-white group-hover:text-[#005CFF] transition-colors">
                {partner.name[0]}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold font-heading text-white tracking-wide group-hover:text-white transition-colors">
                  {partner.name}
                </div>
                <div className="text-[11px] text-zinc-400">
                  {partner.category}
                </div>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 ml-2">
                {partner.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
