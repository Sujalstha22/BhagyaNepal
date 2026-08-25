import DissolvingHeroSection from "../UI/DistortionSection";

export default function Hero() {
  return (
    <section className="relative">
      {/* Content underneath the dissolve */}

      {/* Dissolving hero */}
      <header className="relative z-30 h-[100svh] min-h-[620px] overflow-hidden">
        <DissolvingHeroSection imageUrl="/images/home/Hero1.jpeg" />
      </header>
      <div className="absolute inset-x-0 top-[65svh] z-10">
        <div className="flex min-h-[55svh] items-center justify-center px-(--page-padding)  text-center">
          <div className="mx-auto w-full max-w-4xl">
            <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.5em] text-(--ink)/60">
              Bhagya Nepal
            </p>

            <h1 className="editorial text-[clamp(40px,6vw,78px)] leading-[1.08] tracking-[-0.015em] text-(--ink)">
              Every child deserves
              <br />
              to write their <em>own</em> fate.
            </h1>

            <p className="editorial mx-auto mt-6 max-w-[620px] text-[clamp(17px,1.8vw,21px)] italic leading-normal text-(--ink)/60">
              Because a fate, once written, can be rewritten.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[25svh]" />
    </section>
  );
}
