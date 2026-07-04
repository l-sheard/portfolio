"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ModuleCard } from "@/components/sections/ModuleCard";
import type { AcademicYear } from "@/types/content";

export function AcademicYearCard({ year }: { year: AcademicYear }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full flex-wrap items-center justify-between gap-2 text-left"
      >
        <h3 className="text-lg font-semibold tracking-tight">
          {year.label} <span className="font-normal text-muted">- {year.period}</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-lg font-bold text-accent">{year.average}%</p>
            {year.contribution > 0 && (
              <p className="text-xs text-muted">{year.contribution}% of final degree</p>
            )}
          </div>
          <ChevronDown
            className={`size-5 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {year.modules.map((module) => (
            <ModuleCard key={module.code} module={module} />
          ))}
        </div>
      )}
    </Card>
  );
}
