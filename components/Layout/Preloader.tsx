"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function Preloader({
  onComplete,
  duration = 2.8,
}: PreloaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = loaderRef.current;
    const line = lineRef.current;
    const logo = logoRef.current;
    const subtitle = subtitleRef.current;

    if (!loader || !line || !logo || !subtitle) {
      return;
    }

    const ctx = gsap.context(() => {
      const length = line.getTotalLength();

      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.set(logo, {
        autoAlpha: 0,
        y: 18,
      });

      gsap.set(subtitle, {
        autoAlpha: 0,
        y: 10,
      });

      const progressState = {
        value: 0,
      };

      const progressTween = gsap.to(progressState, {
        value: 100,
        duration,
        ease: "power2.inOut",
        onUpdate: () => {
          setProgress(Math.round(progressState.value));
        },
      });

      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.to(loader, {
            autoAlpha: 0,
            duration: 0.65,
            delay: 0.15,
            ease: "power2.inOut",
            onComplete: () => {
              onComplete?.();
            },
          });
        },
      });

      timeline
        .to(line, {
          strokeDashoffset: 0,
          duration,
          ease: "power2.inOut",
        })
        .to(
          logo,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=1",
        )
        .to(
          subtitle,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );

      return () => {
        progressTween.kill();
        timeline.kill();
      };
    }, loader);

    return () => {
      ctx.revert();
    };
  }, [duration, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-(--paper)"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[20%] h-[300px] w-[300px] rounded-full bg-(--amber)/[0.025] blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-[240px] w-[240px] rounded-full bg-(--ink)/[0.02] blur-3xl" />
      </div>

      <div className="relative flex w-full max-w-[520px] flex-col items-center px-(--page-padding)">
        <div className="relative h-[120px] w-full">
          <svg
            viewBox="0 0 520 120"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
          >
            <path
              ref={lineRef}
              d="
                M 20 76
                C 90 72,
                  110 42,
                  170 51

                C 230 60,
                  260 90,
                  320 70

                C 380 50,
                  420 44,
                  500 48
              "
              stroke="var(--amber)"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>

          <div
            ref={logoRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className="editorial text-[clamp(42px,8vw,68px)] leading-none tracking-[-0.035em] text-(--ink)">
                Bhagya
              </h1>

              <p className="mt-2 text-[8px] uppercase tracking-[0.5em] text-(--mid)">
                Nepal
              </p>
            </div>
          </div>
        </div>

        <div
          ref={subtitleRef}
          className="mt-10 flex flex-col items-center text-center"
        >
          <p className="editorial text-[15px] italic text-(--mid)">
            Every child deserves a chance to write their own fate.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-(--rule)" />

            <span
              ref={progressRef}
              className="w-[30px] text-[8px] tracking-[0.2em] text-(--faint)"
            >
              {String(progress).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-(--rule)" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-(--page-padding)">
        <p className="text-[7px] uppercase tracking-[0.3em] text-(--faint)">
          A story of possibility
        </p>
      </div>

      <div className="absolute bottom-8 right-(--page-padding)">
        <p className="text-[7px] uppercase tracking-[0.3em] text-(--faint)">
          Nepal
        </p>
      </div>
    </div>
  );
}
