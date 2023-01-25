"use client";
import Image from "next/image";
import Logo from "@assets/logo-white.svg";
import Link from "next/link";
import { SITE_NAVIGATION, SOCIAL_LINKS } from "@utils/constants";
import GITHUBLOGO from "@assets/icons/github-logo.png";
import LINKEDINLOGO from "@assets/icons/linkedin-logo.png";
import TWITTERLOGO from "@assets/icons/twitter-logo.png";
import { motion as m } from "framer-motion";

export const HeaderComponent = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <>
      <header className="container sticky top-0 z-[9999] mx-auto flex flex-row items-center space-x-6 divide-x divide-white p-2 px-6 backdrop-blur-md md:p-8">
        <div className="flex flex-row items-center">
          <Link href={{ pathname: "/" }} scroll={false}>
            <Image
              src={Logo}
              alt="logo"
              className="h-16 w-16 md:h-auto md:w-auto"
              sizes="(max-width: 768px) 20vw, (min-width: 1024) 100%"
            />
          </Link>
        </div>
        <nav className="flex flex-row space-x-4 pl-6">
          <span
            onClick={toggleMenu}
            className="cursor-pointer text-lg font-bold capitalize text-white"
          >
            menu
          </span>
        </nav>
      </header>
    </>
  );
};

export const MenuComponent = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <m.div
      key="menuOpen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="flex h-screen w-full flex-col space-y-10  p-2 md:p-8"
    >
      <header className="container mx-auto flex flex-row items-center space-x-6 divide-x divide-white px-6">
        <div className="flex flex-row items-center">
          <Link href={{ pathname: "/" }} scroll={false}>
            <Image
              src={Logo}
              alt="logo"
              className="h-16 w-16 md:h-auto md:w-auto"
              sizes="(max-width: 768px) 20vw, (min-width: 1024) 100%"
            />
          </Link>
        </div>
        <nav className="flex flex-row space-x-4 pl-6">
          <span
            onClick={toggleMenu}
            className="cursor-pointer text-lg font-bold capitalize text-white"
          >
            close
          </span>
        </nav>
      </header>
      <main className="container mx-auto flex h-full flex-row items-center justify-center space-x-6 divide-x divide-white px-6">
        <ul className="flex w-full flex-col space-y-8">
          {SITE_NAVIGATION.map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row  md:items-center md:justify-between md:space-x-20"
            >
              <Link
                href={{
                  pathname: item.href,
                }}
                scroll={false}
                className="flex flex-row  md:flex-col"
                onClick={toggleMenu}
              >
                <span className="cursor-pointer text-lg font-bold capitalize text-white  md:text-4xl">
                  {item.label}
                </span>
              </Link>
              <div className="flex w-96 flex-row md:flex-col">
                <p className="text-xs text-white/75">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="container mx-auto flex flex-col space-y-4 px-6 md:space-y-6">
        <span className="text-sm text-white md:text-lg">
          Follow me on social media
        </span>
        <ul className=" flex flex-row space-x-10">
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index} className="flex flex-row space-x-4">
              <Link
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                scroll={false}
                className="relative h-14 w-14 md:h-6 md:w-6"
              >
                <Image
                  src={
                    item.label === "GitHub"
                      ? GITHUBLOGO
                      : item.label === "Twitter"
                      ? TWITTERLOGO
                      : LINKEDINLOGO
                  }
                  alt={item.label}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </m.div>
  );
};
