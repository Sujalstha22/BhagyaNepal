"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function Preloader({
  onComplete,
  duration = 7,
}: PreloaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = loaderRef.current;
    const content = contentRef.current;
    const quote = quoteRef.current;
    const mark = markRef.current;
    const line = lineRef.current;
    const progressLine = progressLineRef.current;
    const reveal = revealRef.current;

    if (
      !loader ||
      !content ||
      !quote ||
      !mark ||
      !line ||
      !progressLine ||
      !reveal
    ) {
      return;
    }

    let animationFrame = 0;
    let completed = false;

    const ctx = gsap.context(() => {
      gsap.set(content, {
        autoAlpha: 1,
        y: 0,
      });

      gsap.set(quote, {
        autoAlpha: 0,
        y: 24,
        filter: "blur(3px)",
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(mark, {
        autoAlpha: 0,
        y: 16,
        scale: 0.94,
      });

      gsap.set(progressLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(reveal, {
        scaleY: 0,
        transformOrigin: "bottom center",
      });

      gsap.to(quote, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.6,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.to(line, {
        scaleX: 1,
        duration: 1.1,
        delay: 1.15,
        ease: "power3.inOut",
      });

      gsap.to(mark, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        delay: 1.65,
        ease: "power3.out",
      });

      gsap.to(quote, {
        textShadow:
          "0 0 0px rgba(0,0,0,0), 0 0 18px color-mix(in srgb, var(--amber) 12%, transparent)",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.2,
      });

      gsap.to(mark, {
        opacity: 0.72,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.8,
      });
    }, loader);

    const startTime = performance.now();
    const totalDuration = Math.max(duration * 1000, 1000);

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / totalDuration, 1);

      const eased =
        raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      const value = Math.min(100, Math.round(eased * 100));

      setProgress(value);

      if (progressLine) {
        progressLine.style.transform = `scaleX(${eased})`;
      }

      if (raw < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
        return;
      }

      if (!completed) {
        completed = true;

        setProgress(100);

        gsap.to(progressLine, {
          scaleX: 1,
          duration: 0.25,
          ease: "none",
        });

        gsap.delayedCall(0.7, () => {
          const exit = gsap.timeline({
            onComplete: () => {
              onComplete?.();
            },
          });

          exit
            .to(content, {
              y: -20,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power2.inOut",
            })
            .to(
              reveal,
              {
                scaleY: 1,
                duration: 1.5,
                ease: "power4.inOut",
              },
              0.15,
            )
            .to(
              loader,
              {
                autoAlpha: 0,
                duration: 0.35,
                ease: "power2.out",
              },
              1.15,
            );
        });
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      gsap.killTweensOf([quote, mark, line, progressLine, reveal, content]);
      ctx.revert();
    };
  }, [duration, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-(--paper)"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] size-[280px] rounded-full bg-(--amber)/[0.025] blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] size-[280px] rounded-full bg-(--ink)/[0.018] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--amber)/[0.012] blur-[100px]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex w-full max-w-[760px] flex-col items-center px-(--page-padding)"
      >
        <div
          ref={quoteRef}
          className="max-w-[680px] text-center"
          style={{
            textShadow:
              "0 0 0px rgba(0,0,0,0), 0 0 0px color-mix(in srgb, var(--amber) 12%, transparent)",
          }}
        >
          <p className="editorial text-[clamp(25px,4vw,48px)] font-light leading-[1.15] tracking-[-0.035em] text-(--ink)">
            Fate of the Empires depends upon the education of the Youths
          </p>
        </div>

        <div
          ref={lineRef}
          className="mt-9 h-px w-[clamp(65px,9vw,110px)] bg-(--amber)"
        />

        <div ref={markRef} className="mt-7 text-center">
          <p className="editorial text-[clamp(34px,5vw,54px)] font-light leading-none tracking-[-0.07em] text-(--ink)">
            BN
          </p>

          <p className="mt-2 text-[7px] uppercase tracking-[0.45em] text-(--mid)">
            Bhagya Nepal
          </p>
        </div>
      </div>

      <div className="absolute bottom-[7%] left-1/2 z-20 w-[min(280px,48vw)] -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="flex items-baseline">
            <span
              ref={progressRef}
              className="editorial text-[clamp(26px,4vw,42px)] font-light tabular-nums tracking-[-0.04em] text-(--ink)"
            >
              {String(progress).padStart(2, "0")}
            </span>

            <span className="ml-1 text-[10px] text-(--mid)">%</span>
          </div>

          <div className="relative mt-4 h-px w-full overflow-hidden bg-(--rule)/50">
            <div
              ref={progressLineRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-(--amber)"
            />
          </div>

          <span className="mt-3 text-[7px] uppercase tracking-[0.4em] text-(--faint)">
            Loading
          </span>
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

      <div
        ref={revealRef}
        className="pointer-events-none absolute inset-0 z-[100] bg-(--paper)"
      />
    </div>
  );
}
