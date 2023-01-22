import type { HomeContent } from "@pTypes/apiTypes";

const HomePageContent: HomeContent = {
  hero: {
    title: "Hi, my name is Carlo Moleka. I love building things.",
    description:
      "I am a software engineer based in Montreal Canada, specialized (but not limited to) in Web development.",
    ctaLabel: "contact me",
    ctaHref: "/contact",
  },
  sectionAboutMe: {
    heading: "About Me",
    description:
      "I have a strong skill set in a range of technologies, including Vue, React, NodeJS, and Flask. I am proficient in both front-end and back-end development, and am always looking for opportunities to learn and grow as a developer.",
    ctaLabel: "Learn more",
    ctaHref: "/about",
  },
  sectionOneHeading: "Some things I've built",
  cardSectionOne: {
    description:
      "As a software engineer, I have a wealth of projects. Some are completed, while others are still in progress, and some have been abandoned. Here is a preview of my projects.",
    ctaLabel: "contact me",
    ctaHref: "/contact",
    ctaLabelSecondary: "explore other projects",
    ctaHrefSecondary: "/portfolio",
  },
  cardSectionTwo: {
    heading: "Technologies I'm working with",
    description:
      "It is important to be versatile with the tools we use, while also not being limited to them. Some projects require learning and adaptation, which I am good at. This has enabled me to learn new technologies and integrate them into my workflow, giving me more choices and skills to use depending on the scope of the task.",
    badges: {
      frameworks: ["Vue", "React", "NextJS", "NuxtJS"],
      languages: ["TypeScript", "JavaScript", "Python"],
      database: ["MongoDB", "PostgreSQL"],
    },
    ctaLabel: "contact me",
    ctaHref: "/contact",
  },
  cardSectionThree: {
    card: {
      heading: "Lets work together",
      ctaLabel: "contact me",
      ctaHref: "/contact",
      ctaLabelSecondary: "explore my work",
      ctaHrefSecondary: "/portfolio",
    },
  },
};

export default HomePageContent;
