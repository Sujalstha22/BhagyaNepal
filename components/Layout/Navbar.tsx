"use client";

import { useEffect, useState } from "react";

const links = [
  "Founder's Story",
  "Programs",
  "Impact Stories",
  "Beyond BN",
  "Donate",
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > window.innerHeight * 0.82);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[var(--page-padding)] py-2 transition-all duration-300 ${
        solid
          ? "bg-[#f7f4ee]/90 shadow-[0_1px_0_#ddd6ca] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className={`text-[22px] editorial font-black uppercase transition-colors duration-300 ${
          solid ? "text-[#191611]" : "text-[#f7f4ee]"
        }`}
      >
        Bhagya Nepal
      </a>

      <ul className="hidden items-center p-2 gap-6 md:flex">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`text-[15px]  tracking-[0.08em] transition-colors ${
                solid
                  ? "text-[#6f675b] hover:text-[#191611]"
                  : "text-[#f7f4ee]/70 hover:text-[#f7f4ee]"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
