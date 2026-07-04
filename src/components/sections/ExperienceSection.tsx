import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { experience } from "@/data/experience";
import { formatDateRange } from "@/lib/date";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading eyebrow="Career" title="Experience" />
        <Timeline>
          {experience.map((item) => (
            <TimelineItem
              key={`${item.organisation}-${item.startDate}`}
              title={`${item.role} · ${item.organisation}`}
              subtitle={item.location}
              meta={formatDateRange(item.startDate, item.endDate)}
            >
              <p className="mt-3 text-sm">{item.summary}</p>
              {item.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              {item.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
}
