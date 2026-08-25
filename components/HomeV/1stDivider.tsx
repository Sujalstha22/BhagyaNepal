"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Reveal from "../UI/Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function VisionDivider() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          yPercent: -8,
        },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[520px] overflow-hidden py-[clamp(100px,14vh,150px)]"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-[116%] w-full object-cover"
      >
        <source src="/videos/vision.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-7xl items-center justify-end px-(--page-padding)">
        <Reveal>
          <div className="max-w-[650px] text-right">
            <p className="editorial text-[clamp(28px,3vw,34px)] italic leading-[1.3] tracking-[-0.01em] text-(--ink)">
              Every child deserves the freedom to shape a future beyond the
              circumstances they were born into.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
