import { ButtonDark } from "@components/Buttons";
import { PAGES_CONTENT_CONST } from "@utils/constants";
import type { FC } from "react";

const FooterComponent: FC = () => {
  return (
    <>
      <hr />
      <section className="flex w-full flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
        <div className="flex w-full flex-col items-center  justify-center space-y-8 text-center md:w-3/4 lg:w-3/5">
          <h1 className="text-2xl font-bold text-white  md:text-4xl lg:text-4xl xl:text-6xl">
            {PAGES_CONTENT_CONST.footerHeading}
          </h1>
          <ButtonDark
            buttonHref={PAGES_CONTENT_CONST.footerCtaHref}
            label={PAGES_CONTENT_CONST.footerCtaLabel}
          />
        </div>
      </section>
      <footer className="container mx-auto flex w-full flex-row items-center">
        <div className="flex w-full flex-row justify-center space-x-4">
          <p className="text-base capitalize text-white">
            © 2023 - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
