import type { AcademicYear, DegreeSummary } from "@/types/content";

export const degreeSummary: DegreeSummary = {
  awardName: "Master of Computing in Computer Science",
  programmeTitle: "MComp(Hons) Computer Science",
  institution: "University of Bath",
  degreeClass: "First-Class Honours",
  dateOfAward: "2026-07-01",
  overallAverage: 79.72,
};

export const academicYears: AcademicYear[] = [
  {
    label: "Year 1",
    stage: "Part 1, Stage 1",
    period: "2022/3",
    average: 84.25,
    contribution: 0,
    modules: [
      {
        code: "CM10194",
        name: "Computer Systems Architecture 1",
        credits: 6,
        mark: 93,
        components: [
          { label: "Coursework", weight: 30, mark: 99 },
          { label: "Examination", weight: 70, mark: 91 },
        ],
      },
      {
        code: "CM10195",
        name: "Computer Systems Architecture 2",
        credits: 6,
        mark: 71,
        components: [
          { label: "Coursework", weight: 30, mark: 60 },
          { label: "Exam", weight: 70, mark: 75 },
        ],
      },
      {
        code: "CM10227",
        name: "Principles of Programming 1",
        credits: 12,
        mark: 86,
        components: [{ label: "Coursework", weight: 100, mark: 86 }],
      },
      {
        code: "CM10228",
        name: "Principles of Programming 2",
        credits: 12,
        mark: 98,
        components: [{ label: "Coursework", weight: 100, mark: 98 }],
      },
      {
        code: "CM10311",
        name: "Discrete Mathematics and Databases",
        credits: 6,
        mark: 88,
        components: [
          { label: "Coursework", weight: 25, mark: 95 },
          { label: "Exam", weight: 75, mark: 85 },
        ],
      },
      {
        code: "CM10312",
        name: "Mathematics for Computation",
        credits: 3,
        mark: 86,
        components: [
          { label: "Coursework", weight: 25, mark: 94 },
          { label: "Exam", weight: 75, mark: 83 },
        ],
      },
      {
        code: "CM10313",
        name: "Software Processes and Modelling",
        credits: 3,
        mark: 67,
        components: [{ label: "Coursework", weight: 100, mark: 67 }],
      },
      {
        code: "CM10310",
        name: "Artificial Intelligence",
        credits: 12,
        mark: 73,
        components: [
          { label: "Coursework", weight: 70, mark: 74 },
          { label: "Exam", weight: 30, mark: 72 },
        ],
      },
    ],
  },
  {
    label: "Year 2",
    stage: "Part 2, Stage 2",
    period: "2023/4",
    average: 84.6,
    contribution: 16,
    modules: [
      {
        code: "CM20217",
        name: "Foundations of Computation",
        credits: 6,
        mark: 96,
        components: [
          { label: "Coursework", weight: 25, mark: 82 },
          { label: "Exam", weight: 75, mark: 100 },
        ],
      },
      {
        code: "CM20219",
        name: "Fundamentals of Visual Computing",
        credits: 6,
        mark: 91,
        components: [
          { label: "Coursework", weight: 30, mark: 100 },
          { label: "Examination", weight: 70, mark: 87 },
        ],
      },
      {
        code: "CM20254",
        name: "Data Structures and Algorithms",
        credits: 6,
        mark: 77,
        components: [
          { label: "Coursework", weight: 25, mark: 96 },
          { label: "Exam", weight: 75, mark: 70 },
        ],
      },
      {
        code: "CM20256",
        name: "Functional Programming",
        credits: 6,
        mark: 79,
        components: [
          { label: "Coursework", weight: 25, mark: 95 },
          { label: "Exam", weight: 75, mark: 73 },
        ],
      },
      {
        code: "CM20318",
        name: "Comparative Programming Languages",
        credits: 6,
        mark: 85,
        components: [{ label: "Exam", weight: 100, mark: 85 }],
      },
      {
        code: "CM20319",
        name: "Human-Computer Interaction and User Experience",
        credits: 6,
        mark: 86,
        components: [
          { label: "Coursework", weight: 40, mark: 77 },
          { label: "Exam", weight: 60, mark: 92 },
        ],
      },
      {
        code: "CM20314",
        name: "Experimental Systems Project",
        credits: 12,
        mark: 73,
        components: [{ label: "Coursework", weight: 100, mark: 73 }],
      },
      {
        code: "CM20315",
        name: "Machine Learning",
        credits: 12,
        mark: 93,
        components: [
          { label: "Coursework", weight: 30, mark: 89 },
          { label: "Exam S1", weight: 20, mark: 95 },
          { label: "Exam S2", weight: 50, mark: 94 },
        ],
      },
    ],
  },
  {
    label: "Year 3",
    stage: "Part 2, Stage 3",
    period: "2024/5",
    average: 77.5,
    contribution: 34,
    modules: [
      {
        code: "CM30072",
        name: "Safety-Critical Computer Systems",
        credits: 6,
        mark: 69,
        components: [{ label: "Examination", weight: 100, mark: 69 }],
      },
      {
        code: "CM30320",
        name: "Natural Language Processing",
        credits: 6,
        mark: 87,
        components: [
          { label: "Coursework", weight: 30, mark: 100 },
          { label: "Exam", weight: 70, mark: 82 },
        ],
      },
      {
        code: "CM30359",
        name: "Reinforcement Learning",
        credits: 6,
        mark: 85,
        components: [{ label: "Coursework", weight: 100, mark: 85 }],
      },
      {
        code: "CM30080",
        name: "Computer Vision",
        credits: 6,
        mark: 75,
        components: [
          { label: "Coursework", weight: 50, mark: 65 },
          { label: "Examination", weight: 50, mark: 84 },
        ],
      },
      {
        code: "CM30141",
        name: "Theory of Human Computer Interaction",
        credits: 6,
        mark: 82,
        components: [{ label: "Exam", weight: 100, mark: 82 }],
      },
      {
        code: "CM40179",
        name: "Entrepreneurship",
        credits: 6,
        mark: 77,
        components: [
          { label: "Coursework 1", weight: 50, mark: 76 },
          { label: "Coursework 2", weight: 50, mark: 77 },
        ],
      },
      {
        code: "CM30082",
        name: "Individual Project",
        credits: 24,
        mark: 75,
        components: [
          { label: "Dissertation", weight: 90, mark: 75 },
          { label: "Oral", weight: 10, mark: 73 },
        ],
      },
    ],
  },
  {
    label: "Year 4",
    stage: "Part 3, Stage 4",
    period: "2025/6",
    average: 79.67,
    contribution: 50,
    modules: [
      {
        code: "CM52018",
        name: "Research Project",
        credits: 40,
        mark: 80,
        components: [{ label: "Dissertation", weight: 100, mark: 80 }],
      },
      {
        code: "CM52034",
        name: "Advanced Computer Graphics",
        credits: 10,
        mark: 86,
        components: [
          { label: "Report", weight: 50, mark: 84 },
          { label: "Creation of Advanced Graphics Software", weight: 50, mark: 87 },
        ],
      },
      {
        code: "CM52044",
        name: "Reading Module in AI and ML",
        credits: 10,
        mark: 72,
        components: [
          { label: "Literature Review", weight: 70, mark: 68 },
          { label: "Research Seminar Presentation", weight: 30, mark: 80 },
        ],
      },
    ],
  },
];
