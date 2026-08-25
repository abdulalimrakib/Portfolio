import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { ResearchSection } from "@/components/research-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <ResearchSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
