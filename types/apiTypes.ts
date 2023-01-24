export type HomeContent = {
  hero: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  sectionAboutMe: {
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  sectionOneHeading: string;
  cardSectionOne: {
    description: string;
    ctaLabel: string;
    ctaHref: string;
    ctaLabelSecondary: string;
    ctaHrefSecondary: string;
  };
  cardSectionTwo: {
    heading: string;
    description: string;
    badges: {
      frameworks: string[];
      languages: string[];
      database: string[];
    };
    ctaLabel: string;
    ctaHref: string;
  };
  cardSectionThree: {
    card: {
      heading: string;
      ctaLabel: string;
      ctaHref: string;
      ctaLabelSecondary: string;
      ctaHrefSecondary: string;
    };
  };
};

export type AboutContent = {
  hero: {
    title: string;
    description: string;
  };
  sectionAboutMe: {
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  sectionDetailOne: {
    title: string;
    description: string;
  };
  sectionDetailTwo: {
    title: string;
    description: string;
  };
};

export type ProjectContent = {
  hero: {
    description: string;
  };
  projects: {
    title: string;
    description: string;
    labels: string[];
    ctaHref?: string;
    ctaGithub?: string;
    image?: string;
    isFeatured?: boolean;
  }[];
};

export type ContactContent = {
  hero: {
    description: string;
  };
  sectionDetailOne: {
    title: string;
  };
  sectionDetailTwo: {
    title: string;
  };
};
