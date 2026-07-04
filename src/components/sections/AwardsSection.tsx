import { Award as AwardIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { awards } from "@/data/awards";
import { formatMonthYear } from "@/lib/date";

export function AwardsSection() {
  return (
    <section id="awards" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading eyebrow="Recognition" title="Awards" />
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((award) => (
            <Card key={award.title} className="flex gap-4">
              <AwardIcon className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">{award.title}</h3>
                  <span className="text-sm text-muted">{formatMonthYear(award.date)}</span>
                </div>
                <p className="text-sm text-muted">{award.issuer}</p>
                {award.description && <p className="mt-2 text-sm">{award.description}</p>}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
