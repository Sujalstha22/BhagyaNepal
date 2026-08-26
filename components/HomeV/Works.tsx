import Reveal from "../UI/Reveal";
import SectionLabel from "../UI/SectionLabel";
import Links from "../UI/Links";
import Link from "next/link";
import { pillars } from "@/app/data/HomeV";

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
              <article className="text-center">
                <h3 className="editorial border-t-2 border-(--ink) pt-[clamp(0.9rem,1.5vh,1.25rem)] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.3]">
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
