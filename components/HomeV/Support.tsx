import Link from "next/link";

interface SupportOption {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
}

const SUPPORT_OPTIONS: SupportOption[] = [
  {
    title: "Give",
    body: "Your support funds a child's education, mentorship, and the years of guidance that follow. Every contribution goes directly toward a specific child's journey — not overhead, not administration.",
    href: "/donate",
    linkLabel: "Give",
  },
  {
    title: "Share their story",
    body: "The children we work with need to be seen, not saved. Share their stories, follow their progress, help more people understand what sustained guidance can do.",
    href: "#",
    linkLabel: "Follow along",
  },
  {
    title: "Advocate",
    body: "If you're in a position to open a door — a school placement, a scholarship, a connection — reach out. Some of the most important support Bhagya Nepal receives isn't financial.",
    href: "#",
    linkLabel: "Get in touch",
  },
];

export default function Support() {
  return (
    <section className="border-t border-(--rule)/60 bg-(--paper) py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto w-full max-w-[1180px] px-(--page-padding)">
        <p className="text-[11px] uppercase tracking-[0.35em] text-(--faint)">
          How you can help
        </p>

        <p className="rv editorial mt-6 max-w-[640px] text-[clamp(20px,2.6vw,30px)] font-light leading-[1.35] tracking-[-0.02em] text-(--ink)">
          Bhagya Nepal is built on the belief that a child&apos;s fate can be
          rewritten. If you share that belief, there are several ways to be part
          of it.
        </p>

        <div className="mt-[clamp(48px,7vw,88px)] grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3">
          {SUPPORT_OPTIONS.map((option) => (
            <div key={option.title} className="rv flex flex-col">
              <h3 className="editorial text-[clamp(18px,1.8vw,22px)] font-light tracking-[-0.01em] text-(--ink)">
                {option.title}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.7] text-(--mid)">
                {option.body}
              </p>

              <Link
                href={option.href}
                className="group mt-6 inline-flex w-fit items-center gap-2 text-[13px] tracking-[0.01em] text-(--ink) transition-colors duration-300 hover:text-(--amber)"
              >
                <span className="border-b border-transparent pb-px transition-colors duration-300 group-hover:border-(--amber)">
                  {option.linkLabel}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
