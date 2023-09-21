"use client";
import Image from "next/image";
import Logo from "@assets/logo-white.svg";
import Link from "next/link";
import { SOCIAL_LINKS } from "@utils/constants";
import GITHUBLOGO from "@assets/icons/github-logo.png";
import LINKEDINLOGO from "@assets/icons/linkedin-logo.png";
import TWITTERLOGO from "@assets/icons/twitter-logo.png";
import { motion as m, AnimatePresence } from "framer-motion";

export const HeaderComponent = () => {

  return (
    <>
      <AnimatePresence mode="wait">
        <MenuClosedComponent />
      </AnimatePresence>
    </>
  );
};

export const MenuClosedComponent = () => {
  return (
    <m.header
      key="menuClosed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="container sticky top-0 z-[9999] mx-auto flex flex-row items-center space-x-6 md:divide-x divide-white p-2 px-6 backdrop-blur-md md:p-8">
      <div className="flex items-center">
        <Link href="/" scroll={false}>
          <Image
            src={Logo}
            alt="logo"
            className="h-16 w-32 md:h-auto md:w-auto"
            sizes="(max-width: 768px) 20vw, (min-width: 1024) 100%"
          />
        </Link>
      </div>
      <nav className="flex flex-col md:flex-row space-x-4 pl-6 md:justify-between w-full">
        <ul className="hidden md:flex gap-x-8">
          <li className="cursor-pointer text-lg font-bold uppercase text-white"><Link href="#aboutme">About</Link></li>

          <li className="cursor-pointer text-lg font-bold uppercase text-white"><Link href="#projects">Projects</Link></li>
          <li className="cursor-pointer text-lg font-bold uppercase text-white"><Link href="#contact">Contact</Link></li>
        </ul>

        <ul className="flex space-x-5 md:space-x-10 justify-end md:justify-center">
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index} className="flex flex-row space-x-4">
              <Link
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                scroll={false}
                className="relative h-auto w-7 md:h-6 md:w-6"
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
      </nav>
    </m.header>

  )
}
