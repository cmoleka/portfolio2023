"use client";
import { ButtonWhite, ButtonDark, ButtonWithIcon } from "@components/Buttons";
import profilePicture from "@assets/profilepicture.png";
import Image from "next/image";
import type { CardsProps, CardWithSkillsProps } from "@pTypes/uiTypes";
import { motion as m } from "framer-motion";
import { Badge } from "@components/Badge";

export const CardWithTextAndTwoButtons = ({
  description,
  buttonHref,
  buttonLabel,
  buttonHrefSecondary,
  buttonLabelSecondary,
}: CardsProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:w-3/3 flex w-full flex-col lg:w-2/3"
    >
      <p className="text-base text-white">{description}</p>
      <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <ButtonWhite label={buttonLabel} buttonHref={buttonHref} />
        <ButtonWithIcon
          label={buttonLabelSecondary as string}
          buttonHref={buttonHrefSecondary as string}
        />
      </div>
    </m.div>
  );
};
export const CardWithHeadingAndTwoButtons = ({
  title,
  buttonHref,
  buttonLabel,
  buttonHrefSecondary,
  buttonLabelSecondary,
}: CardsProps) => {
  return (
    <div className="flex w-full flex-col space-y-8 md:w-3/4 lg:w-3/5">
      <h2 className="font-normal text-turquoise md:text-xl md:text-white lg:text-2xl">
        {title}
      </h2>
      <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <ButtonWhite label={buttonLabel} buttonHref={buttonHref} />
        <ButtonWithIcon
          label={buttonLabelSecondary as string}
          buttonHref={buttonHrefSecondary as string}
        />
      </div>
    </div>
  );
};
export const CardWithHeadingTextOneButton = ({
  title,
  description,
  buttonHref,
  buttonLabel,
}: CardsProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex w-full flex-col space-y-6 md:w-2/3 lg:w-2/4"
    >
      <h1 className="mb-2  font-bold text-turquoise underline decoration-turquoise underline-offset-[14px] md:text-xl md:text-white md:decoration-4 lg:text-2xl  lg:decoration-8">
        {title}
      </h1>
      <p className="text-base text-white opacity-75">{description}</p>
      <div className="mt-4 flex flex-row space-x-4">
        <ButtonDark label={buttonLabel} buttonHref={buttonHref} />
      </div>
    </m.div>
  );
};
export const CardWhoAmI = ({
  title,
  description,
  buttonHref,
  buttonLabel,
}: CardsProps) => {
  /* There is an issue, because Next image component has changed
    Lets figure it out another time */
  return (
    <section className="flex w-full flex-col justify-center space-x-4 md:flex-row">
      <div className="flex w-4/5 rounded-md bg-white pt-6 pl-6 ">
        <div className="flex w-full flex-col space-y-6 p-6 md:w-full">
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-base text-charcoal opacity-75">{description}</p>
          <div className="mt-4 flex flex-row space-x-4">
            <ButtonDark label={buttonLabel} buttonHref={buttonHref} secondary />
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};

export const CardWithTextAndOneButton = ({
  description,
  buttonHref,
  buttonLabel,
  secondary,
}: { secondary?: boolean } & CardsProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:w-3/3 flex w-full flex-col lg:w-2/3"
    >
      <p className="text-base font-semibold text-white">{description}</p>
      <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <ButtonWithIcon
          label={buttonLabel}
          buttonHref={buttonHref}
          secondary={secondary}
        />
      </div>
    </m.div>
  );
};

export const CardWithSkills = ({ items }: CardWithSkillsProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex w-full flex-col flex-wrap space-y-4 md:w-3/6"
    >
      {items.map(({ title, skills }, index) => (
        <div key={index} className="space-y-2">
          <h3 className="text-lg font-bold capitalize text-white">{title}</h3>
          <div className="flex flex-wrap items-center  justify-start gap-6 ">
            {skills.map((skill, index) => (
              <Badge key={index} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </m.div>
  );
};
