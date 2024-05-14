import EducationHome from "./EducationHome";
import ExperienceHome from "./ExperienceHome";
import SkillsHome from "./SkillsHome";
import { HeroParallax } from "./ui/hero-parallax";

export const projects = [
  {
    title: "Summare AI",
    link: "https://summare.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "SF Business Solution",
    link: "https://sf-business.vercel.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Nosh NFT",
    link: "https://noshnft.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "ScriptMatix",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "TechNTech",
    link: "https://techntech.netlify.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Sudoku Game",
    link: "https://sudoku842.netlify.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Pixpel.io",
    link: "https://pixpel.io",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Arbitrage Trading Bot - Under Development",
    link: "https://arbitrage-one.vercel.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "ADHD Coach",
    link: "https://tailwindmasterkit.com", // APK Link
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
];

const HeroMain = () => {
  return (
    <>
      <HeroParallax products={projects} />
      <ExperienceHome />
      <EducationHome />
      <SkillsHome />
    </>
  );
};

export default HeroMain;
