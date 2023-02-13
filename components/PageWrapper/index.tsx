'use client'
import type { ReactNode, FC } from 'react'
import { motion as m, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";


interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

declare const window: any;

export const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  const pathName = usePathname();


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
        className={`${className} h-full w-full`}
      >
        {children}
      </m.main>
    </AnimatePresence>
  )


}
