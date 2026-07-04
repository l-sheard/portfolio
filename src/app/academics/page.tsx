import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ModuleCard } from "@/components/sections/ModuleCard";
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
        <div key={year.label} className="mb-12">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {year.label} <span className="font-normal text-muted">({year.period})</span>
            </h3>
            <p className="text-sm text-muted">
              Year average {year.average}%
              {year.contribution > 0 && ` · ${year.contribution}% of final degree`}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {year.modules.map((module) => (
              <ModuleCard key={module.code} module={module} />
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
}
