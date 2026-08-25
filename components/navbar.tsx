"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined")
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="rounded-md bg-white px-1.5 py-0.5 text-xs font-bold text-black transition-transform group-hover:scale-110">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-foreground ${
                active === link.href ? "text-foreground" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-neutral-200"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-4 border-b border-border bg-surface p-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/90 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-semibold text-foreground"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
