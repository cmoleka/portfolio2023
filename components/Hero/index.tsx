'use client'
import { ButtonDark } from "@components/Buttons";
import type { HeroProps } from "@pTypes/uiTypes";
import { motion as m } from 'framer-motion'

const HeroComponent = ({
  label,
  title,
  description,
  ctaLabel,
  ctaHref,
}: HeroProps) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <div className="flex w-full flex-col items-center md:flex-row overflow-hidden">
      <m.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex w-full flex-col space-y-6 md:w-5/6">
        <label className="text-sm uppercase text-turquoise">
          {label}
        </label>
        <h1 className="text-4xl font-bold text-white   md:text-6xl">{title}</h1>
        <p className="text-base text-white/75">{description}</p>
        <ButtonDark buttonHref={ctaHref} label={ctaLabel} />
      </m.div>
      <div className="hidden flex-col space-y-4 md:w-3/6 lg:flex">
        <m.svg width="366" initial="hidden" animate="visible" height="344" viewBox="0 0 366 344" fill="none" xmlns="http://www.w3.org/2000/svg">
          <m.circle cx="150.5" cy="150.5" r="149.5" stroke="#4ECDC4" strokeWidth="2" variants={draw} custom={1} />
          <m.circle cx="186.5" cy="193.5" r="149.5" stroke="#4ECDC4" strokeWidth="2" variants={draw} custom={2} />
          <m.circle cx="215.5" cy="150.5" r="149.5" stroke="#4ECDC4" strokeWidth="2" variants={draw} custom={3} />
        </m.svg>
      </div>
    </div>
  );
};

export default HeroComponent;
