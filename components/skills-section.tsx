import { skillCategories, type SkillAccent } from "@/data/skills";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

// Written as literal class strings (not built with template interpolation)
// so Tailwind's static scanner picks every one of them up.
const accentStyles: Record<SkillAccent, { badge: string; dot: string }> = {
  indigo: {
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    dot: "bg-indigo-500",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    dot: "bg-purple-500",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-500",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  orange: {
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    dot: "bg-orange-500",
  },
  teal: {
    badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    dot: "bg-teal-500",
  },
  sky: {
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    dot: "bg-sky-500",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    dot: "bg-rose-500",
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/5 px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="Skills"
            title="Technical toolkit"
            description="Grouped by the work it actually supports — model training and evaluation, applied ML engineering, and full-stack delivery."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const style = accentStyles[category.accent];
              return (
                <div
                  key={category.title}
                  className={`card-hover rounded-2xl border border-border bg-surface/50 p-8 ${
                    category.wide ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className={`rounded-lg border p-2 ${style.badge}`}>
                      <Icon size={20} />
                    </span>
                    <h3 className="text-xl font-medium text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {category.wide ? (
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
