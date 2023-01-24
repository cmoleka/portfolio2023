import type { ProjectContent } from "@pTypes/apiTypes";

const ProjectPageContent: ProjectContent = {
  hero: {
    description:
      "The Open Society Foundations, founded by George Soros, are the world’s largest private funder of independent groups working for justice, democratic governance, and human rights. We provide thousands of grants every year through a network of national and regional foundations and offices, funding a vast array of projects—many of them now shaped by the challenges of the COVID-19 pandemic.",
  },
  projects: [
    {
      title: "Project 1",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      labels: ["React", "Next.js", "TypeScript"],
      ctaHref: "https://www.google.com",
      ctaGithub: "https://www.google.com",
    },
    {
      title: "Project 2",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      labels: ["React", "Next.js", "TypeScript"],
      ctaHref: "https://www.google.com",
      ctaGithub: "https://www.google.com",
    },
    {
      title: "Project 3",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      labels: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Project 4",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      labels: ["React", "Next.js", "TypeScript"],
      ctaHref: "https://www.google.com",
      ctaGithub: "https://www.google.com",
    },
    {
      title: "Golooka",
      description:
        "Golooka is a platform that allows you to create and share your own virtual tours. It is a great way to show your friends and family around your home, or to share your favorite places with the world.",
      labels: ["React", "Next.js", "TypeScript"],
      ctaHref: "https://www.golooka.com",
      ctaGithub: "https://github.com/golooka",
      image: "/assets/projects/golooka.jpg",
      isFeatured: true,
    },
  ],
};

export default ProjectPageContent;
