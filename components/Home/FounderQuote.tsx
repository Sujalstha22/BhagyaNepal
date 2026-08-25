import Image from "next/image";

export default function FounderQuote() {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-(--paper) md:grid-cols-[1fr_1.15fr]">
      <div className="relative min-h-[440px] bg-[#b6ac9c]">
        <Image src="/images/home/founder.png" alt="Founder" fill={true} />
      </div>

      <div className="flex flex-col justify-center px-8 py-16 md:px-[clamp(32px,5vw,84px)]">
        <p className="sectionLabel tracking-[0.22em]">Founder's voice</p>

        <blockquote className="relative mb-8 text-[clamp(19px,2vw,27px)] italic leading-[1.5]">
          I grew up in a children's home. And despite that, I was given
          something that changed everything access to a good education. That
          single opportunity shaped who I became. But what I didn't have was
          someone who stayed. What any child needs — what I needed — is someone
          who stays. Who shows up again tomorrow. Who is still there when the
          hard part comes. I built Bhagya Nepal so that every child has what I
          had and what I didn't. A real chance at education, and someone who
          will still be there tomorrow. Not just today. Tomorrow, and after
          that.
        </blockquote>

        <div className="text-[11px] mt-5 uppercase font-semibold tracking-[0.12em] leading-5 text-(--mid)">
          <span className="block text-(--ink) ">Pooja Pyakurel</span>
          Founder, Bhagya Nepal
        </div>
      </div>
    </section>
  );
}
