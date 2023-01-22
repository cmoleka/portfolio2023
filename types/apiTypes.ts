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
