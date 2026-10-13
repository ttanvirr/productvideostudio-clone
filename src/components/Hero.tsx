"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideoModal: (url: string, title: string) => void;
}

export function Hero({ onOpenBooking, onOpenVideoModal }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroVideoUrl = "https://PVS-Portfolio.b-cdn.net/PVS_Showreel_4.mp4";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-1000 ease-out"
        >
          <source src={heroVideoUrl} type="video/mp4" />
          <source
            src="https://PVS-Portfolio.b-cdn.net/New%20%20website%20contents/portfolio/1920%20X%201080.mp4"
            type="video/mp4"
          />
        </video>
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headings matching productvideostudio.com */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-white uppercase leading-[0.95]">
            Product <span className="text-[#005CFF] drop-shadow-[0_0_35px_rgba(0,92,255,0.6)]">Video</span> Studio
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-zinc-300 uppercase leading-[1.05]">
            Your Next Creative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#005CFF]">
              &amp; Dope Revolution
            </span>
          </h2>
        </motion.div>

        {/* Feature Sub-pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm uppercase tracking-wider text-zinc-400 font-semibold mb-10"
        >
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#005CFF]" />
            Award Winning Projects
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Zap className="w-3.5 h-3.5 text-[#005CFF]" />
            Next-Gen 4K Video
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <TrendingUp className="w-3.5 h-3.5 text-[#005CFF]" />
            AI &amp; Nitro Mix Editing
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-heading font-bold text-sm tracking-wide text-white transition-all overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#005CFF] group-hover:bg-[#004dc9] transition-colors" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Book a 15-min Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() =>
              onOpenVideoModal(
                heroVideoUrl,
                "Product Video Studio - Official Showreel 2026"
              )
            }
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-heading font-semibold text-sm backdrop-blur-md transition-all group"
          >
            <div className="w-7 h-7 rounded-full bg-[#005CFF] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            Watch 2026 Showreel
          </button>
        </motion.div>

        {/* Video Control Bar */}
        <div className="mt-14 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Showreel Playing
          </span>
          <div className="h-3 w-[1px] bg-white/20 mx-1" />
          <button
            onClick={togglePlay}
            className="hover:text-white transition-colors flex items-center gap-1"
            title={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <button
            onClick={toggleMute}
            className="hover:text-white transition-colors flex items-center gap-1 ml-1"
            title={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#005CFF]" />}
            <span className="hidden sm:inline">{isMuted ? "Unmute" : "Muted"}</span>
          </button>
        </div>
      </div>

      {/* Bottom Stats Floating Ribbon */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/90 to-transparent pt-8 pb-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">300+</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Productions Completed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#005CFF]">3.4x</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Avg. Return on Ad Spend</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">72 Hrs</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Fast 1st Cut Turnaround</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">4.9 / 5</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Client Satisfaction Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}
