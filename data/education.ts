export interface EducationEntry {
  institution: string;
  location: string;
  credential: string;
  period: string;
  detail: string;
  coursework?: { label: string; items: string[] }[];
}

/**
 * Degree-completion status confirmed directly by Abdul: the Academic CV's
 * "January 2022 – May 2026" range is the accurate one (the Resume's "2025"
 * end date was stale).
 */
export const education: EducationEntry[] = [
  {
    institution: "North South University",
    location: "Dhaka, Bangladesh",
    credential: "B.Sc. in Computer Science and Engineering",
    period: "Jan 2022 – May 2026",
    detail:
      "CGPA: 3.65 / 4.00 · Merit-based 25% tuition scholarship awarded throughout undergraduate study.",
    coursework: [
      {
        label: "AI/ML coursework",
        items: [
          "Natural Language Processing",
          "Computer Vision",
          "Neural Networks & Deep Learning",
          "AI Fundamentals",
        ],
      },
      {
        label: "CS foundations",
        items: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming",
          "Database Management Systems",
          "Software Engineering",
          "Web Application Development",
          "Discrete Mathematics",
        ],
      },
    ],
  },
  {
    institution: "Notre Dame College",
    location: "Mymensingh, Bangladesh",
    credential: "Higher Secondary Certificate (HSC), Science Group",
    period: "2018 – 2021",
    detail:
      "GPA: 5.00 / 5.00 — the maximum cumulative grade awarded in the national HSC examination.",
  },
];
