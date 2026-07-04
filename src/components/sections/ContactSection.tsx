import { Mail, MapPin, Trophy } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { site } from "@/data/site";

const links = [
  { href: `mailto:${site.email}`, label: site.email, icon: Mail },
  { href: site.social.github, label: "GitHub", icon: GithubIcon },
  { href: site.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.social.devpost, label: "DevPost", icon: Trophy },
];

export function ContactSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's talk"
          subtitle="I'm always happy to chat about software, opportunities, or interesting problems. The fastest way to reach me is email."
        />
        <Card className="max-w-md">
          <ul className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <Icon className="size-5 shrink-0" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 text-muted">
              <MapPin className="size-5 shrink-0" />
              <span>{site.location}</span>
            </li>
          </ul>
        </Card>
      </Container>
    </section>
  );
}
