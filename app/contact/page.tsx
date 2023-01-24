import Image from "next/image";
import { ContactPageContent } from "@content/ContactPageContent";
import { PAGES_CONTENT_CONST, SOCIAL_LINKS } from "@utils/constants";
import GITHUBLOGO from "@assets/icons/github-logo.png";
import LINKEDINLOGO from "@assets/icons/linkedin-logo.png";
import TWITTERLOGO from "@assets/icons/twitter-logo.png";
import { ContactForm } from "@components/Form";

const ContactPage = () => {
  return (
    <div className="container mx-auto w-full space-y-20 py-6 px-6">
      <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
        <div className="flex w-full flex-col md:w-2/6">
          <h1 className="font-bold text-turquoise md:text-2xl md:text-white lg:text-5xl">
            {PAGES_CONTENT_CONST.contactMeLabel}
          </h1>
        </div>
        <div className="flex w-full flex-col md:w-4/6">
          <p className="font-medium text-white md:text-sm lg:text-base">
            {ContactPageContent.hero.description}
          </p>
        </div>
      </section>
      <hr />
      <section className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex w-full flex-col  space-y-6 lg:w-1/2">
          <h1 className="text-xl font-bold text-white md:text-2xl  lg:text-3xl">
            {ContactPageContent.sectionDetailOne.title}
          </h1>
          <ul className=" flex flex-row space-x-10">
            {SOCIAL_LINKS.map((item, index) => (
              <li key={index} className="flex flex-row space-x-4">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
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
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col space-y-6 lg:w-1/2">
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            {ContactPageContent.sectionDetailTwo.title}
          </h1>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
