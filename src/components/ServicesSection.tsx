"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ShoppingBag,
  Tv,
  Sparkles,
  Box,
  FileQuestion,
  Camera,
  Layers,
  ArrowRight,
  Check,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenVideoModal: (url: string, title: string) => void;
}

export function ServicesSection({
  onOpenBooking,
  onOpenVideoModal,
}: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "listing",
      title: "E-Commerce Listing Video",
      subtitle: "Conversion-optimized product videos for Amazon, Shopify & Walmart",
      icon: ShoppingBag,
      tag: "Best for Listing Conversion",
      description:
        "Engineered specifically to answer customer objections in the first 5 seconds. We highlight key dimensions, tactile materials, benefits, and usage situations to skyrocket your add-to-cart rate.",
      deliverables: [
        "1x Main 60s High-Conversion Product Film (16:9)",
        "3x Hook Variations for Amazon Video Ads / PPC",
        "Kinetic Typography, Callouts & Feature Highlighting",
        "Pro Studio Lighting & Ultra Macro 4K Close-ups",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Listing/1%20(1).mp4",
      sampleTitle: "E-Commerce Listing Video Showcase",
      badgeColor: "bg-blue-500/10 text-[#005CFF] border-blue-500/20",
    },
    {
      id: "promo",
      title: "Promo & Commercial Video",
      subtitle: "Cinematic commercial films for Meta Ads, TikTok & YouTube",
      icon: Tv,
      tag: "High ROAS Ad Campaigns",
      description:
        "High-energy, story-driven commercial spots designed for paid customer acquisition. We blend bold cinematography, visual pacing, and sound design to keep audiences glued until the call-to-action.",
      deliverables: [
        "Full 30s & 15s Commercial Masters (16:9 & 9:16)",
        "5+ High CTR Visual Hook Intros for Meta & TikTok",
        "Professional Voiceover & Sound Design Mixing",
        "Color-Graded Cinematic Film Aesthetic",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Promo/1.mp4",
      sampleTitle: "Commercial & Brand Promo Spotlight",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      id: "ai-video",
      title: "AI Product Video & Synthetic CGI",
      subtitle: "Next-gen hybrid AI video with virtual environments and avatars",
      icon: Sparkles,
      tag: "Cutting-Edge Innovation",
      description:
        "Transport your physical product anywhere on earth without an expensive location scout. We blend physical studio captures with generative neural CGI, virtual actors, and fluid 3D motion simulations.",
      deliverables: [
        "Photorealistic 3D Product Modeling & Lighting",
        "Hyper-Realistic AI Synthetic Backgrounds & Actors",
        "Extreme Macro CGI Explosion / Disassembly Renders",
        "Infinite Variant Generation for Rapid Ad Testing",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/ai%20video/1-20260723T060503Z-1-001/1/UGREEN%20DH4300%20plus%20Pitch%20Video.mp4",
      sampleTitle: "UGREEN AI & 3D Product Showcase",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      id: "unboxing",
      title: "Unboxing & Organic UGC",
      subtitle: "Authentic first-person experience with genuine unboxing excitement",
      icon: Box,
      tag: "Authentic Social Proof",
      description:
        "Modern buyers crave unvarnished reality before purchasing. Our hand-picked creators unpack packaging, display accessories, and show immediate hands-on reactions tailored for TikTok, Reels, and Shorts.",
      deliverables: [
        "Full Unboxing Sequence highlighting packaging quality",
        "Close-up tactile reveals of textures and accessories",
        "Native UGC-style voice commentary & captions",
        "Vertical 9:16 optimized formats for social ads",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Unboxing/1%20(1).mp4",
      sampleTitle: "Tactile Unboxing & First Look Showcase",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      id: "tutorial",
      title: "Tutorial & Explainer Video",
      subtitle: "Clear, frictionless walkthroughs that drastically cut support tickets",
      icon: FileQuestion,
      tag: "Zero-Friction Customer Experience",
      description:
        "Reduce refund requests and negative reviews with ultra-clear demonstration videos. We guide buyers through unboxing, quick setup, button mappings, maintenance, and expert troubleshooting.",
      deliverables: [
        "Step-by-Step Graphic Onboarding Flow",
        "Clear Text Callouts for Ports, Buttons, and Specs",
        "Multilingual Subtitles / Closed Captioning Available",
        "Segmented Chapters for Quick Customer Navigation",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Tutorial/1.mp4",
      sampleTitle: "Product Tutorial & Setup Guide",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      id: "photography",
      title: "Product Photography & 360 Spin",
      subtitle: "Ultra high-resolution white background & staged lifestyle captures",
      icon: Camera,
      tag: "Studio Perfection",
      description:
        "Flawless 45MP full-frame studio captures. Every fingerprint, dust particle, and imperfection is retouched by our post-production artists to give your product that flagship luxury sheen.",
      deliverables: [
        "100% Pure White Background Amazon-Compliant Shots",
        "Hero Lifestyle Props & In-Context Staged Photography",
        "Infographic Mockups with Dimension & Spec Callouts",
        "Full Commercial Usage Rights & Vector Clipping Paths",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Listing/2%20(1).mp4",
      sampleTitle: "Studio 4K High-Res Retouch Showcase",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    {
      id: "amazon-aplus",
      title: "Amazon A+ Content Suite",
      subtitle: "Turn casual scrollers into buyers with high-converting brand story tiles",
      icon: Layers,
      tag: "Brand Store & A+ Boost",
      description:
        "Amazon algorithms heavily favor listings with rich Brand Story and Premium A+ modules. We create integrated visual layouts with comparison matrices, brand origin banners, and cross-sell carousels.",
      deliverables: [
        "Full Desktop & Mobile Responsive Brand Modules",
        "Cross-Catalog Comparison Tables & Badges",
        "Cohesive Graphic Design & Color Harmony",
        "Direct Ready-to-Upload File Bundle for Seller Central",
      ],
      sampleVideo: "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Listing/3%20(1).mp4",
      sampleTitle: "Amazon Brand Story & A+ Module Tour",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    },
  ];

  const current = services[activeTab];

  return (
    <section id="services" className="py-24 bg-[#0a0a0d] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            End-To-End Video Production
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Creative <span className="text-[#005CFF]">Services</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            Everything your brand needs under one studio roof: creative direction, set design, 4K camera gear, actors, AI post-production, and multi-platform cutdowns.
          </p>
        </div>

        {/* Services Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 no-scrollbar justify-start lg:justify-center">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-[#005CFF] border-[#005CFF] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                    : "bg-white/[0.04] border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-zinc-400"}`} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-[#111115] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column - Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border ${current.badgeColor}`}
              >
                {current.tag}
              </span>
              <span className="text-xs text-zinc-500">Service 0{activeTab + 1} of 07</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {current.title}
              </h3>
              <p className="text-sm font-medium text-[#005CFF] mt-1">
                {current.subtitle}
              </p>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>

            {/* Deliverables List */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                Included Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-200"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#005CFF]/20 text-[#005CFF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <Button
                onClick={() => onOpenBooking(current.title)}
                className="bg-[#005CFF] hover:bg-[#004dc9] text-white font-heading font-semibold text-xs px-6 py-5 rounded-xl gap-2 shadow-lg shadow-blue-500/20"
              >
                Book This Service Package
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <button
                onClick={() =>
                  onOpenVideoModal(current.sampleVideo, current.sampleTitle)
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-[#005CFF] text-[#005CFF]" />
                Watch Sample Clip
              </button>
            </div>
          </div>

          {/* Right Column - Video Preview Container */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
              <video
                key={current.sampleVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={current.sampleVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Click to play full modal overlay */}
              <button
                onClick={() =>
                  onOpenVideoModal(current.sampleVideo, current.sampleTitle)
                }
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/30 group-hover:bg-black/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-[#005CFF] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <span className="mt-3 text-xs font-heading font-semibold text-white uppercase tracking-wider drop-shadow-md">
                  Click to Expand with Audio
                </span>
              </button>

              <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-between items-end">
                <span className="text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {current.title}
                </span>
                <span className="text-[10px] text-zinc-400 bg-black/60 px-2 py-1 rounded">
                  4K 60FPS
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
