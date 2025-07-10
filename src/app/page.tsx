"use client";
import CertificatesHome from "@/components/CertificatesHome";
import EducationHome from "@/components/EducationHome";
import ExperienceHome from "@/components/ExperienceHome";
import HeroMain from "@/components/HeroMain";
import ProjectsHome from "@/components/ProjectsHome";
import SkillsHome from "@/components/SkillsHome";
import AboutMeHome from "@/components/AboutMeHome";
import GitHubStatsHome from "@/components/GitHubStatsHome";
import ContactHome from "@/components/ContactHome";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroMain />
      <AboutMeHome />
      <ProjectsHome />
      <ExperienceHome />
      <SkillsHome />
      <GitHubStatsHome />
      <EducationHome />
      <CertificatesHome />
      <ContactHome />
    </main>
  );
}
