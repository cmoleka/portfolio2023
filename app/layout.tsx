"use client";
import "../styles/globals.scss";
import type { LayoutProps } from "@pTypes/uiTypes";
import { AnalyticsWrapper } from "@components/analytics";
import { HeaderComponent, MenuComponent } from "@components/Header";
import FooterComponent from "@components/Footer";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

declare const window: any;

const RootLayout = ({ children }: LayoutProps) => {
  const pathName = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay: 0.7, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 bg-no-repeat md:bg-gradient-to-b md:from-turquoise-dark md:to-gray-900">
        <div className="container mx-auto flex  flex-col space-y-10  md:space-y-20 ">
          <AnimatePresence mode="wait">
            {menuOpen && <MenuComponent toggleMenu={toggleMenu} />}
          </AnimatePresence>
          {!menuOpen && (
            <>
              <HeaderComponent toggleMenu={toggleMenu} />
              <AnimatePresence
                mode="wait"
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <m.main
                  key={pathName}
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: "linear" }}
                  className="h-full w-full"
                >
                  {children}
                </m.main>
              </AnimatePresence>
              <FooterComponent />
            </>
          )}
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
