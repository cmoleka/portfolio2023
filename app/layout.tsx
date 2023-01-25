"use client";
import "../styles/globals.scss";
import type { LayoutProps } from "@pTypes/uiTypes";
import { AnalyticsWrapper } from "@components/analytics";
import { HeaderComponent, MenuComponent } from "@components/Header";
import FooterComponent from "@components/Footer";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion'

const RootLayout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900">
        <div
          className="flex flex-col space-y-10  md:space-y-20 md:bg-gradient-to-br  md:from-turquoise-dark"
        >
          <AnimatePresence>
            {menuOpen && (
              <MenuComponent toggleMenu={toggleMenu} />
            )}
          </AnimatePresence>
          {!menuOpen && (
            <>
              <HeaderComponent toggleMenu={toggleMenu} />
              <main
                className="h-full w-full">
                {children}
              </main>
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
