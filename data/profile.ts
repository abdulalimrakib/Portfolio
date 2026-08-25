/**
 * Core identity and contact information.
 *
 * Every field here is taken verbatim (or lightly condensed without changing
 * meaning) from Resume.pdf and Academic_CV.pdf. Do not add claims here that
 * aren't traceable to one of those two documents.
 */
export const profile = {
  name: "Abdul Alim Rakib",
  initials: "AR",
  title: "AI/ML Engineer",
  subtitle: "NLP & LLMs · Computer Vision · Full-Stack Development",
  location: "Dhaka, Bangladesh",
  email: "abdulalimrakib04@gmail.com",
  links: {
    github: "https://github.com/abdulalimrakib",
    linkedin: "https://linkedin.com/in/abdul-alim-rakib1",
  },
  resumeHref: "/Abdul-Alim-Rakib-Resume.pdf",
  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of Abdul Alim Rakib",
  },

  /** One-line status shown as a small badge in the hero. */
  availability: "Open to AI/ML engineering & full-stack roles",

  /**
   * Hero summary — condensed from the Resume's SUMMARY section. Kept to
   * claims that are demonstrated elsewhere on the page (research, projects).
   */
  heroSummary:
    "From fine-tuning and benchmarking models to shipping the full-stack product around them — my work spans NLP/LLMs, computer vision, and production web engineering.",

  /**
   * Longer About paragraph — synthesized from the Resume SUMMARY and the
   * Academic CV's Academic Profile, keeping only claims present in both or
   * directly demonstrated by the Research/Projects sections below.
   */
  about: [
    "I'm a Computer Science and Engineering graduate of North South University with hands-on, end-to-end experience across Natural Language Processing, Computer Vision, and full-stack web development. I've fine-tuned large language models with QLoRA/PEFT, built retrieval-augmented generation systems, and benchmarked dozens of deep learning architectures for image classification and forensic manipulation detection — then taken the strongest results through quantization and deployment.",
    "A full-stack (MERN) background lets me carry a project from a trained model to a working client application without handing it off. I also spent three semesters as an Undergraduate Teaching Assistant and a year moderating a 12-member peer web-development group — work that shaped how I write about and explain technical decisions.",
  ],
} as const;
