"use client";

import React from "react";
import {
  FileText,
  Camera,
  Film,
  Rocket,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export function ProcessSection({ onOpenBooking }: ProcessSectionProps) {
  const steps = [
    {
      step: "01",
      title: "Concept, Script & Hook Ideation",
      icon: FileText,
      desc: "We analyze your top competitors, target buyer demographics, and customer review pain-points to write 3 high-converting script variants.",
      highlights: [
        "Competitor gap analysis",
        "Direct-response visual storyboard",
        "Selection of tone & vocal talents",
      ],
    },
    {
      step: "02",
      title: "Product Receipt & 4K Studio Shoot",
      icon: Camera,
      desc: "You ship your samples to our New York studio. Our DP sets up custom lighting rigs, macro tracks, hands-on actors, and specialized sets.",
      highlights: [
        "Studio receiving & inspection",
        "Custom props, models & backdrops",
        "Multi-angle 4K 60FPS cinematic capture",
      ],
    },
    {
      step: "03",
      title: "Nitro-Mix & AI Post-Production",
      icon: Film,
      desc: "Our senior editors synchronize kinetic typography, sound effects, synthetic 3D elements, color grading, and speed ramps.",
      highlights: [
        "Dynamic sound design & audio mastering",
        "AI graphic overlays & product callouts",
        "Interactive feedback portal for your team",
      ],
    },
    {
      step: "04",
      title: "Final 4K Delivery & Scale",
      icon: Rocket,
      desc: "You receive high-bitrate master files formatted for Amazon listings, Shopify hero banners, Meta Ads, TikTok Spark Ads, and YouTube.",
      highlights: [
        "16:9, 9:16, and 1:1 format cutdowns",
        "100% Commercial rights handover",
        "Raw clips bundle available upon request",
      ],
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0a0a0d] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
            Simple &amp; Predictable Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            4 Steps For <span className="text-[#005CFF]">Your Project</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            From sending your product samples to launching your high-converting ads, our streamlined process eliminates guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#111116] border border-white/10 p-6 flex flex-col justify-between hover:border-[#005CFF]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-heading text-white/20 group-hover:text-[#005CFF] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#005CFF] text-[#005CFF] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#005CFF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button
            onClick={onOpenBooking}
            className="bg-[#005CFF] hover:bg-[#004dc9] text-white font-heading font-semibold text-xs px-8 py-5 rounded-xl gap-2 shadow-xl shadow-blue-500/20"
          >
            Start Step 1: Schedule Kickoff Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
