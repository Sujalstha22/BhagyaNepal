"use client";

import Image from "next/image";
import Reveal from "../UI/Reveal";
import { missionContent, missionPhotos } from "@/app/data/HomeV";

export default function MissionSectionV2() {
  return (
    <section className="relative h-screen overflow-hidden bg-(--paper) text-[#171717] p-6 md:p-10">
      <div className="grid h-[65%] grid-cols-[45%_55%]">
        <div className="flex items-center justify-center px-6">
          <div className="max-w-[520px] text-center">
            <Reveal>
              <h2 className="text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-[-0.03em]">
                {missionContent.heading.lineOne}
                <br />
                <em>{missionContent.heading.lineTwo}</em>
              </h2>

              <div className="mx-auto mt-7 max-w-[500px] space-y-4">
                {missionContent.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="editorial text-[clamp(16px,1.35vw,19px)] leading-[1.5] text-black/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex h-full items-center justify-center gap-8 px-6">
          <Polaroid
            {...missionPhotos[0]}
            className="w-[min(40%,280px)] rotate-[-5deg]"
          />

          <Polaroid
            {...missionPhotos[1]}
            className="w-[min(40%,280px)] translate-y-8 rotate-[5deg]"
          />
        </div>
      </div>

      <div className="grid h-[35%] grid-cols-2 ">
        <div className="flex items-center justify-center ml-10">
          <Polaroid
            {...missionPhotos[2]}
            className="w-[min(35%,220px)] rotate-[-4deg]"
          />
        </div>

        <div className="flex items-center justify-center px-6">
          <div className="max-w-[480px] ">
            <h3 className="editorial text-[clamp(40px,3vw,68px)] leading-[0.85] tracking-[-0.05em]">
              <em> {missionContent.commitment.heading} </em>
            </h3>

            <p className="editorial mt-5 text-[clamp(15px,1.3vw,18px)] leading-[1.45] text-black/65">
              {missionContent.commitment.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  src,
  alt,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption: string;
}) {
  return (
    <div
      className={`
        relative
        shrink-0
        bg-[#f7f6ed]
        p-[7px]
        pb-[34px]
        shadow-[0_12px_28px_rgba(0,0,0,0.10)]
        ${className}
      `}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="280px"
          className="object-cover"
        />
      </div>

      <p className="editorial absolute bottom-[9px] left-[10px] right-[10px] text-left text-[8px] leading-[1.15] text-black/65">
        {caption}
      </p>

      <span className="absolute bottom-[8px] right-[8px] text-[11px] text-black/20">
        ○
      </span>
    </div>
  );
}
