import type { HomeContent } from "@pTypes/apiTypes";

const HomePageContent: HomeContent = {
  hero: {
    title: "Ready to Code, Build and Innovate.",
    description:
      "I'm Carlo Moleka, a self-taught Full Stack Engineer with a passion for coding and a drive to make an impact through technology.",
    ctaLabel: "contact me",
    ctaHref: "/contact",
  },
  sectionAboutMe: {
    heading: "About Me",
    description:
      "I have been a software engineer for several years now, continuously developing my skills and expanding my knowledge. My journey began 22 years ago and I've been obsessed with technology ever since.",
    ctaLabel: "Learn more",
    ctaHref: "/about",
  },
  sectionOneHeading: "Some things I've built",
  cardSectionOne: {
    description:
      "Building projects is one of my favorite things to do, and I'm always eager to share my work with others. Here, you'll find a range of projects, from those I've finished to those that are still a work in progress.",
    ctaLabel: "contact me",
    ctaHref: "/contact",
    ctaLabelSecondary: "explore other projects",
    ctaHrefSecondary: "/projects",
  },
  cardSectionTwo: {
    heading: "Technologies I'm working with",
    description:
      "Technology evolves quickly, and I like to make sure I'm always on top of it. Here are a few of the technologies I've been diving into lately:",
    items: [
      {
        title: "Libraries & frameworks",
        skills: [
          "Vue",
          "React",
          "NextJS",
          "NuxtJS",
          "Bootstrap",
          "TailwindCSS",
        ],
      },
      {
        title: "languages",
        skills: ["TypeScript", "JavaScript", "Python"],
      },
      {
        title: "database",
        skills: ["MongoDB", "PostgreSQL", "noSQL", "SQL"],
      },
    ],
    ctaLabel: "contact me",
    ctaHref: "/contact",
  },
  cardSectionThree: {
    card: {
      heading: "Lets work together",
      ctaLabel: "contact me",
      ctaHref: "/contact",
      ctaLabelSecondary: "explore my work",
      ctaHrefSecondary: "/projects",
    },
  },
};

export default HomePageContent;
