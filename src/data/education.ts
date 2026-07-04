import type { EducationItem } from "@/types/content";

export const education: EducationItem[] = [
  {
    qualification: "MComp (Hons) Computer Science",
    institution: "University of Bath",
    location: "Bath, UK",
    startDate: "2022-09",
    endDate: "2026-07",
    details: [
      "First-Class Honours — grade average 80%, received Top Ten Student grade award",
      "Modules: Machine Learning (93%), Natural Language Processing (87%), Reinforcement Learning (85%)",
      "BSc Dissertation: Multi-Agent Reinforcement Learning (MARL) — 75%",
    ],
  },
  {
    qualification: "A-Levels and GCSEs",
    institution: "Highcliffe School and Sixth Form",
    location: "United Kingdom",
    startDate: "2015-09",
    endDate: "2022-06",
    details: ["A-Levels: A*A*A*A", "GCSEs: 9 x Grade 9, 1 x Grade 8"],
  },
];
