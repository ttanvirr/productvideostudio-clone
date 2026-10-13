"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does shipping our product samples to your studio work?",
      a: "Once we confirm your project and storyboard direction, we provide our studio receiving address in Brooklyn, New York. You ship 1-2 product units (and any accessory packaging). We inspect each item immediately upon arrival, test functionality, and begin staging on our soundstage.",
    },
    {
      q: "What is your standard turnaround time for the first video cut?",
      a: "Our standard turnaround is 72 hours (3 business days) after product arrival and storyboard sign-off for Starter & Growth packs. For complex 3D CGI and Enterprise multi-angle packages, turnaround is typically 5 to 7 business days.",
    },
    {
      q: "What is included in the revision rounds?",
      a: "We want you thrilled with your final video. All plans include full revision rounds where you can request text adjustments, pacing trims, music changes, or subtitle edits via our frame-accurate video review tool. Growth and Enterprise plans include unlimited revisions until complete satisfaction.",
    },
    {
      q: "Do we own full commercial usage rights forever?",
      a: "Yes, 100%. You own perpetual, worldwide commercial rights for all delivered video files. You can run them indefinitely on Amazon listings, Shopify, TikTok Ads, Meta Ads (Facebook & Instagram), YouTube prerolls, email campaigns, and retail screens without paying recurring royalties.",
    },
    {
      q: "Can you provide vertical 9:16 cuts for TikTok and Reels as well as 16:9 widescreen?",
      a: "Yes! Our Growth and Enterprise packs include dual-formatted exports (16:9 for Amazon / Shopify / YouTube and 9:16 for TikTok, Reels, and Shorts) framed specifically so key graphics and products remain in the safe zones.",
    },
    {
      q: "Do you hire real hands-on actors or use AI avatars?",
      a: "We offer both! We have an in-house roster of diverse on-camera actors and hand models for physical studio unboxings. Alternatively, for international campaigns or virtual environments, we generate hyper-realistic AI avatars and synthetic voices in over 30 languages.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0d] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#005CFF] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Everything You <span className="text-[#005CFF]">Need To Know</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Have questions about production schedules, equipment, or deliverables? Here are answers to our most common inquiries.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#101015] border rounded-2xl overflow-hidden transition-all duration-200 shadow-lg ${
                  isOpen ? "border-[#005CFF]/60 bg-[#12121a]" : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-heading font-bold text-sm sm:text-base text-white hover:text-[#005CFF] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#005CFF] text-white" : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold font-heading text-white">
              Have a specific question about your product?
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Speak directly with our technical production team today.
            </p>
          </div>
          <Button
            onClick={onOpenBooking}
            className="bg-[#005CFF] hover:bg-[#004dc9] text-white font-heading font-semibold text-xs px-6 py-5 rounded-xl shrink-0"
          >
            Ask on a 15-min Call
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
