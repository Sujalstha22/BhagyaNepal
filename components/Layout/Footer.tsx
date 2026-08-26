"use client";

import { useEffect, useRef, useState } from "react";

const columns: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "The Story",
      links: [
        { label: "Founder's Story", href: "/founders-story" },
        { label: "Impact Stories", href: "/impact-stories" },
        { label: "Beyond BN", href: "/beyond-bn" },
      ],
    },
    {
      heading: "Get Involved",
      links: [
        { label: "Programs", href: "/programs" },
        { label: "Donate", href: "/donate" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Partner with us", href: "/partner" },
      ],
    },
    {
      heading: "Say Hello",
      links: [
        { label: "hi@bhagyanepal.org", href: "mailto:hi@bhagyanepal.org" },
        { label: "Visit us", href: "/visit" },
        { label: "Press kit", href: "/press" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

const Rule = () => <div className="footer-rule my-8 lg:my-[2.2vw]" />;

export default function Footer() {
  const saplingRef = useRef<SVGSVGElement | null>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const node = saplingRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGrown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting && (setGrown(true), observer.disconnect()),
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-grain relative w-full overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      {/* hand-drawn branch marking the transition into the footer */}
      <div className="relative" aria-hidden="true">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="block w-full h-8 lg:h-[2.2vw]"
        >
          <path
            d="M0 20 C 120 4, 200 34, 340 18 S 560 2, 700 20 S 900 36, 1040 16 S 1160 6, 1200 20"
            fill="none"
            stroke="var(--ink)"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />
          <g
            stroke="var(--amber)"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            fill="none"
          >
            <path d="M230 20 C 224 10, 214 8, 208 14" />
            <path d="M640 15 C 646 5, 656 4, 662 10" />
          </g>
          <g
            stroke="var(--amber-soft)"
            strokeOpacity="0.6"
            strokeWidth="1.2"
            fill="none"
          >
            <circle cx="900" cy="22" r="2.4" />
            <circle cx="150" cy="22" r="2" />
          </g>
        </svg>
      </div>

      <div className="relative w-full lg:max-w-none px-[var(--page-padding)] pt-10 sm:pt-14 lg:pt-[3.5vw] pb-8 sm:pb-10 lg:pb-[2.5vw]">
        {/* signature: founder's line + sapling */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 lg:gap-[3vw]">
          <div className="w-full md:max-w-2xl lg:max-w-none lg:w-[60%]">
            <p className="sectionLabel !mb-3 lg:!mb-[0.8vw] lg:text-[0.72vw]">
              From the Founder
            </p>
            <p className="editorial italic text-2xl sm:text-3xl lg:text-[2.3vw] leading-[1.25] font-light">
              &ldquo;Someone who stays. Not just today &mdash; tomorrow, and
              after that.&rdquo;
            </p>
          </div>

          <svg
            ref={saplingRef}
            className={`footer-sapling shrink-0 w-[64px] h-[72px] lg:w-[4.5vw] lg:h-[5vw] ${grown ? "is-grown" : ""}`}
            viewBox="0 0 86 96"
            aria-hidden="true"
          >
            <path pathLength={1} d="M43 92 C 41 66, 45 46, 43 26" />
            <path
              pathLength={1}
              d="M43 52 C 26 50, 16 38, 18 22 C 34 24, 44 36, 43 52 Z"
            />
            <path
              pathLength={1}
              d="M43 38 C 60 34, 68 20, 64 6 C 48 10, 40 24, 43 38 Z"
            />
            <path
              pathLength={1}
              d="M43 26 C 39 18, 41 10, 47 6 C 51 13, 49 21, 43 26 Z"
            />
          </svg>
        </div>

        <Rule />

        {/* brand + donate */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-[2vw]">
          <div>
            <p className="editorial italic text-3xl lg:text-[2.1vw] font-light">
              Bhagya Nepal
            </p>
            <p className="mt-1 lg:mt-[0.4vw] max-w-md lg:max-w-[28vw] text-sm sm:text-base lg:text-[0.95vw] text-[var(--mid)]">
              An education, and someone who stays &mdash; for children across
              Nepal growing up without either.
            </p>
          </div>

          <a
            href="/donate"
            className="footer-donate self-start md:self-auto inline-flex items-center gap-2 lg:gap-[0.5vw] rounded-full px-5 py-2.5 lg:px-[1.4vw] lg:py-[0.7vw] text-sm lg:text-[0.85vw] font-semibold uppercase tracking-[0.05em]"
          >
            Donate
            <svg
              viewBox="0 0 16 16"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        <Rule />

        {/* link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 lg:gap-x-[3vw] lg:gap-y-[2vw]">
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="sectionLabel !mb-4 lg:!mb-[1vw] lg:text-[0.72vw]">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3.5 lg:gap-[0.9vw]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link text-base lg:text-[1vw]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className="footer-bottom-rule mt-12 lg:mt-[3vw] pt-6 lg:pt-[1.5vw] flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 lg:gap-[1vw]">
          <p className="text-sm lg:text-[0.85vw] text-[var(--faint)]">
            &copy; {new Date().getFullYear()} Bhagya Nepal &middot; Kathmandu,
            Nepal
          </p>

          <div className="flex gap-3 lg:gap-[0.8vw]">
            <a
              href="#"
              aria-label="Instagram"
              className="footer-social flex items-center justify-center rounded-full w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw]"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.2"
                  cy="6.8"
                  r="0.6"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X / Twitter"
              className="footer-social flex items-center justify-center rounded-full w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw]"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="footer-social flex items-center justify-center rounded-full w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw]"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 10v7M7 7v.01M11 17v-4.5c0-1.5 1-2.5 2.5-2.5S16 11 16 12.5V17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
