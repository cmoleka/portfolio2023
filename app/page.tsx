import HeroComponent from "@components/Hero";
import {
  CardWithTextAndOneButton,
} from "@components/Cards";
import ProjectContent from "@content/ProjectsPageContent";
import { FeaturedProjectCard, ProjectCard } from "@components/Projects";
import { PageWrapper } from "@components/PageWrapper";
import { getPageContent } from "@utils/notion";


const HomePage = async () => {
  const HomePageData = await getPageContent()

  return (
    <PageWrapper>
      <div className="container mx-auto w-full space-y-10 py-6 px-6">
        <HeroComponent
        label={HomePageData.get("hero_sub_heading") as string}
          title={HomePageData.get("hero_heading") as string}
          description={HomePageData.get("hero_paragraph") as string}
          ctaLabel={HomePageData.get("hero_cta_label") as string}
          ctaHref={HomePageData.get("hero_cta_href") as string}
        />
        <section id="#aboutme" className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
          <div className="flex w-full flex-col md:w-3/6">
            <h1 className="md:text-2xlk font-bold text-turquoise md:text-white lg:text-3xl">
              {HomePageData.get("about_me_heading") as string}
            </h1>
          </div>
          <CardWithTextAndOneButton
            description={HomePageData.get("about_me_paragraph") as string}
            secondary
          />
        </section>
        <hr />
        <section id="#projects" className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
            <h1 className="font-bold text-turquoise md:text-xl  lg:text-3xl">
              {HomePageData.get("projects_heading") as string}
            </h1>
        </section>
        {ProjectContent.projects
          .filter((project) => project.isFeatured)
          .map((project, index) => (
            <FeaturedProjectCard
              key={index}
              title={project.title}
              description={project.description}
              labels={project.labels}
              ctaHref={project.ctaHref || ""}
              ctaGithub={project.ctaGithub || ""}
              image={project.image}
              isFeatured={project.isFeatured}
            />
          ))}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ProjectContent.projects &&
            ProjectContent.projects
              .filter((project) => !project.isFeatured)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  labels={project.labels}
                  ctaHref={project.ctaHref || ""}
                  ctaGithub={project.ctaGithub || ""}
                />
              ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
