export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Undergraduate Teaching Assistant",
    organization:
      "North South University · Dept. of Political Science and Sociology",
    period: "Summer 2024 – Summer 2025",
    bullets: [
      "Provided structured academic support to six faculty members across three academic semesters.",
      "Graded examinations, quizzes, and assignments, ensuring consistent and defensible application of course rubrics across large undergraduate cohorts.",
    ],
  },
  {
    role: "Peer Mentor & Moderator, Web Development Group",
    organization: "NSU ACM Student Chapter, North South University",
    period: "Spring 2024 – Spring 2025",
    bullets: [
      "Moderated and led a twelve-member web development team within the chapter's Web Group.",
      "Delivered peer-learning sessions on JavaScript, React.js, and full-stack development practice.",
      "Mentored junior members on modern front-end frameworks, responsive design, and Git-based collaborative workflows.",
      "Coordinated technical workshops and contributed to the chapter's outreach and skill-building initiatives.",
    ],
  },
];
