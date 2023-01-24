import type { AboutContent } from "@pTypes/apiTypes";

const AboutPageContent: AboutContent = {
  hero: {
    title: "Hi, my name is Carlo Moleka. I love building things.",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  sectionAboutMe: {
    heading: "Who am I?",
    description:
      "I have a strong skill set in a range of technologies, including Vue, React, NodeJS, and Flask. I am proficient in both front-end and back-end development, and am always looking for opportunities to learn and grow as a developer.",
    ctaLabel: "Let's schedule a call",
    ctaHref: "/contact",
  },
  sectionDetailOne: {
    title: "Approach",
    description:
      "As a software engineer, I have a wealth of projects. Some are completed, while others are still in progress, and some have been abandoned. Here is a preview of my projects.",
  },
  sectionDetailTwo: {
    title: "Skills",
    description:
      "It is important to be versatile with the tools we use, while also not being limited to them. Some projects require learning and adaptation, which I am good at. This has enabled me to learn new technologies and integrate them into my workflow, giving me more choices and skills to use depending on the scope of the task.",
  },
};

export default AboutPageContent;
