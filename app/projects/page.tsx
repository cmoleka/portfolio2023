import ProjectContent from "@content/ProjectsPageContent";
import { PAGES_CONTENT_CONST } from "@utils/constants";
import { FeaturedProjectCard, ProjectCard } from "@components/Projects";

import { PageWrapper } from "@components/PageWrapper";


const ProjectsPage = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto w-full space-y-20 py-6 px-6">
        <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
          <div className="flex w-full flex-col md:w-2/6">
            <h1 className="font-bold text-turquoise md:text-2xl md:text-white lg:text-5xl">
              {PAGES_CONTENT_CONST.projectsLabel}
            </h1>
          </div>
          <div className="flex w-full flex-col md:w-4/6">
            <p className="font-medium text-white md:text-sm lg:text-base">
              {ProjectContent.hero.description}
            </p>
          </div>
        </section>
        <hr />
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

export default ProjectsPage;
