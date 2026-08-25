import { ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Tag } from "@/components/tag";
import type { ResearchProject } from "@/data/research";

export function ResearchCard({ project }: { project: ResearchProject }) {
  return (
    <article
      className={`card-hover flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 md:p-8 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <div>
          <h3 className="text-lg font-semibold text-foreground md:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-muted italic">{project.subtitle}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted">
          {project.period}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      <details className="group" open={project.featured}>
        <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-foreground/90 hover:text-foreground">
          Details
          <ChevronDown
            size={16}
            className="transition-transform group-open:rotate-180"
          />
        </summary>
        <ul className="mt-4 space-y-2.5 text-sm text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
              {highlight}
            </li>
          ))}
        </ul>
      </details>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        {project.tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>

      {project.githubHref && (
        <a
          href={project.githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 text-sm font-medium text-foreground/90 hover:text-foreground"
        >
          <GithubIcon className="h-4 w-4" />
          View code
        </a>
      )}
    </article>
  );
}
