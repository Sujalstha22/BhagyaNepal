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
      image: "/images/narrative-without-1.png",
      text: "School exists. But so does everything that makes it unreachable.",
    },

    withBhagya: {
      image: "/images/narrative-with-1.png",
      text: "Someone sits beside her. Asks what she doesn't understand. Comes back tomorrow.",
    },
  },

  {
    age: "10",

    without: {
      image: "/images/narrative-without-2.png",
      text: "The days fill with other things. Quietly. Without anyone deciding it out loud.",
    },

    withBhagya: {
      image: "/images/narrative-with-2.png",
      text: "She is still in school. Still curious. The guidance doesn't stop when things get difficult.",
    },
  },

  {
    age: "14",

    without: {
      image: "/images/narrative-without-3.png",
      text: "The decisions that shape a life begin to be made. Not by her.",
    },

    withBhagya: {
      image: "/images/narrative-with-3.png",
      text: "She sets a direction. Not because someone chose it for her, because she had the space to choose.",
    },
  },

  {
    age: "18",

    without: {
      image: "/images/narrative-without-4.png",
      text: "A future arrives. Smaller than it needed to be. Not because she was less.",
    },

    withBhagya: {
      image: "/images/narrative-with-4.png",
      text: "She graduates. Earns. Gives back. The story isn't finished, and for the first time, it's hers.",
    },
  },
];
