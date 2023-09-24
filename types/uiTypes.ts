import type { HTMLMotionProps } from "framer-motion";
import type { ChangeEvent, HTMLAttributes, ReactNode } from "react";
import type React from "react";

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
  label: string
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CardsProps = {
  title?: string;
  description?: string;
  buttonHref?: string;
  buttonLabel?: string;
  buttonLabelSecondary?: string;
  buttonHrefSecondary?: string;
  secondary?: boolean;
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
  tag: string;
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

export type BlogPostProps = {
  id?: string;
  title: string;
  slug: string;
  published_at: string;
  custom_excerpt?: string;
  feature_image?: string;
  html?: string;
  primary_author?: [
    {
      id: string;
      name: string;
      slug: string;
      profile_image: string;
    }
  ];
  tags?: [
    {
      id: string;
      name: string;
      slug: string;
      visibility: string;
    }
  ];
  excerpt?: string;
};

export type BlogPostsTimelineProps = {
  posts: BlogPostProps[];
};

export type BlogPostSideBarProps = {
  labels: {
    name: string;
    slug: string;
    description: string;
  }[];
};

export type BlogPostTagsProps = {
  name: string;
  slug: string;
  description: string;
};

export interface CardWithSkillsProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    title: string;
    skills: string[];
  }[];
}
