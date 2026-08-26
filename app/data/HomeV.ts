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

export const transformationStages = [
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
      image: "/images/homev/child-01.jpg",
      alt: "A caregiver spending time with a child",
      placeholder: "A moment shared at their own pace.",
    },
    {
      image: "/images/homev/child-02.jpg",
      alt: "A child learning with a caregiver",
      placeholder: "Small steps can become a different future.",
    },
    {
      image: "/images/homev/child-03.jpg",
      alt: "A child talking with a caregiver",
      placeholder: "Sometimes being heard is where change begins.",
    },
  ],
} as const;
