"use client";

import Image from "next/image";
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
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover"
      />
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
      without: "left-[18%] top-[17%] w-[38%] max-w-[400px]",
      with: "right-[17%] top-[29%] w-[34%] max-w-[420px]",
    },
    {
      without: "left-[18%] top-[26%] w-[37%] max-w-[400px]",
      with: "right-[17%] top-[17%] w-[39%] max-w-[420px]",
    },
    {
      without: "left-[18%] top-[24%] w-[37%] max-w-[400px]",
      with: "right-[17%] top-[17%] w-[39%] max-w-[420px]",
    },
    {
      without: "left-[16%] top-[27%] w-[34%] max-w-[430px]",
      with: "right-[15%] top-[18%] w-[35%] max-w-[450px]",
    },
  ];

  const layout = layouts[index] ?? layouts[layouts.length - 1];

  return (
    <article
      ref={stageRef}
      className="pointer-events-none absolute inset-0 z-10 opacity-0"
    >
      <div className="absolute left-1/2 top-[10%] z-30 -translate-x-1/2 text-center">
        <p className="mb-1 text-[8px] uppercase tracking-[0.3em] text-(--faint) sm:text-[9px] sm:tracking-[0.35em]">
          Age
        </p>

        <p className="editorial text-[clamp(38px,5vw,64px)] font-light leading-none tracking-[-0.03em] text-(--ink)">
          {stage.age}
        </p>
      </div>

      <div
        ref={withoutRef}
        className={[
          "absolute z-10",
          layout.without,
          "max-md:left-[var(--page-padding)]",
          "max-md:top-[23%]",
          "max-md:w-[calc(50%-var(--page-padding)-10px)]",
        ].join(" ")}
      >
        <StoryVisual image={stage.without.image} variant="without" />

        <div className="mt-3 max-w-[400px] md:mt-5 md:text-right">
          <p className="mb-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-(--mid) md:mb-3 md:text-[9px] md:tracking-[0.24em]">
            Without Bhagya Nepal
          </p>

          <p className="editorial text-[clamp(14px,2vw,27px)] font-light leading-[1.15] text-(--ink) md:leading-[1.18]">
            {stage.without.text}
          </p>
        </div>
      </div>

      <div
        ref={withRef}
        className={[
          "absolute z-10",
          layout.with,
          "max-md:right-[var(--page-padding)]",
          "max-md:top-[23%]",
          "max-md:w-[calc(50%-var(--page-padding)-10px)]",
        ].join(" ")}
      >
        <div className="mb-3 max-w-[320px] md:mb-3">
          <p className="mb-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-(--amber) md:mb-3 md:text-[9px] md:tracking-[0.24em]">
            With Bhagya Nepal
          </p>

          <p className="editorial text-[clamp(14px,2vw,27px)] font-light leading-[1.15] text-(--ink) md:leading-[1.18]">
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

  const introRef = useRef<HTMLDivElement | null>(null);
  const introTitleRef = useRef<HTMLHeadingElement | null>(null);
  const introCopyRef = useRef<HTMLParagraphElement | null>(null);

  const meterRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const backgroundImageRef = useRef<HTMLDivElement | null>(null);
  const playfulBlobRef = useRef<HTMLDivElement | null>(null);

  const stageItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const withoutRef = useRef<(HTMLDivElement | null)[]>([]);
  const withRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const stages = stageItemsRef.current.filter(Boolean) as HTMLDivElement[];
      const withoutItems = withoutRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      const withItems = withRef.current.filter(Boolean) as HTMLDivElement[];

      const stageCount = stages.length;

      if (!stageCount) return;

      gsap.set(introRef.current, {
        autoAlpha: 1,
      });

      gsap.set(introTitleRef.current, {
        autoAlpha: 1,
        y: 0,
      });

      gsap.set(introCopyRef.current, {
        autoAlpha: 1,
        y: 0,
      });

      gsap.set(meterRef.current, {
        autoAlpha: 0,
      });

      gsap.set(progressRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(dotRef.current, {
        autoAlpha: 0,
      });

      gsap.set(stages, {
        autoAlpha: 0,
      });

      gsap.set(withoutItems, {
        autoAlpha: 0,
      });

      gsap.set(withItems, {
        autoAlpha: 0,
      });

      gsap.set(backgroundImageRef.current, {
        autoAlpha: 0,
        scale: 1.08,
        x: -20,
        y: 30,
      });

      gsap.set(playfulBlobRef.current, {
        autoAlpha: 0,
        scale: 0.75,
        rotation: -12,
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * (stageCount + 1) * 0.62}`,
            scrub: 0.7,
            pin: stage,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(
          backgroundImageRef.current,
          {
            autoAlpha: 0.14,
            scale: 1,
            x: 20,
            y: 0,
            duration: 2,
            ease: "power2.out",
          },
          0,
        );

        timeline.to(
          playfulBlobRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "back.out(1.4)",
          },
          0.35,
        );

        timeline.to(
          introTitleRef.current,
          {
            autoAlpha: 0,
            y: -12,
            duration: 0.65,
            ease: "power2.inOut",
          },
          0,
        );

        timeline.to(
          introCopyRef.current,
          {
            autoAlpha: 0,
            y: -8,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0.05,
        );

        timeline.to(
          introRef.current,
          {
            autoAlpha: 0,
            duration: 0.2,
          },
          0.55,
        );

        timeline.to(
          meterRef.current,
          {
            autoAlpha: 1,
            duration: 0.25,
            ease: "power1.out",
          },
          0.72,
        );

        stages.forEach((_, index) => {
          const start = 0.95 + index;

          timeline.to(
            [stages[index], withoutItems[index], withItems[index]],
            {
              autoAlpha: 1,
              duration: 0.28,
              ease: "power1.inOut",
            },
            start,
          );

          timeline.to(
            progressRef.current,
            {
              scaleY: (index + 1) / stageCount,
              duration: 0.9,
              ease: "none",
            },
            start,
          );

          timeline.to(
            dotRef.current,
            {
              top: `${((index + 1) / stageCount) * 100}%`,
              autoAlpha: 1,
              duration: 0.9,
              ease: "none",
            },
            start,
          );

          if (index < stageCount - 1) {
            timeline.to(
              [stages[index], withoutItems[index], withItems[index]],
              {
                autoAlpha: 0,
                duration: 0.35,
                ease: "power1.inOut",
              },
              start + 0.72,
            );
          }
        });

        timeline.to(
          backgroundImageRef.current,
          {
            autoAlpha: 0.07,
            scale: 1.03,
            x: 35,
            duration: 1,
            ease: "power1.inOut",
          },
          ">",
        );
      });

      mm.add("(max-width: 767px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * (stageCount + 1) * 0.68}`,
            scrub: 0.6,
            pin: stage,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(
          backgroundImageRef.current,
          {
            autoAlpha: 0.1,
            scale: 1,
            x: 12,
            y: 0,
            duration: 2,
            ease: "power2.out",
          },
          0,
        );

        timeline.to(
          playfulBlobRef.current,
          {
            autoAlpha: 0.7,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.3)",
          },
          0.3,
        );

        timeline.to(
          introTitleRef.current,
          {
            autoAlpha: 0,
            y: -10,
            duration: 0.6,
            ease: "power2.inOut",
          },
          0,
        );

        timeline.to(
          introCopyRef.current,
          {
            autoAlpha: 0,
            y: -6,
            duration: 0.45,
            ease: "power2.inOut",
          },
          0.05,
        );

        timeline.to(
          introRef.current,
          {
            autoAlpha: 0,
            duration: 0.2,
          },
          0.55,
        );

        timeline.to(
          meterRef.current,
          {
            autoAlpha: 1,
            duration: 0.25,
          },
          0.7,
        );

        stages.forEach((_, index) => {
          const start = 0.9 + index;

          timeline.to(
            [stages[index], withoutItems[index], withItems[index]],
            {
              autoAlpha: 1,
              duration: 0.25,
              ease: "power1.inOut",
            },
            start,
          );

          timeline.to(
            progressRef.current,
            {
              scaleY: (index + 1) / stageCount,
              duration: 0.85,
              ease: "none",
            },
            start,
          );

          timeline.to(
            dotRef.current,
            {
              top: `${((index + 1) / stageCount) * 100}%`,
              autoAlpha: 1,
              duration: 0.85,
              ease: "none",
            },
            start,
          );

          if (index < stageCount - 1) {
            timeline.to(
              [stages[index], withoutItems[index], withItems[index]],
              {
                autoAlpha: 0,
                duration: 0.32,
                ease: "power1.inOut",
              },
              start + 0.7,
            );
          }
        });

        timeline.to(
          backgroundImageRef.current,
          {
            autoAlpha: 0.05,
            scale: 1.02,
            x: 20,
            duration: 1,
            ease: "power1.inOut",
          },
          ">",
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-(--paper)">
      <div
        ref={stageRef}
        className="relative h-svh min-h-[560px] overflow-hidden"
      >
        <div
          ref={backgroundImageRef}
          className="pointer-events-none absolute inset-0 z-99 overflow-hidden"
        >
          <Image
            src="/images/story-overlay.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center grayscale opacity-80"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-(--paper)/20" />

          <div className="absolute left-[15%] top-[18%] size-[clamp(180px,25vw,288px)] rounded-full bg-(--amber)/[0.025] blur-3xl" />

          <div className="absolute bottom-[12%] right-[12%] size-[clamp(200px,27vw,320px)] rounded-full bg-(--ink)/[0.018] blur-3xl" />
        </div>

        <div
          ref={introRef}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center px-[var(--page-padding)] text-center"
        >
          <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-(--mid) sm:text-[10px]">
            A single story. Every child&apos;s story.
          </p>

          <h2
            ref={introTitleRef}
            className="editorial max-w-6xl text-[clamp(48px,5vw,96px)] font-light leading-[0.92] tracking-[-0.035em] text-(--ink)"
          >
            Two paths.
            <br />
            <span className="text-(--ink-soft)/60">
              One moment of intervention.
            </span>
          </h2>

          <p
            ref={introCopyRef}
            className="mt-7 max-w-5xl text-[15px] font-light leading-[1.75] text-(--mid)"
          >
            What happens when a child&apos;s circumstances are left unchanged,
            and what becomes possible when someone stays long enough to make a
            difference.
          </p>
        </div>

        <div
          ref={meterRef}
          className="
            pointer-events-none
            absolute
            bottom-[12%]
            left-1/2
            top-[30%]
            z-[5]
            hidden
            w-px
            -translate-x-1/2
            md:block
          "
        >
          <div className="absolute inset-0 w-px bg-(--rule)/35" />

          <div
            ref={progressRef}
            className="
              absolute
              left-0
              top-0
              h-full
              w-px
              origin-top
              bg-(--amber)/50
            "
          />

          <div
            ref={dotRef}
            className="
              absolute
              left-1/2
              top-0
              size-[7px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-(--amber)
            "
          />
        </div>

        <div className="absolute inset-0 z-10">
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
