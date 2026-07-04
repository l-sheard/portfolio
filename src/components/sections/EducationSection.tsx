import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { education } from "@/data/education";
import { formatDateRange } from "@/lib/date";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading eyebrow="Background" title="Education" />
        <Timeline>
          {education.map((item) => (
            <TimelineItem
              key={`${item.institution}-${item.startDate}`}
              title={item.qualification}
              subtitle={`${item.institution} · ${item.location}`}
              meta={formatDateRange(item.startDate, item.endDate)}
            >
              {item.details && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
}
