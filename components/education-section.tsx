import { Award, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { honors } from "@/data/honors";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading eyebrow="Education" title="Education & honors" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg font-medium text-foreground/90">
                <GraduationCap size={20} className="text-foreground/70" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((entry) => (
                  <div
                    key={entry.institution}
                    className="rounded-xl border border-border bg-surface/50 p-6"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-medium text-foreground">
                        {entry.institution}
                      </h4>
                      <span className="font-mono text-xs text-muted">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/80">
                      {entry.credential}
                    </p>
                    <p className="mt-2 text-sm text-muted">{entry.detail}</p>
                    {entry.coursework && (
                      <dl className="mt-4 space-y-2 text-sm">
                        {entry.coursework.map((group) => (
                          <div key={group.label}>
                            <dt className="text-xs tracking-wide text-muted uppercase">
                              {group.label}
                            </dt>
                            <dd className="mt-1 text-muted">
                              {group.items.join(" · ")}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg font-medium text-foreground/90">
                <Award size={20} className="text-foreground/70" />
                Honors & Awards
              </h3>
              <div className="space-y-6">
                {honors.map((honor) => (
                  <div
                    key={honor.title}
                    className="rounded-xl border border-border bg-surface/50 p-6"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-medium text-foreground">
                        {honor.title}
                      </h4>
                      <span className="font-mono text-xs text-muted">
                        {honor.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/80">
                      {honor.issuer}
                    </p>
                    <p className="mt-2 text-sm text-muted">{honor.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
