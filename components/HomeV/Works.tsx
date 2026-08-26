import Reveal from "../UI/Reveal";
import SectionLabel from "../UI/SectionLabel";
import Links from "../UI/Links";
import Link from "next/link";
import { pillars } from "@/app/data/HomeV";

const PILLAR_ICONS = [
  // Learning — an open book
  <svg
    key="learning"
    viewBox="0 0 56 40"
    fill="none"
    className="h-[clamp(1.75rem,3vw,2.25rem)] w-[clamp(2.5rem,4.2vw,3.15rem)]"
    aria-hidden="true"
  >
    <path
      d="M28 11.5c-3.6-2-8.9-2.9-14.6-2.4a1 1 0 0 0-.9 1v18a1 1 0 0 0 1.1 1c5.2-.4 9.7.5 12.9 2.4M28 11.5c3.6-2 8.9-2.9 14.6-2.4a1 1 0 0 1 .9 1v18a1 1 0 0 1-1.1 1c-5.2-.4-9.7.5-12.9 2.4M28 11.5v20"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Mentorship — two hands, close but not touching
  <svg
    key="mentorship"
    viewBox="0 0 56 40"
    fill="none"
    className="h-[clamp(1.75rem,3vw,2.25rem)] w-[clamp(2.5rem,4.2vw,3.15rem)]"
    aria-hidden="true"
  >
    <path
      d="M8 22c2.5-3.5 5.6-6 9-7.4a4.2 4.2 0 0 1 5.6 .9l.5.6M25 21l5 2.4a2.8 2.8 0 0 0 3.6-.4 2.8 2.8 0 0 0-.4-2.8l-7.5-4.3"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48 20c-2.5-3.5-5.6-6-9-7.4a4.2 4.2 0 0 0-5.6.9l-.5.6M31 19l-5 2.4a2.8 2.8 0 0 1-3.6-.4"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 24.5c-2.1 1.6-3.4 3.1-3.8 4.7a1 1 0 0 0 1 1.2h35.6a1 1 0 0 0 1-1.2c-.4-1.6-1.7-3.1-3.8-4.7"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Staying present — a sprout, for growth measured in years
  <svg
    key="presence"
    viewBox="0 0 56 40"
    fill="none"
    className="h-[clamp(1.75rem,3vw,2.25rem)] w-[clamp(2.5rem,4.2vw,3.15rem)]"
    aria-hidden="true"
  >
    <path
      d="M28 32V17"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M28 20c0-4.4 4.3-7.7 11.9-8.3.6 5-3.6 8.7-11.9 8.3Z"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M28 24c0-3.7-3.6-6.5-10-7-.4 4.2 3 7.3 10 7Z"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 32.5h19"
      stroke="#b98a4e"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>,
];

export default function Works() {
  return (
    <section className="w-full px-[clamp(1.25rem,5vw,5rem)] py-[clamp(4rem,10vh,8rem)] text-center">
      <div className="mx-auto w-full max-w-7xl">
        <SectionLabel className="justify-center">
          How we do what we do
        </SectionLabel>

        <Reveal>
          <p className="editorial mx-auto mb-[clamp(3rem,7vh,5rem)] max-w-[52rem] text-[clamp(1rem,1.8vw,1.375rem)] leading-[1.6] text-(--ink-soft)">
            We find children whose circumstances have already written a future
            for them and we interrupt that. Not with a single intervention, not
            with a cheque, not with a one year programme. We sit beside them,
            support their learning, pair them with a mentor, and stay present
            through every year that follows.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <article className="flex flex-col items-center text-center">
                <span className="text-(--ink)">
                  {PILLAR_ICONS[index % PILLAR_ICONS.length]}
                </span>

                <h3 className="editorial mt-[clamp(0.9rem,1.5vh,1.25rem)] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.3]">
                  {pillar.title}
                </h3>

                <p className="mt-[clamp(0.75rem,1.5vh,1rem)] text-[clamp(0.875rem,1.2vw,0.95rem)] leading-[1.8] text-(--mid)">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="editorial mx-auto mt-[clamp(3rem,7vh,5rem)] max-w-[52rem] text-[clamp(1rem,1.8vw,1.375rem)] italic leading-[1.55]">
            This is how a fate gets rewritten. One child, one year at a time,
            for as long as it takes.
          </p>
        </Reveal>

        <div className="mt-[clamp(1.75rem,4vh,3rem)] flex justify-center">
          <Links>
            <Link href="/" className="link">
              See how our programmes work in practice
            </Link>
          </Links>
        </div>
      </div>
    </section>
  );
}
