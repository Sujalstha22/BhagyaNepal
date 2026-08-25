import { pillars } from "@/app/data/home";
import Reveal from "../UI/Reveal";
import SectionLabel from "../UI/SectionLabel";
import Links from "../UI/Links";
import Link from "next/link";

export default function Works() {
  return (
    <section className="p-25 h-screen text-center">
      <div>
        <SectionLabel className="justify-center">
          How we do what we do
        </SectionLabel>

        <Reveal>
          <p className="editorial mx-auto mb-[clamp(48px,7vh,80px)] max-w-[820px] text-[clamp(18px,1.8vw,22px)] leading-[1.6] text-(--ink-soft)">
            We find children whose circumstances have already written a future
            for them and we interrupt that. Not with a single intervention, not
            with a cheque, not with a one year programme. We sit beside them,
            support their learning, pair them with a mentor, and stay present
            through every year that follows.
          </p>
        </Reveal>

        <div className="grid gap-9 md:grid-cols-3 md:gap-[clamp(28px,4vw,56px)]">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <article className="text-center">
                <h3 className="editorial border-t-2 border-(--ink) pt-5 text-[21px] leading-[1.3]">
                  {pillar.title}
                </h3>

                <p className="mt-3.5 text-[14.5px] leading-[1.8] text-(--mid)">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="editorial mx-auto mt-[clamp(48px,7vh,80px)] max-w-[820px] text-[clamp(18px,1.8vw,22px)] italic leading-[1.55]">
            This is how a fate gets rewritten. One child, one year at a time,
            for as long as it takes.
          </p>
        </Reveal>

        {/* <div className="mt-8 text-center">
          <Links>
            <Link href="/" className="link">
              See how our programmes work in practice
            </Link>
          </Links>
        </div> */}
      </div>
    </section>
  );
}
