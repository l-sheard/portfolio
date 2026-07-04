import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="mb-4 text-sm font-medium tracking-wide text-accent uppercase">
          {site.role}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m {site.name}.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/contact">Get in touch</Button>
          <Button href={site.social.linkedin} variant="secondary">
            <LinkedinIcon className="size-4" />
            LinkedIn
          </Button>
        </div>
        <a
          href="#experience"
          className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4" />
          Scroll to learn more
        </a>
      </Container>
    </section>
  );
}
