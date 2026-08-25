import { Film, ShieldCheck, type LucideIcon } from "lucide-react";

export interface SoftwareProject {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  tools: string[];
  githubHref?: string;
  icon: LucideIcon;
  accent: "blue" | "purple";
}

/**
 * Applied software-engineering work, kept distinct from the Research section
 * (which mirrors the Academic CV's own "Research Experience and Academic
 * Projects" grouping). GitHub links recovered from the Academic CV PDF's
 * link annotations.
 */
export const softwareProjects: SoftwareProject[] = [
  {
    title: "Full-Stack MERN Authentication & Authorization Platform",
    period: "2024 – 2025",
    summary:
      "A production-style authentication platform with role-based access control, JWT sessions, and bcrypt credential hashing.",
    highlights: [
      "Architected RESTful endpoints on Node.js and Express with MongoDB persistence, JWT session management, bcrypt credential hashing, role-based access control, and protected routing.",
      "Delivered a fully responsive client with Redux state management, demonstrating secure credential handling and modular component architecture.",
    ],
    tools: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "JWT",
      "Tailwind CSS",
    ],
    githubHref:
      "https://github.com/abdulalimrakib/Full-Stack-MERN-Auth-project",
    icon: ShieldCheck,
    accent: "blue",
  },
  {
    title: "MovieX: Responsive Movie Discovery Application",
    period: "2023 – 2024",
    summary:
      "A single-page React application consuming The Movie Database API, with client-side search, filtering, and asynchronous data fetching.",
    highlights: [
      "Engineered a single-page React application consuming the TMDB API, with client-side search, filtering, and asynchronous data fetching.",
      "Applied responsive design-system practices to produce a performant interface across viewport sizes.",
    ],
    tools: ["React.js", "Tailwind CSS", "SASS", "TMDB REST API"],
    githubHref: "https://github.com/abdulalimrakib/MovieX",
    icon: Film,
    accent: "purple",
  },
];
