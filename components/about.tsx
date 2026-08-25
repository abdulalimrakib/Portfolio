import Image from "next/image";
import { GraduationCap, Languages, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const facts = [
  { icon: MapPin, label: profile.location },
  { icon: GraduationCap, label: "B.Sc. Computer Science & Engineering, NSU" },
  { icon: Languages, label: "Bangla (native) · English (professional)" },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-5xl space-y-12">
          <SectionHeading eyebrow="About" title="Who I am" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:items-start">
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={192}
              height={192}
              className="mx-auto h-40 w-40 rounded-2xl border border-border object-cover md:mx-0 md:h-48 md:w-48"
              priority
            />

            <div className="space-y-5">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}

              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-muted">
                {facts.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon size={16} className="text-foreground/70" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
