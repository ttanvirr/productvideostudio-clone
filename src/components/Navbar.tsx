"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Video,
  ChevronDown,
  Mail,
  Menu,
  X,
  Sparkles,
  ShoppingBag,
  Tv,
  Box,
  FileQuestion,
  Camera,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "E-Commerce Listing Video",
      desc: "Optimized for Amazon, Shopify & Walmart conversions",
      icon: ShoppingBag,
      href: "#portfolio",
    },
    {
      title: "Promo Video",
      desc: "Cinematic commercial films and ad campaign hooks",
      icon: Tv,
      href: "#portfolio",
    },
    {
      title: "AI Product Video",
      desc: "Synthetic actors, AI rendering & nitro-mix editing",
      icon: Sparkles,
      href: "#portfolio",
    },
    {
      title: "Unboxing Videos",
      desc: "Authentic first-person experience for TikTok & Reels",
      icon: Box,
      href: "#portfolio",
    },
    {
      title: "Tutorial Video",
      desc: "Step-by-step product walkthroughs that eliminate returns",
      icon: FileQuestion,
      href: "#portfolio",
    },
    {
      title: "Product Photography",
      desc: "High-resolution studio white & lifestyle staging",
      icon: Camera,
      href: "#services",
    },
    {
      title: "Amazon A Plus Content",
      desc: "Premium modules, comparison charts & graphic suites",
      icon: Layers,
      href: "#services",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050507]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Matching Product Video Studio reference */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-9 sm:h-10 md:h-11 w-32 sm:w-36 md:w-44 transition-opacity group-hover:opacity-90">
              <Image
                src="/logo.png"
                alt="Product Video Studio"
                fill
                sizes="(max-width: 768px) 140px, 180px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Exact Reference Site Menus: Services, Our Portfolio, Our Partners, Case Studies */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 py-2 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#005CFF]" : "text-zinc-500"
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-96 p-3 rounded-2xl bg-[#0f0f13] border border-white/10 shadow-2xl backdrop-blur-2xl z-50 grid grid-cols-1 gap-1"
                  >
                    <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-zinc-500 border-b border-white/5 mb-1">
                      Our Video Services
                    </div>
                    {services.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="p-2 rounded-lg bg-[#005CFF]/10 text-[#005CFF] group-hover/item:bg-[#005CFF] group-hover/item:text-white transition-colors mt-0.5">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover/item:text-[#005CFF] transition-colors whitespace-nowrap">
                            {item.title}
                          </div>
                          <div className="text-xs text-zinc-400 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-white/5 flex justify-between items-center px-2">
                      <span className="text-xs text-zinc-400">Custom production?</span>
                      <button
                        onClick={() => {
                          setServicesOpen(false);
                          onOpenBooking();
                        }}
                        className="text-xs text-[#005CFF] hover:underline font-semibold flex items-center gap-1"
                      >
                        Book discovery call <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#portfolio"
              className="py-2 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Our Portfolio
            </Link>

            <Link
              href="#why-us"
              className="py-2 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Our Partners
            </Link>

            <Link
              href="#testimonials"
              className="py-2 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Case Studies
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <a
              href="mailto:hello@productvideostudio.com"
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#005CFF]" />
              hello@productvideostudio.com
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#005CFF] via-blue-400 to-[#005CFF] rounded-xl opacity-75 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#09090c] border border-white/20 text-white font-semibold text-xs tracking-wide transition-all group-hover:bg-[#005CFF] group-hover:border-[#005CFF] whitespace-nowrap">
                <div className="w-5 h-5 rounded-md bg-[#005CFF] group-hover:bg-white text-white group-hover:text-[#005CFF] flex items-center justify-center transition-colors">
                  <Video className="w-3 h-3" />
                </div>
                <span>Book A Call</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              size="sm"
              onClick={() => onOpenBooking()}
              className="bg-[#005CFF] hover:bg-blue-600 text-xs px-3 py-1.5 h-8 font-semibold whitespace-nowrap"
            >
              Book Call
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0c0c10] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider px-2">
                Services
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {services.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm py-1.5 text-zinc-300 hover:text-[#005CFF] flex items-center gap-2 whitespace-nowrap"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#005CFF]" />
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="h-[1px] bg-white/10 my-2" />

              <Link
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-200 px-2 py-1 hover:text-[#005CFF] whitespace-nowrap"
              >
                Our Portfolio
              </Link>
              <Link
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-200 px-2 py-1 hover:text-[#005CFF] whitespace-nowrap"
              >
                Our Partners
              </Link>
              <Link
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-200 px-2 py-1 hover:text-[#005CFF] whitespace-nowrap"
              >
                Case Studies
              </Link>

              <div className="pt-2">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#005CFF] hover:bg-blue-600 font-semibold"
                >
                  Book Discovery Call (15-min)
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
