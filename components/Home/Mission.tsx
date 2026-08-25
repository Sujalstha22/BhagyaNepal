import Reveal from "../UI/Reveal";

export default function Mission() {
  return (
    <section className="py-[clamp(80px,11vh,120px)] border-t border-(--rule)">
      <div className="pageWrap grid gap-8 lg:grid-cols-[1fr_2.1fr] lg:gap-[clamp(36px,6vw,90px)]">
        <Reveal>
          <p className="font-serif text-[14px] italic leading-[1.6] text-(--mid)">
            What Bhagya Nepal does and why it matters.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="editorial text-[clamp(20px,2.1vw,27px)] leading-[1.52] tracking-[-0.005em] text-(--ink)">
              Bhagya Nepal works with children whose circumstances have already
              decided their future for them, not because of who they are, but
              because of what surrounds them. We provide education, mentorship,
              and sustained guidance, not to write their story for them, but to
              give each child the stability and support to write it themselves.
            </p>

            <div className="mt-11 border-t border-(--rule) pt-9">
              <span className="editorial mb-3 block text-[clamp(24px,2.6vw,34px)] italic leading-[1.2]">
                And we stay.
              </span>

              <p className="max-w-[560px] text-[15px] leading-[1.8] text-(--mid)">
                Not for a programme cycle. Long enough to see what a child
                becomes, and to keep showing up after that.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
