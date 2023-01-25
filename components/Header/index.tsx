import Image from "next/image";
import Logo from "@assets/logo-white.svg";
import Link from "next/link";
import { SITE_NAVIGATION, SOCIAL_LINKS } from "@utils/constants";
import GITHUBLOGO from "@assets/icons/github-logo.png";
import LINKEDINLOGO from "@assets/icons/linkedin-logo.png";
import TWITTERLOGO from "@assets/icons/twitter-logo.png";

export const HeaderComponent = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <>
      <header className="container mx-auto flex flex-row items-center space-x-6 divide-x divide-white px-6">
        <div className="flex flex-row items-center">
          <Link href={{ pathname: "/" }}>
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
    <div className="flex h-screen w-full flex-col space-y-10 bg-gradient-to-br from-turquoise-dark  to-gray-900 p-2 md:p-8">
      <header className="container mx-auto flex flex-row items-center space-x-6 divide-x divide-white px-6">
        <div className="flex flex-row items-center">
          <Link href={{ pathname: "/" }}>
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
                className="flex flex-row  md:flex-col"
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
    </div>
  );
};
