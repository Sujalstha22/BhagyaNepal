"use client";

import Reveal from "@/components/UI/Reveal";
import SectionLabel from "@/components/UI/SectionLabel";

export default function TransformationIntro() {
  return (
    <header className="relative flex min-h-[520px] h-[68svh] items-center justify-center overflow-hidden bg-(--paper)">
      <div className="flex w-full flex-col items-center justify-center px-(--page-padding) text-center">
        <Reveal>
          <SectionLabel className="justify-center text-(--mid)">
            A single story. Every child&apos;s story.
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-5xl font-serif text-[clamp(42px,6vw,78px)] font-light leading-[0.98] tracking-[-0.02em]">
            Two paths.
            <br />
            <span className="text-(--ink-soft)/65">
              One moment of intervention.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[520px] text-[clamp(13px,1.1vw,15px)] font-light leading-[1.8] text-(--mid)">
            What happens when a child&apos;s circumstances are left unchanged,
            and what becomes possible when someone stays long enough to make a
            difference.
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-(--rule)/50">
        <div className="h-full w-full origin-top bg-(--amber)/70" />
      </div>
    </header>
  );
}
