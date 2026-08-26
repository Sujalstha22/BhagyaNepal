"use client";

import DissolvingHeroSection from "../UI/DistortionSection";

import { useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PARAGRAPHS = [
  `A child's fate is often decided before they can even spell the word —
  by the village they're born in, the income of their parents, the year
  a crisis strikes. We believe that circumstance should be a starting
  point, never a sentence. Across Nepal, thousands of children carry the
  weight of decisions made long before they had a voice. Bhagya Nepal
  exists to hand that pen back — through education, shelter, and a
  community that refuses to let a child's story end where it began.`,

  `Every scholarship funded, every meal served, every hand held through
  a hard season is a single stroke toward a different ending. Small,
  deliberate, repeated — until the sentence reads differently. This is
  not charity in the abstract. It is a classroom kept open, a roof kept
  sound, a child kept believing that tomorrow can still be rewritten in
  their own hand.`,
];

const PARAGRAPH_CLASS =
  "editorial mx-auto mt-[clamp(1.25rem,3vh,2rem)] max-w-7xl text-center text-[clamp(0.95rem,1.8vw,1.3rem)] leading-[1.55] text-(--ink)/60";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paragraphs = gsap.utils.toArray<HTMLParagraphElement>(
        "[data-reveal]",
        containerRef.current,
      );

      paragraphs.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: "power2.out",

          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <section className="relative w-full">
      <div
        className="
          relative
          z-30
          h-[85svh]
          min-h-[520px]
          overflow-hidden
          sm:h-[95svh]
          md:h-[100svh]
          lg:h-[105svh]
        "
      >
        <DissolvingHeroSection imageUrl="/images/Home/Hero1.jpeg" />
      </div>
      <div
        className="
          relative
          z-10
          -mt-[18svh]
          flex
          flex-col
          items-center
          px-(--page-padding)
          pb-[clamp(4rem,10vh,8rem)]
          text-center

          sm:-mt-[20svh]

          md:-mt-[24svh]

          lg:-mt-[28svh]
        "
      >
        {/* Heading */}
        <div className="mx-auto w-full max-w-4xl">
          <h1
            className="
              editorial
              text-[clamp(2.5rem,7vw,4.875rem)]
              leading-[1.05]
              tracking-[-0.015em]
              text-(--ink)
            "
          >
            Every child deserves
            <br />
            to write their <em>own</em> fate.
          </h1>

          <p
            className="
              editorial
              mx-auto
              mt-[clamp(1rem,2.5vh,1.5rem)]
              max-w-[38rem]
              text-[clamp(1rem,2.5vw,1.3rem)]
              italic
              leading-[1.45]
              text-(--ink)/60
            "
          >
            Because a fate, once written, can be rewritten.
          </p>
        </div>

        {/* Paragraphs */}
        <div
          ref={containerRef}
          className="
            mt-[clamp(2rem,5vh,3.5rem)]
            w-full
          "
        >
          {PARAGRAPHS.map((text, i) => (
            <p key={i} data-reveal className={PARAGRAPH_CLASS}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
