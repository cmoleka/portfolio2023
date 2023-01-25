// import type { FC } from "react";
import type { ButtonProps } from "@pTypes/uiTypes";
import classNames from "classnames";
import Link from "next/link";

export const ButtonWhite = ({ label, buttonHref }: ButtonProps) => {
  return (
    <Link
      href={{
        pathname: buttonHref,
      }}
      passHref
    >
      <button className="flex h-fit w-fit items-center justify-center border-2 border-white bg-white px-8 py-3 hover:bg-gray-100">
        <span className="inline-block w-full text-sm font-semibold capitalize text-gray-800">
          {label}
        </span>
      </button>
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
      href={{
        pathname: buttonHref,
      }}
      passHref
    >
      <button
        className={` ${buttonClasses} flex h-fit w-fit items-center justify-center border-2 border-turquoise  px-8 py-3`}
      >
        <span
          className={`${textClasses} inline-block w-full text-sm font-semibold capitalize `}
        >
          {label}
        </span>
      </button>
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
      href={{
        pathname: buttonHref,
      }}
      passHref
    >
      <button className="flex h-fit w-fit items-center justify-start space-x-4  py-3  text-white hover:text-gray-300">
        <span className={`w-full text-sm ${textClasses} capitalize`}>
          {label}
        </span>
        <span className="">&#8594;</span>
      </button>
    </Link>
  );
};
