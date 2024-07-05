import { HeroParallax } from "./ui/hero-parallax";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import SF_Business_Solutions from "@/../public/thumbnails/sf-business-solutions.png";
import Tech_N_Tech from "@/../public/thumbnails/tech-n-tech.png";
import Sudoku from "@/../public/thumbnails/sudoku.png";
import Pixpel from "@/../public/thumbnails/pixpel.png";
import Grand_Cercle from "@/../public/thumbnails/grand-cercle.png";
import Script_Matix from "@/../public/thumbnails/script-matix.png";
import Arbitrage from "@/../public/thumbnails/arbitrage.png";

export const projects = [
  {
    title: "Summare AI",
    link: "https://summare.ai",
    thumbnail: Summare_AI,
  },
  {
    title: "SF Business Solution",
    link: "https://sfbusinesssolutions.com",
    thumbnail: SF_Business_Solutions,
  },
  {
    title: "Nosh NFT",
    link: "https://noshnft.com",
    thumbnail: Nosh_NFT,
  },

  {
    title: "TechNTech",
    link: "https://techntech.netlify.app",
    thumbnail: Tech_N_Tech,
  },
  {
    title: "Sudoku Game",
    link: "https://sudoku842.netlify.app",
    thumbnail: Sudoku,
  },

  {
    title: "Pixpel.io",
    link: "https://home.pixpel.io",
    thumbnail: Pixpel,
  },
  {
    title: "GrandCercle",
    link: "https://grandcercle.asban.dev",
    thumbnail: Grand_Cercle,
  },

  {
    title: "ScriptMatix",
    link: "https://nft-marketplace-exl5.vercel.app",
    thumbnail: Script_Matix,
  },
  {
    title: "Arbitrage Trading Bot - Under Development",
    link: "https://arbitrage-one.vercel.app",
    thumbnail: Arbitrage,
  },
];

const HeroMain = () => {
  return <HeroParallax products={projects} />;
};

export default HeroMain;
