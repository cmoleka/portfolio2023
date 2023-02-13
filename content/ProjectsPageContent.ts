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
        "A small project I am working on that helps me practice and stay on top of my data structures and algorithms skills. It is a visualizer for some of the most common data structures and algorithms, that is updated periodically. For me it's all about the code under the hood. While for the viewer... I hope you find it entertaining!",
      labels: ["Next.js", "TypeScript"],
      ctaHref: "https://da-visualizer.vercel.app/",
      ctaGithub: "https://github.com/cmoleka/da-visualizer",
    },
    {
      title: "Itraws v2",
      description:
        "A simple Nuxtjs website, with a GhostAPI integration, hosted on Netlify.",
      labels: ["Nuxt.js", "TypeScript", "Tailwindcss", "i18n"],
      ctaHref: "https://itraws.com",
      ctaGithub: "https://github.com/itraws",
    },
    {
      title: "Weather App",
      description:
        "This is a simple weather app that I built using the OpenWeatherMap API. It is a simple app that allows you to search for a city and get the current weather conditions for that city. Adding this for the lulz.",
      labels: ["Vue", "Vuetify"],
      ctaHref: "https://amazing-meitner-2fcba4.netlify.app",
      ctaGithub: "https://github.com/cmoleka/weatherapp",
    },
    {
      title: "Portfolio v2",
      description:
        "The second iteration of my portfolio, that was built with Nuxt a few years ago. It had a few animations that took advantage of the animate on scroll library and vue-animejs.",
      labels: ["Nuxt", "Bootstrap"],
      ctaHref: "https://pv2.carlomoleka.com",
      ctaGithub: "https://github.com/cmoleka/personal-portfolio-v2",
    },
  ],
};

export default ProjectPageContent;
