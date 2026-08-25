"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Reveal from "../UI/Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function VisionDivider() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -15,
        },
        {
          yPercent: 10,
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
      className="relative min-h-[520px] overflow-hidden py-[clamp(100px,14vh,150px)] text-center"
    >
      {/* Parallax background */}
      <div
        ref={imageRef}
        className="absolute inset-[-8%] bg-[url('/images/vision.jpeg')] bg-cover bg-center bg-no-repeat"
      />

      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[320px] items-center justify-center px-(--page-padding)">
        <Reveal>
          <p className="editorial mx-auto max-w-[760px] text-[clamp(21px,2.8vw,36px)] italic leading-[1.5] tracking-[-0.005em] text-(--paper)">
            A world where the circumstances a child is born into have no power
            over the life they are capable of living.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
