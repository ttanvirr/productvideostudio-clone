"use client";

import React from "react";
import Link from "next/link";
import {
  Video,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#040406] border-t border-white/10 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0a1128] to-blue-900/20 border border-[#005CFF]/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,#005CFF_0%,transparent_70%)] opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#005CFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Ready To Scale Your Conversions?
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-white uppercase">
              Let&apos;s Talk Now For Your Next{" "}
              <span className="text-[#005CFF]">Videography</span>
            </h3>
            <p className="mt-3 text-zinc-300 text-sm">
              Schedule a 15-minute call with our Creative Director to plan your production roadmap, hooks, and deliverables.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                onClick={onOpenBooking}
                className="bg-[#005CFF] hover:bg-[#004dc9] text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-5 rounded-xl shadow-lg shadow-blue-500/25"
              >
                Schedule Free Strategy Session
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
              <a
                href="mailto:hello@productvideostudio.com"
                className="text-xs text-zinc-300 hover:text-white font-semibold underline underline-offset-4"
              >
                Or email: hello@productvideostudio.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#005CFF] to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Video className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                PRODUCT VIDEO <span className="text-[#005CFF]">STUDIO</span>
              </span>
            </Link>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Award-winning commercial video production agency for top 1% e-commerce and DTC brands. Combining cinematic studio optics with AI nitro-mix editing for peak advertising ROAS.
            </p>

            <div className="pt-2 flex items-center gap-3 text-zinc-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#005CFF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#005CFF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#005CFF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#005CFF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="X Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  E-Commerce Listing Video
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Promo &amp; Commercials
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  AI Product Video &amp; CGI
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Unboxing &amp; Organic UGC
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Tutorial &amp; Explainer Video
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Product Photography
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Amazon A+ Content Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Showreel &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-white transition-colors">
                  Why Work With Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">
                  Our 4-Step Process
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews &amp; Stories
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ &amp; Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Contact Info */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Studio NYC
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#005CFF] shrink-0 mt-0.5" />
                <span>320 E 7th St, Brooklyn, New York 11218</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#005CFF] shrink-0" />
                <a
                  href="mailto:hello@productvideostudio.com"
                  className="hover:text-white transition-colors"
                >
                  hello@productvideostudio.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#005CFF] shrink-0" />
                <a
                  href="tel:+13125623874"
                  className="hover:text-white transition-colors"
                >
                  +1 (312) 562-3874
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; 2026 Product Video Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-200 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-200 cursor-pointer">Commercial Licensing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
