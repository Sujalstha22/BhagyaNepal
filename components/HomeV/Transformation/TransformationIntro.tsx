import Reveal from "@/components/UI/Reveal";
import SectionLabel from "@/components/UI/SectionLabel";

export default function TransformationIntro() {
  return (
    <header className="relative flex h-[80svh] min-h-[620px] items-center justify-center overflow-hidden bg-(--paper)">
      <div className="flex flex-col items-center py-[clamp(90px,13vh,140px)] text-center">
        <Reveal>
          <SectionLabel className="justify-center text-white/40">
            A single story. Every child's story.
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="max-w-[760px] font-serif text-[clamp(42px,6vw,78px)] font-light leading-[0.98] tracking-[-0.02em]">
            Two paths.
            <br />
            <span className="text-(--ink-soft)/65">
              One moment of intervention.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-[520px] text-center text-[15px] font-light leading-[1.8] text-(--mid)">
            What happens when a child's circumstances are left unchanged, and
            what becomes possible when someone stays long enough to make a
            difference.
          </p>
        </Reveal>
      </div>
    </header>
  );
}
