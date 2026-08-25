"use client";

import Reveal from "@/components/UI/Reveal";

export default function MissionSection() {
  return (
    <section className="relative flex h-screen min-h-[650px] items-center overflow-hidden bg-(--paper)">
      <div className="mx-auto w-full max-w-[1200px] px-(--page-padding)">
        <div className="grid min-h-[560px] grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center border-r-0 border-(--rule) pr-0 md:border-r md:pr-[clamp(35px,5vw,65px)]">
            <Reveal>
              <p className="editorial max-w-[440px] text-[clamp(18px,2vw,27px)] leading-[1.3] tracking-[-0.008em] text-(--ink)">
                What Bhagya Nepal does and why it matters.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="editorial mt-6 max-w-[450px] text-[clamp(14px,1.35vw,18px)] leading-[1.55] tracking-[-0.003em] text-(--ink)">
                Bhagya Nepal works with children whose circumstances have
                already decided their future for them, not because of who they
                are, but because of what surrounds them.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="editorial mt-5 max-w-[450px] text-[clamp(14px,1.35vw,18px)] leading-[1.55] tracking-[-0.003em] text-(--ink)">
                We provide education, mentorship, and sustained guidance, not to
                write their story for them, but to give each child the stability
                and support to write it themselves.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center pl-0 md:pl-[clamp(35px,5vw,65px)]">
            <Reveal delay={0.1}>
              <div className="relative ml-auto w-full max-w-[390px]">
                <div className="relative aspect-[1.2/1] overflow-hidden border border-(--rule) bg-(--ink)/[0.025]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-(--rule)">
                        <span className="editorial text-lg text-(--faint)">
                          —
                        </span>
                      </div>

                      <p className="text-[7px] uppercase tracking-[0.28em] text-(--mid)">
                        Image pending
                      </p>

                      <p className="mt-1.5 text-[8px] text-(--faint)">
                        Mission image will appear here.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-right text-[6px] uppercase tracking-[0.25em] text-(--faint)">
                  Bhagya Nepal · Our mission
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="ml-auto mt-8 w-full max-w-[390px] border-t border-(--rule) pt-6">
                <span className="editorial mb-2 block text-[clamp(19px,2vw,26px)] italic leading-[1.2] text-(--ink)">
                  And we stay.
                </span>

                <p className="max-w-[390px] text-[12px] leading-[1.7] text-(--mid)">
                  Not for a programme cycle. Long enough to see what a child
                  becomes, and to keep showing up after that.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-(--page-padding) hidden sm:block">
        <p className="text-[6px] uppercase tracking-[0.3em] text-(--faint)">
          Our mission
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-(--page-padding) hidden sm:block">
        <p className="text-[6px] uppercase tracking-[0.3em] text-(--faint)">
          Bhagya Nepal
        </p>
      </div>
    </section>
  );
}
