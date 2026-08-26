import { impactStats } from "@/app/data/HomeV";
import Reveal from "../UI/Reveal";

export default function Impact() {
  return (
    <section className=" bg-(--pink) py-[clamp(80px,11vh,130px)]">
      <div className=" text-center">
        <div className="mb-[clamp(40px,6vh,64px)] grid gap-9 md:grid-cols-3 md:gap-[clamp(24px,4vw,60px)]">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 0.08}>
              <div className="flex flex-col items-center">
                <div className="editorial text-[clamp(52px,6vw,84px)] leading-none tracking-[-0.02em]">
                  {stat.value}
                </div>

                <p className="mt-3 max-w-[260px] text-[13.5px] leading-[1.7] text-(--mid)">
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="editorial border-y border-(--rule) py-[clamp(28px,4vh,44px)] text-center text-[clamp(17px,1.7vw,21px)] italic leading-[1.45]">
            Forty children. Ten years each, and counting. That is not a
            programme. That is a presence.
          </p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-[clamp(10px,2vh,22px)] max-w-[760px]">
            <span className="editorial block text-[clamp(20px,3vw,27px)] uppercase leading-[4] tracking-[0.4em]">
              Beyond the child
            </span>

            <p className="editorial text-[clamp(15px,1.5vw,22px)] leading-[1.62] text-(--ink-soft)">
              The impact of a child in school reaches further than the child. A
              mother, freed from worry about her daughter&apos;s education, can
              focus on her own livelihood. A family that once couldn&apos;t be
              sure of tomorrow begins to plan for next year. A parent, watching
              their child thrive, finds a reason to change. When one fate is
              rewritten, it rarely rewrites only one.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
