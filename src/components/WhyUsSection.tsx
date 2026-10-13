"use client";

import React from "react";
import {
  CheckCircle2,
  TrendingUp,
  Cpu,
  Camera,
  Target,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";

export function WhyUsSection() {
  const advantages = [
    {
      icon: Target,
      title: "Engineered for 3-Second Retention",
      desc: "We don't shoot generic videos. Every scene is storyboarded using proven direct-response ad psychology that arrests scrolling thumbs.",
    },
    {
      icon: Camera,
      title: "Cinema 4K Optics & Dedicated Studio",
      desc: "Full in-house soundstage equipped with high-speed macro lenses, motorized turntables, robotic sliders, and studio lighting rigs.",
    },
    {
      icon: Cpu,
      title: "AI & Nitro-Mix Post Production",
      desc: "Combining experienced Hollywood editors with AI rendering, kinetic graphics, 3D CGI explosions, and custom-composed sound designs.",
    },
    {
      icon: Zap,
      title: "72-Hour Rapid First Cut Delivery",
      desc: "Fast-moving brands can't wait 6 weeks for video assets. Our streamlined pipeline delivers initial cuts in as little as 3 business days.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#08080b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF]">
              <Sparkles className="w-3.5 h-3.5" />
              The Key Role We Play
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase leading-[1.05]">
              Video Experiences That{" "}
              <span className="text-[#005CFF]">Solve Problems.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Poor product videos cost brands millions in lost ad clicks and high return rates. We bridge the gap between Hollywood-level cinematography and performance e-commerce marketing.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "100% Commercial rights with no recurring licensing fees",
                "Formatted for Amazon, Shopify, Meta Ads, TikTok & YouTube",
                "Scriptwriting, professional models & voice actors included",
                "Unlimited fine-tuning until you are 100% satisfied with the cut",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-[#005CFF]/20 text-[#005CFF] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl font-extrabold font-heading text-white">
                  3.4<span className="text-[#005CFF]">x</span>
                </div>
                <div className="text-xs uppercase font-semibold text-zinc-400 mt-1">
                  Average ROAS Increase
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl font-extrabold font-heading text-emerald-400">
                  $45M<span className="text-white">+</span>
                </div>
                <div className="text-xs uppercase font-semibold text-zinc-400 mt-1">
                  Revenue Generated for Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#111116] border border-white/10 hover:border-[#005CFF]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005CFF]/10 text-[#005CFF] group-hover:bg-[#005CFF] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-2 group-hover:text-[#005CFF] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
