"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollInvite() {
  const lineRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scaleY: 0.45,
        transformOrigin: "top center",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      gsap.to(arrowRef.current, {
        y: 5,
        opacity: 0,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
      <div className="flex flex-col items-center">
        {/* Quiet invitation */}
        <span className="mb-3 font-serif text-[11px] tracking-[0.04em] text-white/70">
          There&apos;s more to their story
        </span>

        {/* Minimal scroll indicator */}
        <div className="flex flex-col items-center">
          <span ref={lineRef} className="block h-8 w-px bg-white/60" />

          <span
            ref={arrowRef}
            className="mt-[-2px] text-[13px] font-light text-white/70"
          >
            ↓
          </span>
        </div>
      </div>
    </div>
  );
}
