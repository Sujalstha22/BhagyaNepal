"use client";

import { useRef } from "react";
import gsap from "gsap";

type LinkProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Links({ children, className = "" }: LinkProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(ref.current, {
      x: 4,
      opacity: 0.7,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={ref}
      className={`inline-flex items-center gap-2 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <span aria-hidden="true" className="inline-block text-(--amber-soft)">
        →
      </span>
    </div>
  );
}
