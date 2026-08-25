import { Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-gradient-to-b from-background to-surface/20 px-6 py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Let&apos;s build something intelligent.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            {profile.availability}. If you have a question about my work or want
            to talk about a role, I&apos;ll get back to you.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.resumeHref}
              download
              className="flex items-center gap-3 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-white/5"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 text-sm text-muted">
            <MapPin size={16} />
            {profile.location}
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 opacity-70">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-all hover:text-foreground hover:opacity-100"
            >
              <GithubIcon className="h-6 w-6" />
              <span className="text-xs">GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-all hover:text-foreground hover:opacity-100"
            >
              <LinkedinIcon className="h-6 w-6" />
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
