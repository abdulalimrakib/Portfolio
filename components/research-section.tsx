import { researchProjects, type ResearchProject } from "@/data/research";
import { Reveal } from "@/components/reveal";
import { ResearchCard } from "@/components/research-card";
import { SectionHeading } from "@/components/section-heading";

function groupByCategory(projects: ResearchProject[]) {
  const groups = new Map<ResearchProject["category"], ResearchProject[]>();
  for (const project of projects) {
    const existing = groups.get(project.category) ?? [];
    existing.push(project);
    groups.set(project.category, existing);
  }
  return groups;
}

export function ResearchSection() {
  const groups = groupByCategory(researchProjects);

  return (
    <section
      id="research"
      className="border-t border-white/5 bg-surface/30 px-6 py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl space-y-16">
          <SectionHeading
            eyebrow="Research"
            title="Research & academic projects"
            description="Independent and directed research at North South University — reproducible benchmarking, model compression, and deployment, alongside applied NLP/LLM systems."
          />

          {Array.from(groups.entries()).map(([category, projects]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-medium text-foreground/90">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <ResearchCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
