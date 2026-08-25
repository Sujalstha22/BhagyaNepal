import Reveal from "../UI/Reveal";

export default function Vision() {
  return (
    <section className="bg-(--ink) py-[clamp(70px,10vh,110px)] text-center">
      <div className="pageWrap">
        <p className="mb-7 text-[12px] font-bold uppercase tracking-[0.2em] text-(--amber)">
          Our vision
        </p>

        <Reveal>
          <p className="editorial mx-auto max-w-[760px] text-[clamp(21px,2.8vw,36px)] italic leading-[1.5] tracking-[-0.005em] text-(--rule)">
            A world where the circumstances a child is born into have no power
            over the life they are capable of living.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
