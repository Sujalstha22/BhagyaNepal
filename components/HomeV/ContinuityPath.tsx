"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContinuityPath() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const branchRefs = useRef<SVGPathElement[]>([]);
  const leafRefs = useRef<SVGGElement[]>([]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const path = pathRef.current;

    if (!wrapper || !path) return;

    const ctx = gsap.context(() => {
      const branches = branchRefs.current;
      const leaves = leafRefs.current;

      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.set(branches, {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      });

      gsap.set(leaves, {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        duration: 1,
      });

      tl.to(
        branches,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 0.8,
          stagger: 0.08,
        },
        0.15,
      );

      tl.to(
        leaves,
        {
          autoAlpha: 1,
          scale: 1,
          ease: "power2.out",
          duration: 0.35,
          stagger: 0.04,
        },
        0.3,
      );
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
        pointer-events-none
        relative
        z-[4]
        h-[500vh]
        w-full
        overflow-visible
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 5000"
        preserveAspectRatio="none"
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        "
      >
        {/* =========================================================
            MAIN CONTINUITY PATH
        ========================================================= */}

        <path
          ref={pathRef}
          d="
            M 500 0

            C 500 180,
              470 300,
              390 430

            C 300 580,
              300 720,
              440 850

            C 600 1000,
              690 1130,
              590 1290

            C 480 1460,
              300 1540,
              350 1710

            C 400 1880,
              620 1940,
              690 2110

            C 760 2290,
              610 2410,
              470 2500

            C 300 2610,
              280 2800,
              430 2910

            C 590 3030,
              730 3110,
              650 3290

            C 580 3450,
              370 3510,
              350 3690

            C 330 3860,
              510 3950,
              620 4080

            C 750 4210,
              690 4380,
              530 4500

            C 400 4600,
              410 4770,
              520 5000
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />

        {/* =========================================================
            BRANCH 01
        ========================================================= */}

        <path
          ref={(el) => {
            if (el) branchRefs.current[0] = el;
          }}
          d="
            M 385 430
            C 320 390,
              250 360,
              170 390
            C 125 408,
              105 450,
              80 490
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* =========================================================
            BRANCH 02
        ========================================================= */}

        <path
          ref={(el) => {
            if (el) branchRefs.current[1] = el;
          }}
          d="
            M 590 1290
            C 660 1230,
              740 1200,
              820 1230
            C 860 1245,
              885 1280,
              920 1310
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* =========================================================
            BRANCH 03
        ========================================================= */}

        <path
          ref={(el) => {
            if (el) branchRefs.current[2] = el;
          }}
          d="
            M 690 2110
            C 760 2060,
              820 2020,
              900 2050
            C 930 2060,
              950 2080,
              970 2110
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* =========================================================
            BRANCH 04
        ========================================================= */}

        <path
          ref={(el) => {
            if (el) branchRefs.current[3] = el;
          }}
          d="
            M 430 2910
            C 350 2860,
              270 2850,
              200 2900
            C 165 2925,
              145 2960,
              110 2990
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* =========================================================
            BRANCH 05
        ========================================================= */}

        <path
          ref={(el) => {
            if (el) branchRefs.current[4] = el;
          }}
          d="
            M 650 3290
            C 720 3230,
              790 3200,
              860 3230
            C 900 3250,
              925 3290,
              950 3320
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.32"
        />

        {/* =========================================================
            BRANCH 06
        ========================================================= */}

        <path
          ref={(el) => {
            if (el) branchRefs.current[5] = el;
          }}
          d="
            M 350 3690
            C 280 3650,
              210 3640,
              150 3680
            C 115 3705,
              95 3740,
              65 3770
          "
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.28"
        />

        {/* =========================================================
            LEAVES
        ========================================================= */}

        <g
          ref={(el) => {
            if (el) leafRefs.current[0] = el;
          }}
          transform="translate(160 390) rotate(-25)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="14"
            ry="6"
            fill="var(--amber)"
            opacity="0.28"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[1] = el;
          }}
          transform="translate(210 375) rotate(25)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="5"
            fill="var(--amber)"
            opacity="0.22"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[2] = el;
          }}
          transform="translate(820 1220) rotate(-20)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="14"
            ry="6"
            fill="var(--amber)"
            opacity="0.25"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[3] = el;
          }}
          transform="translate(860 1240) rotate(30)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="11"
            ry="5"
            fill="var(--amber)"
            opacity="0.22"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[4] = el;
          }}
          transform="translate(895 2040) rotate(-25)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="13"
            ry="5"
            fill="var(--amber)"
            opacity="0.23"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[5] = el;
          }}
          transform="translate(200 2880) rotate(20)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="13"
            ry="5"
            fill="var(--amber)"
            opacity="0.22"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[6] = el;
          }}
          transform="translate(860 3215) rotate(-25)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="14"
            ry="6"
            fill="var(--amber)"
            opacity="0.22"
          />
        </g>

        <g
          ref={(el) => {
            if (el) leafRefs.current[7] = el;
          }}
          transform="translate(155 3660) rotate(25)"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="5"
            fill="var(--amber)"
            opacity="0.2"
          />
        </g>
      </svg>
    </div>
  );
}
