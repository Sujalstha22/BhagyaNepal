import Image from "next/image";
import Link from "next/link";

const advisors = [
  {
    name: "Lisa LaFlamme",
    role: "Award-winning Canadian journalist",
    note: "Descriptor pending advisor approval",
    image: "/images/advisory/lisa-laflamme.webp",
    href: "/team-advisory#lisa-laflamme",
  },
  {
    name: "Inmaculada Riera i Reñé",
    role: "Director-General, Spanish Chamber of Commerce",
    note: "Descriptor pending advisor approval",
    image: "/images/advisory/inmaculada-riera.webp",
    href: "/team-advisory#inmaculada-riera",
  },
  {
    name: "Callie Fauntleroy",
    role: "Child rights & education specialist",
    note: "Role to be confirmed by advisor",
    image: "/images/advisory/callie-fauntleroy.webp",
    href: "/team-advisory#callie-fauntleroy",
  },
];

export default function AdvisoryBoard() {
  return (
    <section className="w-full overflow-hidden bg-(--pink) py-[clamp(80px,11vh,130px)]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-[clamp(40px,5vw,72px)] sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor) => (
            <Link
              key={advisor.name}
              href={advisor.href}
              className="group block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-(--ink)/[0.025]">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="
                    object-cover
                    grayscale
                    opacity-90
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.025]
                    group-hover:grayscale-[0.7]
                    group-hover:opacity-100
                  "
                />
                <div className="pointer-events-none absolute inset-0 bg-(--amber)/[0.06] mix-blend-color" />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(25,22,17,0.08)_100%)]" />
              </div>

              <p className="editorial mt-5 text-[clamp(18px,2vw,23px)] leading-[1.2] text-(--ink)">
                {advisor.name}
              </p>

              <p className="mt-2 text-[13px] leading-[1.65] text-(--mid)">
                {advisor.role}
                <br />

                <em className="text-[11px] not-italic text-(--faint)">
                  {advisor.note}
                </em>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
