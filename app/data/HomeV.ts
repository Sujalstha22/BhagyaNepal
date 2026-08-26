export type TransformationStage = {
  age: string;
  without: {
    image: string;
    text: string;
  };
  withBhagya: {
    image: string;
    text: string;
  };
};

export const transformationStages: TransformationStage[] = [
  {
    age: "6",
    without: {
      image: "/images/narrative-without-1.jpeg",
      text: "School exists. But so does everything that makes it unreachable.",
    },
    withBhagya: {
      image: "/images/narrative-with-1.jpeg",
      text: "Someone sits beside her. Asks what she doesn't understand. Comes back tomorrow.",
    },
  },
  {
    age: "10",
    without: {
      image: "/images/narrative-without-2.jpeg",
      text: "The days fill with other things. Quietly. Without anyone deciding it out loud.",
    },
    withBhagya: {
      image: "/images/narrative-with-2.jpeg",
      text: "She is still in school. Still curious. The guidance doesn't stop when things get difficult.",
    },
  },
  {
    age: "14",
    without: {
      image: "/images/narrative-without-3.jpeg",
      text: "The decisions that shape a life begin to be made. Not by her.",
    },
    withBhagya: {
      image: "/images/narrative-with-3.jpeg",
      text: "She sets a direction. Not because someone chose it for her, because she had the space to choose.",
    },
  },
  {
    age: "18",
    without: {
      image: "/images/narrative-without-4.jpeg",
      text: "A future arrives. Smaller than it needed to be. Not because she was less.",
    },
    withBhagya: {
      image: "/images/narrative-with-4.jpeg",
      text: "She graduates. Earns. Gives back. The story isn't finished, and for the first time, it's hers.",
    },
  },
];

export const walkAlongStory = {
  eyebrow:
    "Every story here is real, shared with the full consent of the child and their guardian.",
  title: "From the children",
  titleSecondLine: "we walk along",
  description:
    "We don’t rush a story out of a child just to fill a page. Some sit with us for months before a single word makes it here — told at their pace, in their words, with a guardian’s hand always somewhere nearby. What you’re reading isn’t a case file. It’s a child deciding they were ready to be heard, and us doing our best to keep up.",
  portraits: [
    {
      image: "/images/alumni/child-01.jpeg",
      alt: "A caregiver spending time with a child",
      placeholder: "A moment shared at their own pace.",
    },
    {
      image: "/images/alumni/child-02.jpeg",
      alt: "A child learning with a caregiver",
      placeholder: "Small steps can become a different future.",
    },
    {
      image: "/images/alumni/child-03.jpeg",
      alt: "A child talking with a caregiver",
      placeholder: "Sometimes being heard is where change begins.",
    },
  ],
} as const;

export const pillars = [
  {
    title: "Education",
    description:
      "School is where everything begins. We ensure every child we work with is enrolled, supported, and given every reason to stay.",
  },
  {
    title: "Mentorship",
    description:
      "At the centre of every child's journey is Pooja, the consistent presence, the person who shows up, and the rock that she herself never had growing up.",
  },
  {
    title: "Sustained presence",
    description:
      "We measure our work in years, not programme cycles. The children we walk alongside know that we will still be there at eighteen, and after that.",
  },
];

export const impactStats = [
  {
    value: "40+",
    description:
      "children walking alongside Bhagya Nepal, today and over the past twelve years.",
  },
  {
    value: "10 yrs",
    description:
      "the average length of time we stay with each child, and counting.",
  },
  {
    value: "12 yrs",
    description: "Bhagya Nepal has been doing this work.",
  },
];

export const partners = [
  {
    name: "Ruta6",
    logo: "/images/partners/ruta6.svg",
    alt: "Ruta6",
  },
  {
    name: "Summit Legal",
    logo: "/images/partners/summit-legal.svg",
    alt: "Summit Legal",
  },
];

export const missionContent = {
  eyebrow: "Our work",
  heading: {
    lineOne: "What Bhagya Nepal does",
    lineTwo: "and why it matters.",
  },
  paragraphs: [
    "Bhagya Nepal works with children whose circumstances have already decided their future for them, not because of who they are, but because of what surrounds them.",
    "We provide education, mentorship, and sustained guidance, not to write their story for them, but to give each child the stability and support to write it themselves.",
  ],
  commitment: {
    eyebrow: "The commitment",
    heading: "And we stay.",
    description:
      "Not for a programme cycle. Long enough to see what a child becomes, and to keep showing up after that.",
    label: "Long term",
  },
};

export const missionPhotos = [
  {
    src: "/images/child-01.jpeg",
    alt: "A child supported by Bhagya Nepal",
    className:
      "left-[5%] top-[43%] w-[190px] rotate-[-7deg] md:left-[7%] md:w-[235px]",
    caption: "Education creates possibility.",
  },
  {
    src: "/images/child-02.jpeg",
    alt: "Children learning together",
    className:
      "right-[6%] top-[10%] w-[200px] rotate-[7deg] md:right-[10%] md:w-[240px]",
    caption: "A safe place to learn, grow and become.",
  },
  {
    src: "/images/child-03.jpeg",
    alt: "Children spending time together",
    className:
      "left-[35%] top-[27%] w-[210px] rotate-[-3deg] md:left-[40%] md:w-[260px]",
    caption: "Every child deserves someone who stays.",
  },
];

export type Advisor = {
  name: string;
  role: string;
  note: string;
  image: string;
  href: string;
};

export const advisors: Advisor[] = [
  {
    name: "Lisa LaFlamme",
    role: "Award-winning Canadian journalist",
    note: "Descriptor pending advisor approval",
    image: "/images/Advisory/lisa laflammel.jpg",
    href: "/team-advisory#lisa-laflamme",
  },
  {
    name: "Inmaculada Riera i Reñé",
    role: "Director-General, Spanish Chamber of Commerce",
    note: "Descriptor pending advisor approval",
    image: "/images/Advisory/InmaculadaRiera.jpg",
    href: "/team-advisory#inmaculada-riera",
  },
  {
    name: "Callie Fauntleroy",
    role: "Child rights & education specialist",
    note: "Role to be confirmed by advisor",
    image: "/images/Advisory/callie.jpg",
    href: "/team-advisory#callie-fauntleroy",
  },
];
