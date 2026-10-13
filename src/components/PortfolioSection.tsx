"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Filter, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "all" | "listing" | "promo" | "ai" | "unboxing" | "tutorial";
  categoryLabel: string;
  videoUrl: string;
  aspect: "16:9" | "9:16";
  metrics: string;
}

interface PortfolioSectionProps {
  onOpenVideoModal: (url: string, title: string) => void;
  onOpenBooking: () => void;
}

export function PortfolioSection({
  onOpenVideoModal,
  onOpenBooking,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const portfolioItems: PortfolioItem[] = [
    {
      id: "ai-ugreen",
      title: "UGREEN DH4300+ AI Launch Film",
      client: "UGREEN",
      category: "ai",
      categoryLabel: "AI Product Video",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/ai%20video/1-20260723T060503Z-1-001/1/UGREEN%20DH4300%20plus%20Pitch%20Video.mp4",
      aspect: "16:9",
      metrics: "+340% Pre-Order Velocity",
    },
    {
      id: "promo-depancel",
      title: "Depancel Swiss Chronograph Promo",
      client: "Depancel Horology",
      category: "promo",
      categoryLabel: "Promo & Commercial",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/ai%20video/3-20260723T060505Z-1-001/3/depancel_Watch_pitch%20Ai_Video_final.mp4",
      aspect: "16:9",
      metrics: "4.8x Meta ROAS",
    },
    {
      id: "ai-oneodio",
      title: "OneOdio Studio Pro Pitch Video",
      client: "OneOdio Audio",
      category: "ai",
      categoryLabel: "AI & 3D Video",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/ai%20video/2-20260723T060503Z-1-001/2/OneOdio%20Pitch%20video.mp4",
      aspect: "16:9",
      metrics: "1.2M+ TikTok Views",
    },
    {
      id: "listing-grillion",
      title: "Grillion Smart Outdoor Grill Listing",
      client: "Grillion Inc.",
      category: "listing",
      categoryLabel: "E-Commerce Listing",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Listing/2%20(1).mp4",
      aspect: "16:9",
      metrics: "+42% Amazon CVR Boost",
    },
    {
      id: "promo-perfume",
      title: "AI Synthetic Botanical Perfume Spot",
      client: "Aura Fragrances",
      category: "ai",
      categoryLabel: "AI Commercial",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/ai%20video/4-20260723T060508Z-1-001/4/AI%20Perfume.mp4",
      aspect: "16:9",
      metrics: "Award Winner 2026",
    },
    {
      id: "listing-okp",
      title: "OKP L1 Smart Robot Vacuum Clean Film",
      client: "OKP Life",
      category: "listing",
      categoryLabel: "E-Commerce Listing",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Listing/3%20(1).mp4",
      aspect: "16:9",
      metrics: "Top 3 BSR Amazon",
    },
    {
      id: "unboxing-1",
      title: "Tactile First-Person Tech Unboxing",
      client: "NextGen Gear",
      category: "unboxing",
      categoryLabel: "Unboxing UGC",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Unboxing/1%20(1).mp4",
      aspect: "16:9",
      metrics: "+68% Engagement Rate",
    },
    {
      id: "tutorial-1",
      title: "Quick-Start Smart Appliance Tutorial",
      client: "HomeTech Pro",
      category: "tutorial",
      categoryLabel: "Tutorial Video",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/Tutorial/1.mp4",
      aspect: "16:9",
      metrics: "-45% Support Inquiries",
    },
    {
      id: "promo-audio",
      title: "AUREX Labs Cellular Bio-Serum Film",
      client: "AUREX Labs",
      category: "promo",
      categoryLabel: "Promo & Commercial",
      videoUrl:
        "https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/ai%20video/5-20260723T060510Z-1-001/5/AUREX%20Labs%20AI%20Commercial.mp4",
      aspect: "16:9",
      metrics: "$1.4M Generated Q3",
    },
  ];

  const categories = [
    { id: "all", label: "All Works" },
    { id: "listing", label: "E-Commerce Listing" },
    { id: "promo", label: "Commercial Promos" },
    { id: "ai", label: "AI & 3D CGI" },
    { id: "unboxing", label: "Unboxing UGC" },
    { id: "tutorial", label: "Tutorials" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#050507] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
              Real Works &amp; Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
              Our <span className="text-[#005CFF]">Portfolio</span>
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Hover on any project to preview motion clips, or click to watch the complete 4K master with full cinema sound.
            </p>
          </div>

          <Button
            onClick={onOpenBooking}
            className="bg-white/10 hover:bg-[#005CFF] text-white border border-white/15 rounded-xl font-heading font-semibold text-xs px-5 py-5 transition-colors shrink-0"
          >
            Start Your Project Now
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? "bg-[#005CFF] border-[#005CFF] text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-[#101014] border border-white/10 hover:border-[#005CFF]/60 transition-all duration-300 shadow-xl flex flex-col"
              >
                {/* Video Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <video
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                    }}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Play Button Trigger */}
                  <button
                    onClick={() => onOpenVideoModal(item.videoUrl, item.title)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors"
                    aria-label={`Watch ${item.title}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#005CFF] text-white flex items-center justify-center shadow-xl shadow-blue-500/50 group-hover:scale-115 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </button>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {item.metrics}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase font-bold tracking-wider text-[#005CFF] mb-1">
                      {item.client}
                    </div>
                    <h3 className="text-base font-bold font-heading text-white group-hover:text-zinc-100 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-400">Master: 4K UHD</span>
                    <button
                      onClick={() => onOpenVideoModal(item.videoUrl, item.title)}
                      className="text-xs text-[#005CFF] hover:underline font-semibold flex items-center gap-1"
                    >
                      Watch with Sound
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
