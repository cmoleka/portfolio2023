import { ButtonDark } from "@components/Buttons";
import { getPageContent } from "@utils/notion";

const FooterComponent = async () => {
  const FooterData = await getPageContent()

  return (
    <>
      <hr />
      <section className="flex w-full flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
        <div className="flex w-full flex-col items-center  justify-center space-y-8 text-center md:w-3/4 lg:w-3/5">
          <h1 className="text-2xl font-bold text-white  md:text-4xl lg:text-4xl xl:text-6xl">
            {FooterData.get("contact_heading") as string}
          </h1>

            <ButtonDark
              buttonHref={FooterData.get("contact_cta_href") as string}
              label={FooterData.get("contact_cta_label") as string}
            />
        </div>
      </section>
      <footer className="container mx-auto flex w-full flex-row items-center">
        <div className="flex w-full flex-row justify-center space-x-4 p-2">
          <p className="text-base capitalize text-white">
          {FooterData.get("footer_text") as string}
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
