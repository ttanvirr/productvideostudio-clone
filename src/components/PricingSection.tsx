"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const plans = [
    {
      name: "STARTER PACK",
      badge: "Perfect for 1 Product Launch",
      price: "$990",
      period: "per product listing",
      description:
        "Everything needed to transform a flat Amazon or Shopify listing into an immersive 4K video showcase.",
      features: [
        "1x Main 60-Second 4K Product Film (16:9)",
        "Studio Lighting & Macro Detail Shots",
        "Kinetic Feature Callouts & Spec Badges",
        "Licensed Background Music & Audio Mastering",
        "2 Rounds of Revisions Included",
        "Amazon & Shopify Ready Files (MP4 UHD)",
      ],
      popular: false,
      cta: "Get Starter Pack",
    },
    {
      name: "GROWTH PACK",
      badge: "Most Popular for Scaling Brands",
      price: "$2,490",
      period: "per multi-angle campaign",
      description:
        "The complete direct-response arsenal designed to lower CPA and scale ad spend on Meta, TikTok & Amazon PPC.",
      features: [
        "1x Main 60-Second Listing Master (16:9)",
        "3x Direct-Response Ad Cuts (9:16 Vertical for TikTok/Reels)",
        "5x High-CTR Hook Variations to A/B Test",
        "Professional On-Camera Hand Model / Actor",
        "AI Nitro-Mix Motion Graphics & Sound Design",
        "Full Voiceover by Studio Voice Talent",
        "Unlimited Revisions Until Approval",
        "Raw B-Roll Clips Included",
      ],
      popular: true,
      cta: "Get Growth Pack",
    },
    {
      name: "ENTERPRISE PACK",
      badge: "Complete Brand Ecosystem",
      price: "$4,990+",
      period: "full custom campaign",
      description:
        "For global DTC powerhouses and Amazon aggregators requiring cinema commercial production, 3D CGI, and full omni-channel suites.",
      features: [
        "Complete Omni-Channel Video Suite (10+ Deliverables)",
        "Photorealistic 3D CGI Modeling & Disassembly",
        "AI Synthetic Environments & Avatar Casting",
        "Complete Amazon Premium A+ Graphics Suite",
        "High-Resolution 45MP Retouched Studio Photos (10x)",
        "Dedicated Creative Director & Priority 48h Turnaround",
        "Full Raw Footage & Project File Handoff",
      ],
      popular: false,
      cta: "Contact for Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#08080b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Clear, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Simple Packages.{" "}
            <span className="text-[#005CFF]">Everything Shot, Edited, Delivered.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            No surprise add-ons, no hidden studio fees, and no recurring royalty licenses. You own 100% of the finished assets forever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#141824] via-[#0f121d] to-[#090b11] border-2 border-[#005CFF] shadow-2xl shadow-blue-500/20 lg:-translate-y-3"
                  : "bg-[#101014] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#005CFF] text-white text-[10px] font-heading font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Zap className="w-3 h-3 fill-current" />
                  Most Popular for Scaling
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black font-heading text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#005CFF] font-semibold mt-0.5">
                      {plan.badge}
                    </p>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-heading text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-400">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-zinc-400">
                    What&apos;s Included:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#005CFF]/20 text-[#005CFF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  onClick={() => onOpenBooking(plan.name)}
                  className={`w-full py-5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                    plan.popular
                      ? "bg-[#005CFF] hover:bg-[#004dc9] text-white shadow-xl shadow-blue-500/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
