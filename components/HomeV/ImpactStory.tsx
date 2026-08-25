import Link from "next/link";

const stories = [
  {
    id: "story-one",
    image: "/images/stories/story-01.webp",
    story:
      "From a school she couldn't afford to attend, to a scholarship she earned herself.",
    href: "/stories/story-one",
  },
  {
    id: "story-two",
    image: "/images/stories/story-02.webp",
    story:
      "Ten years ago, no one believed she would finish primary school. Now she's applying to university.",
    href: "/stories/story-two",
  },
  {
    id: "story-three",
    image: "/images/stories/story-03.webp",
    story:
      "He was the first in his family to learn to read. He won't be the last.",
    href: "/stories/story-three",
  },
];

export default function ImpactStories() {
  return (
    <section className="w-full overflow-hidden py-[clamp(80px,11vh,130px)]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <p className="mb-4 text-[8px] uppercase tracking-[0.02em] text-(--mid)">
          From the children we walk alongside
        </p>

        <p className="editorial mb-[clamp(40px,6vh,64px)] max-w-[650px] text-[clamp(15px,1.5vw,18px)] italic leading-[1.55] text-(--mid)">
          Every story here is real, shared with the full consent of the child
          and their guardian.
        </p>

        <div className="grid gap-[clamp(40px,5vw,72px)] md:grid-cols-3">
          {stories.map((story) => (
            <Link key={story.id} href={story.href} className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-(--ink)/[0.025]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-(--mid)">
                    Photograph pending
                  </span>
                </div>

                {/*
                <Image
                  src={story.image}
                  alt=""
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
                />
                */}
              </div>

              {/* Story */}
              <div className="pt-5">
                <p className="editorial max-w-[420px] text-[clamp(17px,1.7vw,21px)] leading-[1.45] text-(--ink-soft)">
                  {story.story}
                </p>

                <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.08em] text-(--amber-soft) underline underline-offset-4 transition-opacity duration-300 group-hover:opacity-60">
                  Read the story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
