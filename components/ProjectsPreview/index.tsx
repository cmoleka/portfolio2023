import { CardWithHeadingAndTwoButtons } from "@components/Cards";
import type { FC } from "react";
import GolookaShot from "@assets/projects/golooka.jpg";
import ItrawsShot from "@assets/projects/itraws.png";
import Image from "next/image";
import type { ProjectPreviewProps } from "@pTypes/uiTypes";
import { Badge } from "@components/Badge";
import Link from "next/link";

export const ProjectPreviewSection = ({
  heading,
  ctaLabel,
  ctaHref,
  ctaLabelSecondary,
  ctaHrefSecondary,
}: ProjectPreviewProps) => {
  // ! This section is not working properly, lets revisit it some other time.
  return (
    <section className="flex w-full flex-col justify-between md:relative md:left-0 md:top-0">
      <div className="absolute top-0 -left-32 z-10 hidden  w-screen flex-col bg-gradient-to-b from-turquoise-darker to-transparent md:-left-14 md:flex md:h-64 lg:h-80 xl:-left-28"></div>
      <div className="flex  w-full flex-col md:relative md:top-10 md:z-20 md:w-4/5 lg:w-4/6 xl:w-3/6">
        <CardWithHeadingAndTwoButtons
          title={heading}
          buttonHref={ctaHref}
          buttonLabel={ctaLabel}
          buttonHrefSecondary={ctaHrefSecondary}
          buttonLabelSecondary={ctaLabelSecondary}
        />
      </div>
      <div className="relative -top-12 z-0 hidden w-full justify-center  md:-left-2 md:flex lg:-left-10 xl:-left-5">
        <div className="flex w-full space-x-8 overflow-hidden">
          <Image src={GolookaShot} alt="Golooka" className="rounded-md" />
          <Image src={ItrawsShot} alt="Itraws" className="rounded-md" />
        </div>
      </div>
    </section>
  );
};
export const ProjectsPreviewScrollSection: FC = () => {
  return (
    <section className="flex w-full flex-col justify-between">
      <div className="flex w-full justify-center">
        <div className="w-100 relative flex h-fit flex-col p-4">
          <div className="z-20 w-full space-y-4 rounded-md bg-gray-800 p-4 shadow-md md:w-3/4 lg:w-1/2">
            <span className="text-xs capitalize text-white">
              featured project
            </span>
            <h2 className="text-2xl font-bold capitalize text-turquoise">
              Golooka
            </h2>
            <p className="text-white/75 md:text-sm lg:text-base">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
            <div className="flex gap-6">
              <Badge label="NextJs" />
              <Badge label="tRPC" />
              <Badge label="PostgreSQL" />
            </div>
            <div className="flex flex-row gap-6">
              <Link href="https://github.com" passHref>
                <span className="text-sm font-bold text-turquoise after:content-['_↗']">
                  GitHub
                </span>
              </Link>
              <Link href="https://golooka.com" passHref>
                <span className="text-sm font-bold text-turquoise after:content-['_↗']">
                  View
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute top-0 left-0 z-10 h-full w-full bg-turquoise-dark/90 mix-blend-multiply"></div>
          <Image
            src={GolookaShot}
            alt="Golooka"
            className="overla rounded-md object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};
// export const ProjectsPreviewScrollSection: FC = () => {
//   return (
//     <section className="flex w-full flex-col justify-between">
//       <div className="flex w-full justify-center">
//         <div className="flex space-x-8 overflow-x-auto">
//           <Image src={GolookaShot} alt="Golooka" className="rounded-md" />
//           <Image src={ItrawsShot} alt="Itraws" className="rounded-md" />
//           <Image src={GolookaShot} alt="Golooka" className="rounded-md" />
//           <Image src={ItrawsShot} alt="Itraws" className="rounded-md" />
//         </div>
//       </div>
//     </section>
//   );
// };
