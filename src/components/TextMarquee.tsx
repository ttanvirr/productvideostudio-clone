"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function TextMarquee() {
  const tickerItems = [
    { text: "Product Video Studio", highlight: false },
    { text: "#1 Solution", highlight: true },
    { text: "Cinematic Commercials", highlight: false },
    { text: "AI Nitro-Mix Editing", highlight: true },
    { text: "Amazon A+ Masterclass", highlight: false },
    { text: "High Conversion ROAS", highlight: true },
    { text: "Next-Gen 3D CGI", highlight: false },
    { text: "Tested by 300+ Brands", highlight: true },
  ];

  // Doubled array for seamless 0% -> -50% loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative py-7 bg-[#111114] border-y border-white/10 overflow-hidden select-none group">
      {/* Soft gradient masks on both sides */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#111114] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#111114] to-transparent z-10 pointer-events-none" />

      {/* Smooth, relaxed Framer Motion glide */}
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 42,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-10 shrink-0">
            <span
              className={`text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight uppercase ${
                item.highlight
                  ? "text-[#005CFF] italic"
                  : "text-white/80 hover:text-white"
              } transition-colors`}
            >
              {item.text}
            </span>
            <div className="flex items-center justify-center">
              {item.highlight ? (
                <Sparkles
                  className="w-5 h-5 text-[#005CFF] animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
