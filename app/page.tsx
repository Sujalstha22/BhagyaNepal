// import FounderQuote from "@/components/Home/FounderQuote";
// import Hero from "@/components/Home/Hero";
// import HowBhagyaWorks from "@/components/Home/HowBhagyaWorks";
// import Partners from "@/components/Home/Patners";
// import Mission from "@/components/Home/Mission";
// import MissionSection from "@/components/HomeV/MissionSection";
import Impact from "@/components/Home/Impact";
import Partners from "@/components/Home/Patners";
import VisionDivider from "@/components/HomeV/1stDivider";

import AdvisoryBoard from "@/components/HomeV/Advisory";

import FoundersStory from "@/components/HomeV/FoundersStory";
import Hero from "@/components/HomeV/Hero";
import ImpactStories from "@/components/HomeV/ImpactStory";
import MissionSectionV2 from "@/components/HomeV/MissionSectionV2";
import TransformationIntro from "@/components/HomeV/Transformation/TransformationIntro";
import TransformationStory from "@/components/HomeV/Transformation/TransformationStory";
import Vision from "@/components/HomeV/Vision";
import Works from "@/components/HomeV/Works";
import ScrollInvite from "@/components/Layout/ScrollInvite";

export default function Home() {
  return (
    <div>
      {/* <Hero />
      <FounderQuote />
      <Mission />
      <HowBhagyaWorks />
      <Partners /> */}

      <Hero />
      <TransformationIntro />
      <TransformationStory />
      <VisionDivider />
      <FoundersStory />
      {/* <MissionSection /> */}
      <MissionSectionV2 />
      <Vision />
      <Works />
      <Impact />
      <Partners />
      <AdvisoryBoard />
      <ImpactStories />
      <ScrollInvite />
    </div>
  );
}
