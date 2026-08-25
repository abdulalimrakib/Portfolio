import { softwareProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="Projects"
            title="Software engineering"
            description="Applied full-stack work — the engineering practice that lets me ship the products around a model, not just the model."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {softwareProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
