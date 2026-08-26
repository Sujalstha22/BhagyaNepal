"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollInvite() {
  const inviteRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial subtle movement
      gsap.fromTo(
        inviteRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        {
          opacity: 0,
          scale: 0.8,
          y: -20,
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "+=180",
            scrub: true,
          },
        },
      );

      // Line breathing animation
      gsap.to(lineRef.current, {
        scaleY: 0.55,
        transformOrigin: "top center",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Arrow movement
      gsap.to(arrowRef.current, {
        y: 5,
        opacity: 0.3,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={inviteRef}
      className="
        pointer-events-none
        absolute
        bottom-10
        left-1/2
        z-30
        -translate-x-1/2
      "
    >
      <div className="flex flex-col items-center">
        {/* Invitation */}
        <span
          className="
            mb-5
            font-serif
            text-[clamp(15px,1.2vw,19px)]
            tracking-[0.04em]
            text-(--ink-soft)
          "
        >
          Scroll
        </span>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center">
          <span ref={lineRef} className="block h-4 w-[1.5px] bg-(--ink)/70" />

          <span
            ref={arrowRef}
            className="
              mt-[-3px]
              text-[18px]
              font-light
              leading-none
              text-white/80
            "
          >
            ↓
          </span>
        </div>
      </div>
    </div>
  );
}
