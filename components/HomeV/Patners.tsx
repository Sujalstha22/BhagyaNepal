"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import SectionLabel from "../UI/SectionLabel";

import Links from "../UI/Links";
import Link from "next/link";
import { partners } from "@/app/data/HomeV";

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        {
          xPercent: 0,
        },
        {
          xPercent: -33.3333,
          duration: 30,
          ease: "none",
          repeat: -1,
        },
      );
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden py-[clamp(64px,9vh,96px)] text-center">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionLabel className="justify-center">In partnership</SectionLabel>

          <p className="editorial mx-auto mb-12 max-w-[750px] text-[clamp(15px,1.5vw,18px)] italic leading-[1.55] text-(--mid)">
            None of this would be possible without the organisations and
            individuals who believe what we believe.
          </p>
        </div>

        <div className="relative mx-auto mb-10 w-[60%] overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-(--paper) to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-(--paper) to-transparent" />

          <div ref={trackRef} className="flex w-max shrink-0 items-center">
            <div className="flex shrink-0 items-center gap-16 pr-16">
              {partners.map((partner) => (
                <span
                  key={`first-${partner.name}`}
                  className="editorial shrink-0 whitespace-nowrap text-[clamp(18px,2vw,26px)] text-black/50"
                >
                  {partner.name}
                </span>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-16 pr-16">
              {partners.map((partner) => (
                <span
                  key={`second-${partner.name}`}
                  className="editorial shrink-0 whitespace-nowrap text-[clamp(18px,2vw,26px)] text-black/50"
                >
                  {partner.name}
                </span>
              ))}
            </div>

            {/* SET 3 */}
            <div className="flex shrink-0 items-center gap-16 pr-16">
              {partners.map((partner) => (
                <span
                  key={`third-${partner.name}`}
                  className="editorial shrink-0 whitespace-nowrap text-[clamp(18px,2vw,26px)] text-black/50"
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Links>
            <Link href="/" className="link">
              See how our programmes work in practice
            </Link>
          </Links>
        </div>
      </div>
    </section>
  );
}
