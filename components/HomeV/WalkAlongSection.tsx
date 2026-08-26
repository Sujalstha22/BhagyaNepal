"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { walkAlongStory } from "@/app/data/HomeV";

export default function WalkAlongSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const portraitRef = useRef<HTMLDivElement>(null);

  const portraits = walkAlongStory.portraits.slice(0, 3);

  useEffect(() => {
    if (portraits.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % portraits.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [portraits.length]);

  useEffect(() => {
    if (!portraitRef.current) return;

    gsap.fromTo(
      portraitRef.current,
      {
        opacity: 0,
        scale: 0.97,
        y: 8,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
    );
  }, [activeIndex]);

  const activePortrait = portraits[activeIndex];

  return (
    <section className="relative overflow-hidden bg-(--paper) px-6 py-20 md:px-16 md:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        {/* Copy */}
        <div>
          <p className="mb-5 font-serif text-sm italic tracking-wide text-(--moss) md:text-base">
            {walkAlongStory.eyebrow}
          </p>

          <h2 className="font-serif text-[2.5rem] leading-[1.12] tracking-tight text-(--ink) sm:text-5xl md:text-[3.4rem]">
            {walkAlongStory.title}
          </h2>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-(--ink)/80 md:text-base">
            {walkAlongStory.description}
          </p>

          <WalkingPath className="mt-10 hidden md:block" />
        </div>

        {/* Portrait carousel */}
        <PortraitCarousel
          portraits={portraits}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activePortrait={activePortrait}
          portraitRef={portraitRef}
        />
      </div>
    </section>
  );
}

type Portrait = {
  image: string;
  alt: string;
  placeholder: string;
};

type PortraitCarouselProps = {
  portraits: readonly Portrait[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activePortrait: Portrait;
  portraitRef: React.RefObject<HTMLDivElement | null>;
};

function PortraitCarousel({
  portraits,
  activeIndex,
  setActiveIndex,
  activePortrait,
  portraitRef,
}: PortraitCarouselProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm md:ml-auto md:mr-0">
      {/* Main portrait */}
      <div
        ref={portraitRef}
        className="relative rotate-[2deg] rounded-sm border-[10px] border-(--paper) bg-(--rose)/15 shadow-[0_25px_60px_-20px_rgba(36,31,26,0.45)]"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-(--rose)/10">
          <Image
            key={activePortrait.image}
            src={activePortrait.image}
            alt={activePortrait.alt}
            fill
            sizes="(max-width: 768px) 90vw, 380px"
            className="object-cover"
            priority={activeIndex === 0}
          />

          {/* Subtle placeholder/story text */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-5 pt-20">
            <p className="max-w-[230px] font-serif text-sm italic leading-relaxed text-white/90">
              {activePortrait.placeholder}
            </p>
          </div>
        </div>
      </div>

      {/* Tape */}
      <TapeStrip className="absolute -left-5 -top-4 -rotate-[14deg]" />

      <TapeStrip className="absolute -right-4 -bottom-3 rotate-[8deg]" />

      {/* Hand drawn star */}
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="absolute -right-6 -top-6 h-10 w-10 text-(--clay) opacity-70 md:h-12 md:w-12"
      >
        <path
          d="M20 3 L23 16 L36 20 L23 24 L20 37 L17 24 L4 20 L17 16 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>

      {/* Carousel controls */}
      {portraits.length > 1 && (
        <div className="mt-7 flex items-center justify-between">
          {/* Counter */}
          <span className="font-mono text-[10px] tracking-[0.2em] text-(--ink)/45">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(portraits.length).padStart(2, "0")}
          </span>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {portraits.map((portrait, index) => (
              <button
                key={portrait.image}
                type="button"
                aria-label={`Show story ${index + 1}`}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className="group flex h-5 w-5 items-center justify-center"
              >
                <span
                  className={[
                    "block rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "h-1.5 w-6 bg-(--moss)"
                      : "h-1.5 w-1.5 bg-(--ink)/25 group-hover:bg-(--ink)/50",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Small progress line */}
      {portraits.length > 1 && (
        <div className="mt-3 h-px w-full overflow-hidden bg-(--ink)/10">
          <div
            key={activeIndex}
            className="h-full origin-left bg-(--moss)/50"
            style={{
              animation: "walkAlongProgress 4.5s linear forwards",
            }}
          />
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Decorative Tape                                                             */
/* -------------------------------------------------------------------------- */

function TapeStrip({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-6 w-16 bg-(--rose)/50 shadow-sm ${className}`}
      style={{
        clipPath: "polygon(4% 0, 100% 6%, 96% 100%, 0 94%)",
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Walking Path                                                                */
/* -------------------------------------------------------------------------- */

function WalkingPath({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 40"
      aria-hidden="true"
      className={`h-8 w-64 text-(--moss) ${className}`}
    >
      <path
        d="M2 30 Q 40 10, 78 26 T 154 22 T 230 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />

      {[24, 92, 168, 236].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={i % 2 === 0 ? 24 : 18}
          r="2"
          fill="currentColor"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}
