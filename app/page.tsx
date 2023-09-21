import HeroComponent from "@components/Hero";
import {
  CardWithTextAndOneButton,
} from "@components/Cards";
import ProjectContent from "@content/ProjectsPageContent";
import HomePageContent from "@content/homePageContent";
import { FeaturedProjectCard, ProjectCard } from "@components/Projects";
import { PageWrapper } from "@components/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto w-full space-y-10 py-6 px-6">
        <HeroComponent
          title={HomePageContent.hero.title}
          description={HomePageContent.hero.description}
          ctaLabel={HomePageContent.hero.ctaLabel}
          ctaHref={HomePageContent.hero.ctaHref}
        />
        <section id="#aboutme" className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
          <div className="flex w-full flex-col md:w-3/6">
            <h1 className="md:text-2xlk font-bold text-turquoise md:text-white lg:text-3xl">
              {HomePageContent.sectionAboutMe.heading}
            </h1>
          </div>
          <CardWithTextAndOneButton
            description="I'm a highly motivated and self-taught multi-disciplinary Engineer with a deep passion for coding and a relentless drive to create positive tech-driven change.

My journey is marked by an unending pursuit of knowledge, refining my skills through hands-on experience, devouring industry insights, and mastering the art of reverse engineering.

I'm enthusiastic about embracing fresh challenges and nurturing my growth as an Engineer."
            secondary
          />
        </section>
        <hr />
        <section id="#projects" className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
            <h1 className="font-bold text-turquoise md:text-xl  lg:text-3xl">
              {"Some Things I’ve Built"}
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
