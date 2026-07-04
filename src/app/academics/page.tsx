import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AcademicYearCard } from "@/components/sections/AcademicYearCard";
import { academicYears, degreeSummary } from "@/data/academics";

export const metadata: Metadata = {
  title: "Academic Record",
  description: "Full module breakdown and results from my degree.",
};

export default function AcademicsPage() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="University of Bath"
        title="Academic Record"
        subtitle="A full breakdown of every module I took, grouped by year, plus overall results for the degree."
      />

      <Card className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm text-muted">Degree</p>
          <p className="mt-1 font-semibold">{degreeSummary.awardName}</p>
        </div>
        <div>
          <p className="text-sm text-muted">Programme</p>
          <p className="mt-1 font-semibold">{degreeSummary.programmeTitle}</p>
        </div>
        <div>
          <p className="text-sm text-muted">Classification</p>
          <p className="mt-1 font-semibold">{degreeSummary.degreeClass}</p>
        </div>
        <div>
          <p className="text-sm text-muted">Overall Average</p>
          <p className="mt-1 font-semibold text-accent">
            {Math.round(degreeSummary.overallAverage)}%
          </p>
        </div>
      </Card>

      {academicYears.map((year) => (
        <AcademicYearCard key={year.label} year={year} />
      ))}
    </Container>
  );
}
