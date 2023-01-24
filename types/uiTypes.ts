import type { ChangeEvent, ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type BadgeProps = {
  label: string;
};

export type ButtonProps = {
  label: string;
  buttonHref?: string;
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

export type ProjectCardProps = {
  title: string;
  description: string;
  labels: string[];
  ctaHref: string;
  ctaGithub: string;
  image?: string;
  isFeatured?: boolean;
};

export type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export type ContactFormRefType = {
  name: string;
  email: string;
  message: string;
};
