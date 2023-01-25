// Web site constants and default configuration
export const SITE_NAVIGATION = [
  { label: "Home", href: "/", description: "Go back to homepage." },
  { label: "About", href: "/about", description: "Learn more about me." },
  { label: "Projects", href: "/projects", description: "Explore my projects." },
  { label: "Blog", href: "/blog", description: "Read my blog." },
  { label: "Contact", href: "/contact", description: "Get in touch with me." },
] as const;

export const SITE_METADATA = {
  title: "CMS - Carlo Moleka: Software Engineer",
  description:
    "Explore the portfolio of Carlo Moleka Sambea, a full stack web developer specializing in building and deploying dynamic web applications. From front-end development to back-end engineering, my portfolio showcases my expertise in the latest technologies and my ability to deliver high-quality and performant software solutions.",
  keywords: [
    "full stack web development",
    "web development",
    "web applications",
    "front-end development",
    "back-end engineering",
    "software engineering",
    "Carlo Moleka Sambea",
    "web developer",
    "dynamic web applications",
    "latest technologies",
    "high-quality",
    "performant software solutions",
    "portfolio",
    "React",
    "NextJS",
    "Vue",
    "NuxtJS",
    "tailwindcss",
    "trpc",
    "data science",
    "machine learning",
    "expressjs",
    "mangodb",
    "postgresql",
  ],
  url: "https://carlomoleka.com",
  author: "Carlo Moleka",
  metaImage: "/assets/og-image.png",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com/carlomoleka",
  },
  {
    label: "GitHub",
    href: "https://github.com/cmoleka",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlomoleka",
  },
] as const;

export const PAGES_CONTENT_CONST = {
  heroLabel: "Introduction",
  featuredProjectsLabel: "Featured Projects",
  aboutMeLabel: "About Me",
  projectsLabel: "Explore my projects",
  contactMeLabel: "Contact Me",
  blogLabel: "Blog",
  blogGoBackLabel: "Go Back",
  blogPostsLabel: "Blog Posts",
  blogFeaturedLabel: "Featured Post",
  blogReadMoreLabel: "Read More",
  blogSectionLabel: "Latest Posts",
  blogCategoryLabel: "Topics",
  blogPostedOnLabel: "Posted on",
  blogPaginationLabel: "Load more",
  workExperienceLabel: "Work Experience",
  footerHeading: "Lets create something great together",
  footerCtaLabel: "Contact me",
  footerCtaHref: "/contact",
} as const;
