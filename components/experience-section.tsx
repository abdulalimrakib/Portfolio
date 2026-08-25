import { experience } from "@/data/experience";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 bg-surface/30 px-6 py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl space-y-12">
          <SectionHeading eyebrow="Experience" title="Teaching & mentorship" />

          <div className="relative ml-3 space-y-12 border-l border-white/10">
            {experience.map((entry) => (
              <div key={entry.role} className="group relative pl-10">
                <div className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-white ring-4 ring-background transition-colors group-hover:bg-indigo-400" />
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-medium text-foreground">
                    {entry.role}
                  </h3>
                  <span className="font-mono text-sm text-muted">
                    {entry.period}
                  </span>
                </div>
                <div className="mb-2 text-foreground/90">
                  {entry.organization}
                </div>
                <ul className="max-w-2xl space-y-1.5 text-sm leading-relaxed text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
