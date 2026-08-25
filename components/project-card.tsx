import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/tag";
import type { SoftwareProject } from "@/data/projects";

const accentGradient: Record<SoftwareProject["accent"], string> = {
  blue: "from-blue-900/20",
  purple: "from-purple-900/20",
};

const accentIconColor: Record<SoftwareProject["accent"], string> = {
  blue: "text-blue-500/30",
  purple: "text-purple-500/30",
};

export function ProjectCard({ project }: { project: SoftwareProject }) {
  const Icon = project.icon;

  return (
    <article className="card-hover group overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <div
          className={`absolute inset-0 bg-gradient-to-tr to-neutral-900 transition-transform duration-500 group-hover:scale-105 ${accentGradient[project.accent]}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={64} className={accentIconColor[project.accent]} />
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="mb-1 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-muted">{project.period}</p>
          </div>
          {project.githubHref && (
            <a
              href={project.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-foreground hover:bg-white/10"
              aria-label={`View source for ${project.title} on GitHub`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>

        <p className="text-sm text-muted">{project.summary}</p>

        <ul className="space-y-2 text-sm text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
