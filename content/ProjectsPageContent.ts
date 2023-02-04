import type { ProjectContent } from "@pTypes/apiTypes";

const ProjectPageContent: ProjectContent = {
  hero: {
    description:
      "If you're interested in getting to know me better and seeing what I can do, look no further than my Projects page. Here you'll find a curated collection of my work, including both completed and ongoing projects. ",
  },
  projects: [
    {
      title: "Golooka",
      description:
        "Golooka is a cutting-edge job platform that streamlines the job search process for both job seekers and recruiters in Congo. Utilizing modern technology, Golooka provides an index of current job openings, making it easier for job seekers to find their next career opportunity and for recruiters to find the right talent.",
      labels: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Vercel"],
      ctaHref: "https://www.golooka.com",
      ctaGithub: "https://github.com/golooka",
      image: "/assets/projects/golooka.jpg",
      isFeatured: true,
    },
    {
      title: "DA visualizer",
      description:
        "A small project I am working on that helps me practice and stay on top of my data structures and algorithms skills. It is a visualizer for some of the most common data structures and algorithms. For me it's all about the code under the hood, while for the viewer, I hope you find it entertaining. (Updates periodically). Probably going implement 3D models in the future.",
      labels: ["Next.js", "TypeScript"],
      ctaHref: "https://da-visualizer.vercel.app/",
      ctaGithub: "https://github.com/cmoleka/da-visualizer",
    },
  ],
};

export default ProjectPageContent;
