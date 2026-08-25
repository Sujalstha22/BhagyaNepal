"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { transformationStages } from "@/app/data/HomeV";

gsap.registerPlugin(ScrollTrigger);

type StoryStageProps = {
  stage: (typeof transformationStages)[number];
  index: number;
  stageRef: (element: HTMLDivElement | null) => void;
  withoutRef: (element: HTMLDivElement | null) => void;
  withRef: (element: HTMLDivElement | null) => void;
};

type StoryVisualProps = {
  image: string;
  variant: "without" | "with";
};

function StoryVisual({ image, variant }: StoryVisualProps) {
  return (
    <div
      className={[
        "relative aspect-[4/3] overflow-hidden border",
        variant === "with"
          ? "border-(--amber)/20 bg-(--amber)/[0.03]"
          : "border-(--rule) bg-(--ink)/[0.02]",
      ].join(" ")}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span
          className={[
            "text-[9px] uppercase tracking-[0.18em]",
            variant === "with" ? "text-(--amber)/60" : "text-(--mid)",
          ].join(" ")}
        >
          Image pending
        </span>

        <span
          className={[
            "mt-2 max-w-[220px] break-all text-[9px] leading-relaxed",
            variant === "with" ? "text-(--amber)/35" : "text-(--faint)/50",
          ].join(" ")}
        >
          {image}
        </span>
      </div>
    </div>
  );
}

function StoryStage({
  stage,
  index,
  stageRef,
  withoutRef,
  withRef,
}: StoryStageProps) {
  const layouts = [
    {
      without: "left-[21%] top-[20%] w-[42%] max-w-[400px]",
      with: "right-[20%] top-[30%] w-[34%] max-w-[420px]",
    },
    {
      without: "left-[21%] top-[29%] w-[40%] max-w-[400px]",
      with: "right-[19.5%] top-[20%] w-[43%] max-w-[420px]",
    },
    {
      without: "left-[21%] top-[26%] w-[40%] max-w-[400px]",
      with: "right-[19.5%] top-[20%] w-[43%] max-w-[420px]",
    },
    {
      without: "left-[17%] top-[29%] w-[32%] max-w-[450px]",
      with: "right-[15%] top-[20%] w-[34%] max-w-[480px]",
    },
  ];

  const layout = layouts[index];

  return (
    <article
      ref={stageRef}
      className="pointer-events-none absolute inset-0 z-10 opacity-0"
    >
      <div className="absolute left-1/2 top-[10%] z-20 -translate-x-1/2 text-center">
        <p className="mb-1 text-[10px] uppercase tracking-[0.35em] text-(--faint)">
          Age
        </p>

        <p className="editorial text-[clamp(40px,5vw,64px)] leading-none text-(--ink)">
          {stage.age}
        </p>
      </div>

      <div
        ref={withoutRef}
        className={`absolute ${layout.without} z-10 opacity-0`}
      >
        <StoryVisual image={stage.without.image} variant="without" />

        <div className="mt-5 max-w-[400px] text-right">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-(--mid)">
            Without Bhagya Nepal
          </p>

          <p className="editorial text-[clamp(19px,2vw,27px)] leading-[1.18] text-(--ink)">
            {stage.without.text}
          </p>
        </div>
      </div>

      <div ref={withRef} className={`absolute ${layout.with} z-10 opacity-0`}>
        <div className="mb-2 mt-5 max-w-[320px] text-left">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-(--amber)">
            With Bhagya Nepal
          </p>

          <p className="editorial text-[clamp(19px,2vw,27px)] leading-[1.18] text-(--ink)">
            {stage.withBhagya.text}
          </p>
        </div>

        <StoryVisual image={stage.withBhagya.image} variant="with" />
      </div>
    </article>
  );
}

export default function NarrativeStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const stageItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const withoutRef = useRef<(HTMLDivElement | null)[]>([]);
  const withRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const line = lineRef.current;

    if (!section || !stage || !line) return;

    const ctx = gsap.context(() => {
      const stages = stageItemsRef.current.filter(Boolean) as HTMLDivElement[];

      const withoutItems = withoutRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];

      const withItems = withRef.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(line, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(stages, {
        opacity: 0,
        y: 8,
      });

      gsap.set(withoutItems, {
        opacity: 0,
        y: 10,
      });

      gsap.set(withItems, {
        opacity: 0,
        y: 10,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () =>
            `+=${window.innerHeight * transformationStages.length * 0.65}`,
          scrub: 1,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        line,
        {
          scaleY: 1,
          duration: transformationStages.length,
          ease: "none",
        },
        0,
      );

      transformationStages.forEach((_, index) => {
        const start = index;
        const currentStage = stages[index];
        const currentWithout = withoutItems[index];
        const currentWith = withItems[index];

        if (!currentStage || !currentWithout || !currentWith) return;

        timeline.to(
          currentStage,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          start,
        );

        timeline.to(
          currentWithout,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          start + 0.04,
        );

        timeline.to(
          currentWith,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          start + 0.1,
        );

        if (index < transformationStages.length - 1) {
          timeline.to(
            currentStage,
            {
              opacity: 0,
              y: -10,
              duration: 0.2,
              ease: "power2.inOut",
            },
            start + 0.82,
          );

          timeline.to(
            [currentWithout, currentWith],
            {
              opacity: 0,
              y: -6,
              duration: 0.18,
              ease: "power2.inOut",
            },
            start + 0.82,
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-(--paper)">
      <div ref={stageRef} className="relative h-svh overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-(--paper)" />

          <div className="absolute left-[15%] top-[18%] h-72 w-72 rounded-full bg-(--amber)/[0.035] blur-3xl" />

          <div className="absolute bottom-[12%] right-[12%] h-80 w-80 rounded-full bg-(--ink)/[0.02] blur-3xl" />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[21%] z-0 hidden h-[58%] w-px -translate-x-1/2 bg-(--rule)/50 md:block">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 h-full w-full bg-(--amber)"
          />
        </div>

        <div className="absolute left-[var(--page-padding)] top-8 z-30">
          <p className="text-[10px] uppercase tracking-[0.35em] text-(--mid)">
            The paths we don't see
          </p>
        </div>

        <div className="relative z-10 h-full w-full">
          {transformationStages.map((stage, index) => (
            <StoryStage
              key={stage.age}
              stage={stage}
              index={index}
              stageRef={(element) => {
                stageItemsRef.current[index] = element;
              }}
              withoutRef={(element) => {
                withoutRef.current[index] = element;
              }}
              withRef={(element) => {
                withRef.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
