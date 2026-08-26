"use client";

import { ReactNode } from "react";

type BtnAnimationProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function BtnAnimation({
  children,
  className = "",
  href = "#",
  onClick,
}: BtnAnimationProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "group relative inline-flex overflow-hidden",
        "transition-transform duration-300 ease-out",
        "hover:-translate-y-[1px]",
        className,
      ].join(" ")}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">
          {children}
        </span>

        <span className="absolute inset-x-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
      </span>

      <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:origin-left group-hover:scale-x-100" />
    </a>
  );
}
