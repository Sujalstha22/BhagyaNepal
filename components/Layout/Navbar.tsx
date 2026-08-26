"use client";

import { useEffect, useState } from "react";
import BtnAnimation from "../UI/BtnAnimation";

const links = [
  "About Us",
  "Founder's Story",
  "Programs",
  "Impact Stories",
  "Beyond BN",
  "Donate",
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
          if (delta > 0 && currentScrollY > 20 && !menuOpen) {
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
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkColor = solid
    ? "text-(--ink)/65 hover:text-(--ink)"
    : "text-(--rule)/75 hover:text-(--rule)";

  return (
    <>
      {/* ================================================================ */}
      {/* DESKTOP NAVBAR                                                   */}
      {/* ================================================================ */}

      <nav
        className={[
          "fixed inset-x-0 top-0 z-50 hidden md:flex",
          "items-center justify-center",
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
          {/* Left links */}
          <div className="flex items-center justify-center gap-[clamp(16px,2vw,34px)]">
            {links.slice(0, 3).map((link) => (
              <NavLink key={link} className={linkColor}>
                {link}
              </NavLink>
            ))}
          </div>

          {/* Logo */}
          <p className="editorial shrink-0 whitespace-nowrap text-[24px] font-black uppercase tracking-[-0.02em] text-(--amber)">
            Bhagya Nepal
          </p>

          {/* Right links */}
          <div className="flex items-center justify-center gap-[clamp(16px,2vw,34px)]">
            {links.slice(3).map((link) => (
              <NavLink key={link} className={linkColor}>
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* MOBILE NAVBAR                                                    */}
      {/* ================================================================ */}

      <nav
        className={[
          "fixed inset-x-0 top-0 z-[60] md:hidden",
          "px-(--page-padding) py-4",
          "transition-transform duration-500",
          "ease-[cubic-bezier(.22,1,.36,1)]",
          visible || menuOpen ? "translate-y-0" : "-translate-y-[115%]",
          menuOpen || solid
            ? "bg-(--paper)/95 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <p className="editorial text-[20px] font-black uppercase tracking-[-0.02em] text-(--amber)">
            Bhagya Nepal
          </p>

          {/* Menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setVisible(true);
            }}
            className={[
              "flex h-10 w-10 flex-col items-center justify-center",
              "gap-1.5 rounded-full border",
              solid || menuOpen ? "border-(--ink)/20" : "border-(--rule)/40",
            ].join(" ")}
          >
            <span
              className={[
                "block h-px w-4 transition-transform duration-300",
                solid || menuOpen ? "bg-(--ink)" : "bg-(--rule)",
                menuOpen ? "translate-y-[3px] rotate-45" : "",
              ].join(" ")}
            />

            <span
              className={[
                "block h-px w-4 transition-transform duration-300",
                solid || menuOpen ? "bg-(--ink)" : "bg-(--rule)",
                menuOpen ? "-translate-y-[3px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* MOBILE MENU                                                      */}
      {/* ================================================================ */}

      <div
        className={[
          "fixed inset-0 z-50 md:hidden",
          "bg-(--paper)",
          "transition-opacity duration-500",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="flex min-h-full flex-col px-(--page-padding) pb-10 pt-28">
          <div className="flex flex-col">
            {links.map((link) => (
              <div key={link} className="border-b border-(--ink)/10">
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-5
                    text-left
                    font-serif
                    text-[clamp(1.5rem,7vw,2.25rem)]
                    leading-none
                    text-(--ink)
                  "
                >
                  <span>{link}</span>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <p className="editorial max-w-xs text-sm leading-relaxed text-(--ink)/50">
              Education, opportunity, and sustained support — one child at a
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Navigation Link                                                            */
/* -------------------------------------------------------------------------- */

type NavLinkProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function NavLink({ children, className = "", onClick }: NavLinkProps) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={[
        "group relative inline-flex w-fit",
        "transition-colors duration-300",
        className,
      ].join(" ")}
    >
      <span>{children}</span>

      <span
        aria-hidden="true"
        className="
          absolute
          -bottom-1
          left-0
          h-px
          w-full
          origin-left
          scale-x-0
          bg-(--amber)
          transition-transform
          duration-300
          ease-out
          group-hover:scale-x-100
        "
      />
    </a>
  );
}
