// import FounderQuote from "@/components/Home/FounderQuote";
// import Hero from "@/components/Home/Hero";
// import HowBhagyaWorks from "@/components/Home/HowBhagyaWorks";
// import Partners from "@/components/Home/Patners";
// import Mission from "@/components/Home/Mission";
// import MissionSection from "@/components/HomeV/MissionSection";
import Impact from "@/components/HomeV/Impact";

import VisionDivider from "@/components/HomeV/1stDivider";

import AdvisoryBoard from "@/components/HomeV/Advisory";
import ContinuityPath from "@/components/HomeV/ContinuityPath";

import FoundersStory from "@/components/HomeV/FoundersStory";
import Hero from "@/components/HomeV/Hero";
import ImpactStories from "@/components/HomeV/ImpactStory";
import MissionSectionV2 from "@/components/HomeV/MissionSectionV2";
import NarrativeStory from "@/components/HomeV/Transformation/NarrativeStory";

import Vision from "@/components/HomeV/Vision";
import WalkAlongSection from "@/components/HomeV/WalkAlongSection";
import Works from "@/components/HomeV/Works";
import ScrollInvite from "@/components/Layout/ScrollInvite";
import Partners from "@/components/HomeV/Patners";
import Support from "@/components/HomeV/Support";

export default function Home() {
  return (
    <div>
      {/* <Hero />
      <FounderQuote />
      <Mission />
      <HowBhagyaWorks />
      <Partners /> */}
      {/* <TransformationIntro /> */}
      {/* <ContinuityPath /> */}
      {/* <MissionSection /> */}
      {/* <ImpactStories /> */}

      <Hero />
      <NarrativeStory />
      <VisionDivider />
      <FoundersStory />
      <MissionSectionV2 />
      <Vision />
      <Works />
      <Impact />
      <Partners />
      <AdvisoryBoard />
      <WalkAlongSection />
      <Support />
      <ScrollInvite />
    </div>
  );
}
