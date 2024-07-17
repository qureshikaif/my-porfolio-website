"use client";
import CertificatesHome from "@/components/CertificatesHome";
import EducationHome from "@/components/EducationHome";
import ExperienceHome from "@/components/ExperienceHome";
import HeroMain from "@/components/HeroMain";
import ProjectsHome from "@/components/ProjectsHome";
import SkillsHome from "@/components/SkillsHome";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroMain />
      <ProjectsHome />
      <ExperienceHome />
      <EducationHome />
      {/* <SkillsHome />
      <CertificatesHome /> */}
    </main>
  );
}
