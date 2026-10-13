"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TextMarquee } from "@/components/TextMarquee";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { VideoModal } from "@/components/VideoModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "E-Commerce Listing Video"
  );

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({
    url: "",
    title: "",
  });

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setBookingOpen(true);
  };

  const handleOpenVideoModal = (url: string, title: string) => {
    setActiveVideo({ url, title });
    setVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f2f2f2] flex flex-col selection:bg-[#005CFF] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* Text Marquee / Slip Ticker */}
        <TextMarquee />

        {/* Partners / Brand Trust Marquee */}
        <PartnersMarquee />

        {/* Services Showcase */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* Comprehensive Portfolio Grid & Hover Previews */}
        <PortfolioSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* The Key Role We Play / Why Us */}
        <WhyUsSection />

        {/* 4-Step Process Section */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* Pricing Packages */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Testimonials & Human Stories */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />

      {/* Fullscreen Video Player Lightbox Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        videoUrl={activeVideo.url}
        title={activeVideo.title}
        onClose={() => setVideoModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
