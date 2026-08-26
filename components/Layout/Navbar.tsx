"use client";

import { useEffect, useState } from "react";
import BtnAnimation from "../UI/BtnAnimation";

const links = [
  "Founder's Story",
  "Programs",
  "Impact Stories",
  "Beyond BN",
  "Donate",
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        setSolid(currentScrollY > window.innerHeight * 0.82);

        if (Math.abs(delta) > 5) {
          if (delta > 0 && currentScrollY > 20) {
            setVisible(false);
          } else if (delta < 0) {
            setVisible(true);
          }

          lastScrollY = currentScrollY;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50",
        "flex items-center justify-center",
        "px-(--page-padding) py-4",
        "transition-all duration-500",
        "ease-[cubic-bezier(.22,1,.36,1)]",
        visible ? "translate-y-0" : "-translate-y-[115%]",
        solid
          ? "bg-(--paper)/90 shadow-[0_1px_0_var(--rule)] backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex w-full items-center justify-center gap-[clamp(18px,2.4vw,42px)]">
        <div className="flex items-center justify-center gap-[clamp(16px,2vw,34px)]">
          {links.slice(0, 2).map((link) => (
            <BtnAnimation
              key={link}
              href="#"
              className={[
                "whitespace-nowrap text-[15px] text-(--ink) tracking-[0.06em]",
                solid
                  ? "text-(--ink)/65 hover:text-(--ink)"
                  : "text-(--rule)/75 hover:text-(--rule)",
              ].join(" ")}
            >
              {link}
            </BtnAnimation>
          ))}
        </div>

        <p
          className={[
            "shrink-0 whitespace-nowrap",
            "editorial text-[24px] text-(--amber) font-black uppercase",
            "tracking-[-0.02em]",
            "transition-colors duration-300",
            ,
          ].join(" ")}
        >
          Bhagya Nepal
        </p>

        <div className="flex items-center justify-center gap-[clamp(16px,2vw,34px)]">
          {links.slice(2).map((link) => (
            <BtnAnimation
              key={link}
              href="#"
              className={[
                "whitespace-nowrap text-[15px] tracking-[0.06em]",
                solid
                  ? "text-(--ink)/65 hover:text-(--ink)"
                  : "text-(--rule)/75 hover:text-(--rule)",
              ].join(" ")}
            >
              {link}
            </BtnAnimation>
          ))}
        </div>
      </div>
    </nav>
  );
}
