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
  ctaHref,
  ctaGithub,
}: ProjectCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className="w-full space-y-4 rounded-md bg-gray-800 p-4 shadow-md"
    >
      <h2 className="text-xl font-bold capitalize text-turquoise">{title}</h2>
      <p className="text-white/75 md:text-xs lg:text-sm">{description}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {labels &&
          labels.map((label, index) => <Badge key={index} label={label} />)}
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
        <div className="w-100 relative flex h-fit flex-col p-4">
          <div className="z-20 w-full space-y-4 rounded-md bg-gray-800 p-4 shadow-md md:w-3/4 lg:w-1/2">
            <span className="text-xs capitalize text-white">
              {PAGES_CONTENT_CONST.featuredProjectsLabel}
            </span>
            <h2 className="text-2xl font-bold capitalize text-turquoise">
              {title}
            </h2>
            <p className="text-white/75 md:text-sm lg:text-base">
              {description}
            </p>
            <div className="flex flex-row flex-wrap gap-6">
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
          <div className="absolute top-0 left-0 z-10 h-full w-full bg-turquoise-dark/90 mix-blend-multiply"></div>
          <Image
            src={image || ""}
            alt="Golooka"
            className="overla rounded-md object-cover"
            fill
          />
        </div>
      </div>
    </m.section>
  );
};
