import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative flex h-[100svh] min-h-[620px] items-center justify-center overflow-hidden bg-(--ink-soft)">
      <Image
        src="/images/home/hdero.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(25,22,17,0.78),rgba(25,22,17,0.3)_45%,rgba(25,22,17,0.08)_80%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-(--page-padding) text-center">
        <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.5em] text-(--paper)">
          Bhagya Nepal
        </p>

        <h1 className="editorial text-[clamp(40px,6vw,78px)] leading-[1.08] tracking-[-0.015em] text-(--paper)">
          Every child deserves
          <br />
          to write their <em>own</em> fate.
        </h1>

        <p className="editorial mt-6 text-[clamp(17px,1.8vw,21px)] italic leading-normal text-(--paper)/70">
          Because a fate, once written, can be rewritten.
        </p>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3.5 sm:flex">
        <div className="h-13 w-px bg-linear-to-b from-(--paper)/40 to-transparent" />
      </div>
    </header>
  );
}
