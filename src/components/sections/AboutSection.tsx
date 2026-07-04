import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <Container>
        <SectionHeading eyebrow="About" title="A bit about me" />
        <p className="max-w-2xl text-muted">{site.bio}</p>
      </Container>
    </section>
  );
}
