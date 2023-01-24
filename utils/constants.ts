// Web site constants and default configuration
export const SITE_NAVIGATION = [
  { label: "Home", href: "/", description: "Go back to homepage." },
  { label: "About", href: "/about", description: "Learn more about me." },
  { label: "Projects", href: "/projects", description: "Explore my projects." },
  { label: "Blog", href: "/blog", description: "Read my blog." },
  { label: "Contact", href: "/contact", description: "Get in touch with me." },
] as const;

export const SITE_METADATA = {
  title: "My Portfolio",
  description: "My personal portfolio website.",
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
  workExperienceLabel: "Work Experience",
  footerHeading: "Lets create something great together",
  footerCtaLabel: "Contact me",
  footerCtaHref: "/contact",
} as const;
