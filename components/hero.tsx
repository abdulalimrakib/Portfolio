import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="bg-grid relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <div className="glow-bg pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 opacity-60" />

      <div className="relative z-10 max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {profile.availability}
        </div>

        <h1 className="text-5xl leading-[1.1] font-semibold tracking-tighter text-foreground md:text-7xl">
          I build AI systems <br className="hidden md:block" />
          <span className="text-neutral-500">end-to-end.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.heroSummary}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <a
            href="#research"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-black transition-all hover:bg-neutral-200"
          >
            View Research
            <ArrowRight size={18} />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="flex items-center gap-2 rounded-full border border-border px-8 py-3 font-medium text-foreground transition-all hover:bg-white/5"
          >
            <Download size={18} />
            Download Resume
          </a>
          <div className="flex gap-2 sm:ml-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted transition-colors hover:text-foreground"
              aria-label="GitHub profile"
            >
              <GithubIcon className="h-[22px] w-[22px]" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="h-[22px] w-[22px]" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-foreground opacity-50 transition-opacity hover:opacity-90"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
