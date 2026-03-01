"use client";

import { useState } from "react";

interface CalendarEmbedProps {
  src: string;
}

export default function CalendarEmbed({ src }: CalendarEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-card bg-white" style={{ minHeight: "600px" }}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream animate-pulse">
          <div className="flex flex-col items-center gap-3 text-charcoal-light">
            <div className="w-12 h-12 rounded-full bg-khaki/50 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-sm">טוען לוח שנה...</p>
          </div>
        </div>
      )}

      <iframe
        src={src}
        title="לוח זמינות לקביעת ייעוץ"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        onLoad={() => setIsLoaded(true)}
        className={isLoaded ? "opacity-100" : "opacity-0"}
        style={{ transition: "opacity 0.3s ease" }}
        allow="fullscreen"
      />
    </div>
  );
}
