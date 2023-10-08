"use client";
import Image from "next/image";
import { Badge } from "@components/Badge";
import Link from "next/link";
import type { ProjectCardProps } from "@pTypes/uiTypes";
import { PAGES_CONTENT_CONST } from "@utils/constants";
import { motion as m } from "framer-motion";

export const ProjectCard = ({
  title,
  description,
  labels,
  tag,
  ctaHref,
  ctaGithub,
}: ProjectCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className="flex w-full flex-col gap-y-2 rounded-md bg-gray-800 p-4 shadow-md"
    >
      <div className="flex flex-col gap-y-1">
        <label className="text-xs capitalize text-white">{tag}</label>
        <h2 className="text-xl font-bold capitalize text-turquoise">{title}</h2>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-white/75 md:text-xs lg:text-sm">{description}</p>
        <div className="grid auto-rows-auto grid-cols-3 gap-2 md:grid-cols-4">
          {labels &&
            labels.map((label, index) => <Badge key={index} label={label} />)}
        </div>
      </div>
      <div className="mt-auto flex gap-6">
        {ctaGithub && (
          <Link
            href={{
              pathname: ctaGithub,
            }}
            scroll={false}
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <span className="text-sm font-bold text-turquoise after:content-['_↗']">
              GitHub
            </span>
          </Link>
        )}
        {ctaHref && (
          <Link
            href={{
              pathname: ctaHref,
            }}
            scroll={false}
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <span className="text-sm font-bold text-turquoise after:content-['_↗']">
              View
            </span>
          </Link>
        )}
      </div>
    </m.div>
  );
};

export const FeaturedProjectCard = ({
  title,
  description,
  labels,
  ctaHref,
  ctaGithub,
  image,
}: ProjectCardProps) => {
  return (
    <m.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className="flex w-full flex-col justify-between"
    >
      <div className="flex w-full justify-center">
        <div className="w-100 relative flex h-fit flex-col overflow-hidden  p-4">
          <div className="z-20 w-full space-y-4 rounded-md bg-slate-800/60  p-4 shadow-md md:w-3/4 lg:w-1/2">
            <span className="text-xs capitalize text-white">
              {PAGES_CONTENT_CONST.featuredProjectsLabel}
            </span>
            <h2 className="text-2xl font-bold capitalize text-turquoise">
              {title}
            </h2>
            <p className="text-white/75 md:text-sm lg:text-base">
              {description}
            </p>
            <div className="grid auto-rows-auto grid-cols-3 gap-2 md:grid-cols-4">
              {labels &&
                labels.map((label, index) => (
                  <Badge key={index} label={label} />
                ))}
            </div>
            <div className="flex flex-row gap-6">
              {ctaGithub && (
                <Link
                  href={{
                    pathname: ctaGithub,
                  }}
                  scroll={false}
                  rel="noopener noreferrer"
                  target="_blank"
                  passHref
                >
                  <span className="text-sm font-bold text-turquoise after:content-['_↗']">
                    GitHub
                  </span>
                </Link>
              )}
              {ctaHref && (
                <Link
                  href={{
                    pathname: ctaHref,
                  }}
                  scroll={false}
                  rel="noopener noreferrer"
                  target="_blank"
                  passHref
                >
                  <span className="text-sm font-bold text-turquoise after:content-['_↗']">
                    View
                  </span>
                </Link>
              )}
            </div>
          </div>
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-turquoise-dark/60 mix-blend-multiply" />
          <Image
            src={`${image}`}
            alt="Golooka"
            className="rounded-md object-cover"
            fill
          />
        </div>
      </div>
    </m.section>
  );
};
