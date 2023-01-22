import { ButtonDark } from "@components/Buttons";
import Image from "next/image";
import HeroSymbol from "@assets/symbol.svg";
import type { HeroProps } from "@pTypes/uiTypes";
import { HOMEPAGE_CONTENT } from "@utils/constants";

const HeroComponent = ({
  title,
  description,
  ctaLabel,
  ctaHref,
}: HeroProps) => {
  return (
    <div className="flex w-full flex-col items-center md:flex-row">
      <div className="flex w-full flex-col space-y-6 md:w-5/6">
        <label className="text-sm uppercase text-turquoise">
          {HOMEPAGE_CONTENT.heroLabel}
        </label>
        <h1 className="text-4xl font-bold text-white   md:text-6xl">{title}</h1>
        <p className="text-base text-white/75">{description}</p>
        <ButtonDark buttonHref={ctaHref} label={ctaLabel} />
      </div>
      <div className="hidden flex-col space-y-4 md:w-3/6 lg:flex">
        <Image src={HeroSymbol} alt="hero symbol" />
      </div>
    </div>
  );
};

export default HeroComponent;
