import { CardWithTextAndOneButton } from "@components/Cards";
import AboutPageContent from "@content/AboutPageContent";
import { PAGES_CONTENT_CONST } from "@utils/constants";

const AboutPage = () => {
  return (
    <div className="container mx-auto w-full space-y-20 py-6 px-6">
      <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
        <div className="flex w-full flex-col md:w-2/6">
          <h1 className="font-bold text-turquoise md:text-2xl md:text-white lg:text-5xl">
            {PAGES_CONTENT_CONST.aboutMeLabel}
          </h1>
        </div>
        <div className="flex w-full flex-col md:w-4/6">
          <p className="font-medium text-white md:text-sm lg:text-base">
            {AboutPageContent.hero.description}
          </p>
        </div>
      </section>
      <hr />
      <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
        <div className="flex w-full flex-col md:w-3/6">
          <h1 className="font-bold text-turquoise md:text-2xl md:text-white lg:text-3xl">
            {AboutPageContent.sectionAboutMe.heading}
          </h1>
        </div>
        <CardWithTextAndOneButton
          description={AboutPageContent.sectionAboutMe.description}
          buttonLabel={AboutPageContent.sectionAboutMe.ctaLabel}
          buttonHref={AboutPageContent.sectionAboutMe.ctaHref}
          secondary
        />
      </section>
      <hr />
      <section className="flex w-full flex-col justify-between gap-20 lg:flex-row">
        <div className="flex w-full flex-col space-y-6 lg:w-1/2">
          <h1 className="md:text-2xlk font-bold text-turquoise md:text-white lg:text-3xl">
            {AboutPageContent.sectionDetailOne.title}
          </h1>
          <p className="text-base text-white">
            {AboutPageContent.sectionDetailOne.description}
          </p>
        </div>
        <div className="flex w-full flex-col space-y-6 lg:w-1/2">
          <h1 className="md:text-2xlk font-bold text-turquoise md:text-white lg:text-3xl">
            {AboutPageContent.sectionDetailTwo.title}
          </h1>
          <p className="text-base text-white">
            {AboutPageContent.sectionDetailTwo.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
