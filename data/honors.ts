export interface Honor {
  title: string;
  issuer: string;
  period: string;
  detail: string;
}

export const honors: Honor[] = [
  {
    title: "Best Member Award",
    issuer: "NSU ACM Student Chapter",
    period: "2025",
    detail:
      "Recognized for outstanding contribution to chapter activities, peer mentorship, and technical leadership.",
  },
  {
    title: "Merit-Based Tuition Scholarship (25%)",
    issuer: "North South University",
    period: "2022 – 2025",
    detail:
      "Awarded throughout undergraduate study on the basis of sustained academic performance.",
  },
  {
    title: "GPA 5.00 / 5.00, HSC Examination",
    issuer: "Notre Dame College, Mymensingh",
    period: "Jan 2021",
    detail:
      "Achieved the maximum cumulative grade in the national Higher Secondary Certificate examination.",
  },
];
