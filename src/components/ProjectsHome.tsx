import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Pixpel from "@/../public/thumbnails/pixpel.png";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import SF_Business from "@/../public/thumbnails/sf-business-solutions.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import ScriptMatix from "@/../public/thumbnails/script-matix.png";
import TechNTech from "@/../public/thumbnails/tech-n-tech.png";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const webprojects = [
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Summare_AI,
    title: "Summare-AI",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: SF_Business,
    title: "SF Business Solutions",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Nosh_NFT,
    title: "Nosh NFT",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: ScriptMatix,
    title: "ScriptMatix",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: TechNTech,
    title: "TechNTech",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
];

const mobileprojects = [
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Summare_AI,
    title: "ADHD Coach",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: SF_Business,
    title: "LeafLink",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
];

const ProjectsHome = () => {
  return (
    <div className="bg-[#0e191e] lg:pb-10 lg:pt-20 lg:px-24 px-4">
      <h1 className="lg:text-6xl text-3xl font-extrabold text-white text-center lg:py-10 lg:mb-20">
        Projects
      </h1>
      <h2 className="text-white text-xl my-3">Web Apps</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {webprojects.map((project, index) => (
          <div key={index} className="lg:max-w-[96%]">
            <BackgroundGradient className="bg-[#0e191e] rounded-[10px] text-white max-w-sm p-0 dark:bg-zinc-900">
              <Image
                src={project.banner}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain rounded-t-[10px]"
              />
              <div className="flex items-center space-x-2">
                <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 pl-5">
                  {project.title}
                </p>
                <Link href="https://pixpel.io">
                  <ExternalLink className="size-3 mt-2" />
                </Link>
              </div>

              <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5 pb-5">
                {project.description}
              </p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <h2 className="text-white text-xl mb-3 mt-36">Mobile Apps</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {mobileprojects.map((project, index) => (
          <div key={index} className="lg:max-w-[96%]">
            <BackgroundGradient className="bg-[#0e191e] rounded-[10px] text-white max-w-sm p-0 dark:bg-zinc-900">
              <Image
                src={project.banner}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain rounded-t-[10px]"
              />
              <div className="flex items-center space-x-2">
                <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 pl-5">
                  {project.title}
                </p>
                <Link href="https://pixpel.io">
                  <ExternalLink className="size-3 mt-2" />
                </Link>
              </div>

              <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5 pb-5">
                {project.description}
              </p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsHome;
