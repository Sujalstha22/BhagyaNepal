import DissolvingHeroSection from "../UI/DistortionSection";

export default function Hero() {
  return (
    <section className="relative">
      <header className="relative z-30 h-[120svh] min-h-[620px] overflow-hidden">
        <DissolvingHeroSection imageUrl="/images/home/Hero1.jpeg" />
      </header>
      <div className="absolute inset-x-0 top-[65svh] z-10">
        <div className="flex min-h-[55svh] items-center justify-center px-(--page-padding)  text-center">
          <div className="mx-auto w-full max-w-4xl">
            <h1 className="editorial text-[clamp(40px,4vw,78px)] leading-[1.08] tracking-[-0.015em] text-(--ink)">
              Every child deserves
              <br />
              to write their <em>own</em> fate.
            </h1>

            <p className="editorial mx-auto mt-6 max-w-[620px] text-[clamp(17px,1.8vw,21px)] italic leading-normal text-(--ink)/60">
              Because a fate, once written, can be rewritten.
            </p>
            <p className="editorial mx-auto mt-6 max-w-3xl text-[clamp(17px,1.8vw,21px)]  leading-normal text-(--ink)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              asperiores eligendi aperiam enim rem vitae soluta, accusantium ea
              blanditiis aut itaque maiores. Vitae tempora magnam qui vel error
              cum harum. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Eveniet aspernatur voluptates magni aliquid minus inventore?
              A voluptatum non eos dolorum voluptatem molestiae, ullam libero
              ducimus, earum repellendus necessitatibus mollitia dolores?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
