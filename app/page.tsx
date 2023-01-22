"use client";
import HeroComponent from "@components/Hero";
import {
  CardWithHeadingTextOneButton,
  CardWithTextAndOneButton,
  CardWithTextAndTwoButtons,
} from "@components/Cards";
import { Badge } from "@components/Badge";
import { ProjectsPreviewScrollSection } from "@components/ProjectsPreview";
import { HOMEPAGE_CONTENT } from "@utils/constants";
import { ButtonDark } from "@components/Buttons";
import HomePageContent from "../content/homePageContent";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto w-full space-y-20 py-6 px-6">
        <HeroComponent
          title={HomePageContent.hero.title}
          description={HomePageContent.hero.description}
          ctaLabel={HomePageContent.hero.ctaLabel}
          ctaHref={HomePageContent.hero.ctaHref}
        />
        <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
          <div className="flex w-full flex-col md:w-3/6">
            <h1 className="md:text-2xlk font-bold text-turquoise md:text-white lg:text-3xl">
              {HomePageContent.sectionAboutMe.heading}
            </h1>
          </div>
          <CardWithTextAndOneButton
            description={HomePageContent.sectionAboutMe.description}
            buttonLabel={HomePageContent.sectionAboutMe.ctaLabel}
            buttonHref={HomePageContent.sectionAboutMe.ctaHref}
          />
        </section>
        <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
          <div className="flex w-full flex-col md:w-3/6">
            <h1 className="font-bold text-turquoise md:text-xl md:text-white lg:text-3xl">
              {HomePageContent.sectionOneHeading}
            </h1>
          </div>
          <CardWithTextAndTwoButtons
            description={HomePageContent.cardSectionOne.description}
            buttonLabel={HomePageContent.cardSectionOne.ctaLabel}
            buttonHref={HomePageContent.cardSectionOne.ctaHref}
            buttonLabelSecondary={
              HomePageContent.cardSectionOne.ctaLabelSecondary
            }
            buttonHrefSecondary={
              HomePageContent.cardSectionOne.ctaHrefSecondary
            }
          />
        </section>
        <ProjectsPreviewScrollSection />
        <section className="flex w-full flex-col justify-between space-y-8 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8">
          <CardWithHeadingTextOneButton
            title={HomePageContent.cardSectionTwo.heading}
            description={HomePageContent.cardSectionTwo.description}
            buttonLabel={HomePageContent.cardSectionTwo.ctaLabel}
            buttonHref={HomePageContent.cardSectionTwo.ctaHref}
          />
          <div className="flex w-full flex-col flex-wrap space-y-4 md:w-3/6">
            <h3 className="text-lg font-bold text-white">Frameworks</h3>
            <div className="flex flex-wrap items-center  justify-start gap-6 ">
              {HomePageContent.cardSectionTwo.badges.frameworks.map(
                (badge, index) => (
                  <Badge key={index} label={badge} />
                )
              )}
            </div>
            <h3 className="text-lg font-bold text-white">
              Programing Languages
            </h3>
            <div className="flex flex-wrap items-center  justify-start gap-6 ">
              {HomePageContent.cardSectionTwo.badges.languages.map(
                (badge, index) => (
                  <Badge key={index} label={badge} />
                )
              )}
            </div>
            <h3 className="text-lg font-bold text-white">Data Bases</h3>
            <div className="flex flex-wrap items-center  justify-start gap-6 ">
              {HomePageContent.cardSectionTwo.badges.database.map(
                (badge, index) => (
                  <Badge key={index} label={badge} />
                )
              )}
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
          <div className="flex w-full flex-col items-center  justify-center space-y-8 text-center md:w-3/4 lg:w-3/5">
            <h1 className="text-2xl font-bold text-white  md:text-4xl lg:text-4xl xl:text-6xl">
              {HOMEPAGE_CONTENT.footerHeading}
            </h1>
            <ButtonDark
              buttonHref={HOMEPAGE_CONTENT.footerCtaHref}
              label={HOMEPAGE_CONTENT.footerCtaLabel}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
