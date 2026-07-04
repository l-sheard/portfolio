import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { HackathonsSection } from "@/components/sections/HackathonsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <HackathonsSection />
      <AwardsSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
