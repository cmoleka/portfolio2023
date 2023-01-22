import type { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type BadgeProps = {
  label: string;
};

export type ButtonProps = {
  label: string;
  buttonHref: string;
  secondary?: boolean;
};

export type HeroProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CardsProps = {
  title?: string;
  description?: string;
  buttonHref: string;
  buttonLabel: string;
  buttonLabelSecondary?: string;
  buttonHrefSecondary?: string;
};

export type ProjectPreviewProps = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  ctaLabelSecondary: string;
  ctaHrefSecondary: string;
};
