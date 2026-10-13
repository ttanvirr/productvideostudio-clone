"use client";

import React, { useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Video, ArrowRight } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
  onOpenBooking: () => void;
}

export function VideoModal({
  isOpen,
  videoUrl,
  title,
  onClose,
  onOpenBooking,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, videoUrl]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-[#09090c] border border-white/15 text-white p-0 overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
            <Video className="w-4 h-4 text-[#005CFF]" />
            <span className="font-heading font-bold text-white text-sm line-clamp-1">
              {title}
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-[#005CFF]">
            4K Master
          </span>
        </div>

        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {videoUrl && (
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>

        <div className="p-4 bg-[#0d0d12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            Want a video produced to this exact standard for your product?
          </div>
          <Button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto bg-[#005CFF] hover:bg-[#004dc9] text-white font-heading font-semibold text-xs px-5 py-2.5 rounded-xl gap-2"
          >
            Book Discovery Strategy Call
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
