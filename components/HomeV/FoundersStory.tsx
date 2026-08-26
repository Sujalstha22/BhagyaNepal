"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function FoundersStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const branchRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const branch = branchRef.current;

    if (!section || !branch) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(branch, {
        y: 10,
        rotation: 0,
      });

      const handleMouseMove = (event: MouseEvent) => {
        const rect = section.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;

        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(branch, {
          x: x * 12,
          y: y * 10,
          rotation: x * 1.5,
          duration: 1.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);

      gsap.fromTo(
        branch,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power2.out",
        },
      );

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] overflow-hidden bg-(--pink)"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-(--amber)/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[900px] flex-col items-center px-(--page-padding)">
        <div className="flex justify-center pt-[clamp(40px,6vh,70px)]">
          <p className="text-[8px] uppercase tracking-[1.2em] text-(--mid)">
            The founder's story
          </p>
        </div>

        <div className="relative mx-auto mt-[clamp(25px,4vh,45px)] w-[min(100%,360px)]">
          <div className="relative aspect-[4/3] overflow-hidden bg-(--ink)/[0.025]">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-(--rule)">
                <span className="editorial text-xl text-(--faint)">—</span>
              </div>

              <Image src="/images/Founder2.png" alt="Founder" fill />
            </div>
          </div>

          <p className="mt-3 text-center text-[7px] uppercase tracking-[0.28em] text-(--faint)">
            Founder · Bhagya Nepal
          </p>
        </div>

        <div className="relative mx-auto mt-[clamp(35px,5vh,60px)] max-w-[750px] text-center">
          <blockquote className="editorial text-[clamp(15px,1.7vw,20px)] leading-[1.45] tracking-[-0.005em] text-(--ink-soft)">
            <p>
              "I grew up in a children's home. And despite that, I was given
              something that changed everything — access to a good education.
              That single opportunity shaped who I became. But what I didn't
              have was someone who stayed. What any child needs — what I needed
              — is someone who stays. Who shows up again tomorrow. Who is still
              there when the hard part comes.
            </p>

            <p className="mt-2">
              I built Bhagya Nepal so that every child has what I had — and what
              I didn't. A real chance at education, and someone who will still
              be there tomorrow.
            </p>

            <p className="mt-4">
              Not just today.
              <br />
              Tomorrow, and after that."
            </p>
          </blockquote>
        </div>

        <div className="mt-auto pb-[clamp(30px,5vh,55px)] text-center">
          <div className="mx-auto h-px w-8 bg-(--amber)/40" />
        </div>
      </div>

      <div
        ref={branchRef}
        className="pointer-events-none absolute bottom-[35px] right-[-5px] z-0 hidden h-[360px] w-[280px] opacity-50 sm:block"
      >
        <Image
          src="/images/branch.webp"
          alt=""
          fill
          className="object-contain object-bottom-right"
          priority
        />
      </div>
    </section>
  );
}
