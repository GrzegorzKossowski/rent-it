import { cn } from "@/lib/utils";
import React from "react";

// components/BackgroundVideo.tsx
interface BackgroundVideoProps {
  src: string;
  aspectRatio?: string; // np. "16/5", "16/9"
  height?: string; // np. "500px", "60vh"
  className?: string;
}

export default function BackgroundVideo({
  src,
  aspectRatio = "16/9",
  height,
  className = "",
}: BackgroundVideoProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        aspectRatio: height ? "auto" : aspectRatio,
        height: height || "auto",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Opcjonalna warstwa na tekst/content */}
      {/* <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Twój Tekst</h1>
      </div> */}
    </div>
  );
}
