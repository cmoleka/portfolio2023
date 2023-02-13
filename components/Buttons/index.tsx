'use client'
import type { ButtonProps } from "@pTypes/uiTypes";
import classNames from "classnames";
import Link from "next/link";
import { motion as m } from "framer-motion";

export const ButtonWhite = ({ label, buttonHref }: ButtonProps) => {
  return (
    <Link
      href={`${buttonHref}`}
      className="flex h-fit w-fit items-center justify-center border-2 border-white bg-white px-8 py-3 transition delay-100 duration-300 ease-in-out hover:bg-gray-200"
      passHref
    >
      <span className=" w-full text-sm font-semibold capitalize text-slate-800">
        {label}
      </span>
    </Link>
  );
};

export const ButtonDark = ({ secondary, label, buttonHref }: ButtonProps) => {
  const buttonClasses = classNames({
    "hover:bg-gray-900 bg-transparent": !secondary,
    "hover:bg-gray-100 bg-white": secondary,
  });
  const textClasses = classNames({
    "text-white": !secondary,
    "text-gray-900": secondary,
  });

  return (
    <Link
      href={`${buttonHref}`}
      className={` ${buttonClasses} flex h-fit w-fit items-center justify-center border-2 border-turquoise  px-8 py-3 transition delay-100 duration-300 ease-in-out`}
      scroll={false}
      passHref
    >
      <span
        className={`${textClasses} inline-block w-full text-sm font-semibold capitalize `}
      >
        {label}
      </span>
    </Link>
  );
};

export const ButtonWithIcon = ({
  label,
  buttonHref,
  secondary,
}: ButtonProps) => {
  const textClasses = classNames({
    "font-semibold text-white": !secondary,
    "underline text-white/75": secondary,
  });
  return (
    <Link
      href={`${buttonHref}`}
      className="flex h-fit w-fit items-center justify-start space-x-4  py-3  text-white hover:text-gray-300"
      scroll={false}
      passHref
    >
      <m.span
        whileHover={{ paddingRight: 4 }}
        className={`w-full text-sm ${textClasses} capitalize`}
      >
        {label}
      </m.span>
      <m.span whileHover={{ paddingLeft: 4 }} className="">
        &#8594;
      </m.span>
    </Link>
  );
};
