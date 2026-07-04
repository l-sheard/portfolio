import { Trophy } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { hackathons } from "@/data/hackathons";
import { formatMonthYear } from "@/lib/date";

export function HackathonsSection() {
  return (
    <section id="hackathons" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading eyebrow="Competitions" title="Hackathon Wins" />
        <div className="grid gap-4 sm:grid-cols-2">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.title} className="flex gap-4">
              <Trophy className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">{hackathon.title}</h3>
                  <span className="text-sm text-muted">{formatMonthYear(hackathon.date)}</span>
                </div>
                <p className="text-sm text-muted">{hackathon.issuer}</p>
                {hackathon.description && <p className="mt-2 text-sm">{hackathon.description}</p>}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
