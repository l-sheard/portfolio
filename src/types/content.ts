export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  readingTime: string;
  content: string;
};

export type ProjectFrontmatter = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  date: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

export type ExperienceItem = {
  role: string;
  organisation: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  highlights: string[];
  tech?: string[];
};

export type EducationItem = {
  qualification: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  details?: string[];
};

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type AssessmentComponent = {
  label: string;
  weight: number;
  mark: number;
};

export type Module = {
  code: string;
  name: string;
  credits: number;
  mark: number | null;
  components?: AssessmentComponent[];
};

export type AcademicYear = {
  label: string;
  stage: string;
  period: string;
  average: number | null;
  contribution: number;
  modules: Module[];
};

export type DegreeSummary = {
  awardName: string;
  programmeTitle: string;
  institution: string;
  degreeClass: string;
  dateOfAward: string;
  overallAverage: number;
};
