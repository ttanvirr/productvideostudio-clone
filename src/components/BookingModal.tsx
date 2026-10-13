"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle2, Video, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultService = "E-Commerce Listing Video",
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 2:00 PM EST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "$2,000 - $5,000",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableDates = [
    "Tomorrow, 2:00 PM EST",
    "Tomorrow, 4:30 PM EST",
    "In 2 Days, 11:00 AM EST",
    "In 2 Days, 3:00 PM EST",
    "In 3 Days, 1:30 PM EST",
  ];

  const services = [
    "E-Commerce Listing Video",
    "High-Impact Promo Video",
    "AI Product Video & Synthetic CGI",
    "Unboxing & Organic UGC Style",
    "Tutorial / Explainer Video",
    "Full Amazon Brand Content Suite",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-[#0d0d10] border border-white/10 text-white p-0 overflow-hidden rounded-2xl shadow-2xl backdrop-blur-2xl">
        <div className="relative bg-gradient-to-r from-[#005CFF]/20 via-blue-900/10 to-transparent p-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#005CFF]">
            <Video className="w-4 h-4" />
            15-Minute Strategy Session
          </div>
          <DialogTitle className="text-2xl font-bold font-heading mt-1 text-white">
            Book Your Free Video Growth Call
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm mt-1">
            Meet directly with our Creative Director to plan your product video pipeline, conversion hooks, and budget.
          </DialogDescription>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Discovery Session Confirmed!
              </h3>
              <p className="text-zinc-400 max-w-md text-sm mb-6">
                Thanks <span className="text-white font-medium">{formData.name || "there"}</span>! A calendar invitation with Google Meet details has been sent to{" "}
                <span className="text-[#005CFF] font-medium">{formData.email || "your email"}</span> for{" "}
                <span className="text-white font-semibold">{selectedDate}</span>.
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left w-full max-w-md text-xs text-zinc-300 space-y-1 mb-6">
                <div><span className="text-zinc-500">Service:</span> {selectedService}</div>
                <div><span className="text-zinc-500">Brand:</span> {formData.brand || "Not provided"}</div>
                <div><span className="text-zinc-500">Scheduled Time:</span> {selectedDate}</div>
              </div>
              <Button
                onClick={handleReset}
                className="bg-[#005CFF] hover:bg-[#0047cc] text-white px-8"
              >
                Done
              </Button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                  Select Video Production Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedService === srv
                          ? "bg-[#005CFF]/15 border-[#005CFF] text-white ring-1 ring-[#005CFF]"
                          : "bg-white/5 border-white/10 text-zinc-300 hover:border-white/25 hover:bg-white/10"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                  Choose Available Strategy Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableDates.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedDate(time)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedDate === time
                          ? "bg-[#005CFF]/15 border-[#005CFF] text-white ring-1 ring-[#005CFF]"
                          : "bg-white/5 border-white/10 text-zinc-300 hover:border-white/25 hover:bg-white/10"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-[#005CFF]" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  onClick={() => setStep(2)}
                  className="bg-[#005CFF] hover:bg-[#004dc9] text-white gap-2 px-6"
                >
                  Continue to Project Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@yourbrand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Brand / Store Website
                  </label>
                  <input
                    type="text"
                    placeholder="www.yourproduct.com"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#121216] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#005CFF]"
                  >
                    <option value="Under $1,500">Under $1,500 (Starter)</option>
                    <option value="$1,500 - $3,500">$1,500 - $3,500 (Listing Pack)</option>
                    <option value="$3,500 - $8,000">$3,500 - $8,000 (Growth Multi-Angle)</option>
                    <option value="$8,000+">$8,000+ (Enterprise Commercial)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Tell us briefly about your product or launch goal
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Launching a new wireless ANC headphone on Amazon & TikTok. Need a 45s product promo and 3 ad variations."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#005CFF] resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep(1)}
                  className="text-zinc-400 hover:text-white"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-[#005CFF] hover:bg-[#004dc9] text-white px-6 font-semibold"
                >
                  Confirm Discovery Call
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
