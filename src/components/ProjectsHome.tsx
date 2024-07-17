"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Pixpel from "@/../public/thumbnails/pixpel.png";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import SF_Business from "@/../public/thumbnails/sf-business-solutions.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import ScriptMatix from "@/../public/thumbnails/script-matix.png";
import TechNTech from "@/../public/thumbnails/tech-n-tech.png";
import PixpelApp from "@/../public/thumbnails/pxipel-app.jpeg";
import ADHD_Coach_App from "@/../public/thumbnails/adhd-coach-app.jpeg";
import Link from "next/link";

const webprojects = [
  {
    id: "pixpel-web",
    banner: Pixpel,
    title: "Pixpel.io - Web",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Blockchain"],
    description:
      "Pixpel.io is a cutting-edge Web3 gaming and cryptocurrency platform that revolutionizes the gaming experience by integrating blockchain technology. At Pixpel.io, players can immerse themselves in a variety of innovative games, earn rewards in cryptocurrency, and participate in a decentralized gaming ecosystem. The platform offers seamless, secure transactions and empowers gamers with true ownership of in-game assets. Join Pixpel.io today to explore the future of gaming and cryptocurrency, where entertainment and digital finance converge.",
    link: "https://home.pixpel.io",
    images: [Pixpel, Pixpel, Pixpel, Pixpel, Pixpel],
    startDate: "January 2023",
    endDate: "June 2023",
    organization: "Pixpel Inc.",
  },
  {
    id: "summare-ai",
    banner: Summare_AI,
    title: "Summare-AI",
    techStack: ["Next.js", "React", "Next UI"],
    description:
      "SummareAI is an AI-powered web article summarizer that I had the opportunity to work on. The primary goal of this project was to transition the existing website from React to Next.js to enhance SEO performance. I was responsible for rebuilding the website from scratch using Next.js and the Next UI library.",
    link: "https://summare.ai",
    images: [Summare_AI, Summare_AI, Summare_AI, Summare_AI, Summare_AI],
    startDate: "February 2022",
    endDate: "August 2022",
    organization: "Summare AI",
  },
  {
    id: "sf-business",
    banner: SF_Business,
    title: "SF Business Solutions",
    techStack: ["Next.js", "App Router", "Shadcn UI"],
    description:
      "SF Business Solutions is a website built with Next.js using App Router and Shadcn UI library for a business. The frontend is currently deployed on Vercel for development purposes. This website is currently under development.",
    link: "https://sfbusinesssolutions.com",
    images: [SF_Business, SF_Business, SF_Business, SF_Business, SF_Business],
    startDate: "March 2023",
    endDate: "Ongoing",
    organization: "SF Business Solutions",
  },
  {
    id: "nosh-nft",
    banner: Nosh_NFT,
    title: "Nosh NFT",
    techStack: ["React", "Next.js", "Blockchain", "NFT"],
    description:
      "NoshNFT is a cutting-edge NFT marketplace built with a modern tech stack to provide a seamless experience for buying and selling NFTs The platform is designed with a focus on performance, scalability, and security.",
    link: "https://noshnft.com",
    images: [Nosh_NFT, Nosh_NFT, Nosh_NFT, Nosh_NFT, Nosh_NFT],
    startDate: "May 2021",
    endDate: "December 2021",
    organization: "Nosh Ltd.",
  },
  {
    id: "script-matix",
    banner: ScriptMatix,
    title: "ScriptMatix",
    techStack: ["React", "Next.js", "Blockchain", "NFT"],
    description:
      "ScriptMatix is an advanced NFT marketplace, specifically designed for the trading of film and movie clip NFTs The platform leverages a state-of-the-art tech stack to ensure a smooth and secure trading experience, with a strong emphasis on performance, scalability, and security.",
    link: "https://nft-marketplace-exl5.vercel.app",
    images: [ScriptMatix, ScriptMatix, ScriptMatix, ScriptMatix, ScriptMatix],
    startDate: "July 2021",
    endDate: "February 2022",
    organization: "ScriptMatix Inc.",
  },
  {
    id: "tech-n-tech",
    banner: TechNTech,
    title: "TechNTech",
    techStack: ["React", "Next.js", "Node.js", "E-commerce"],
    description:
      "Techntech is a premier e-commerce platform dedicated to the buying and selling of laptops. Techntech offers a vast selection of the latest laptops from top brands, catering to both individual consumers and businesses. A user-friendly interface, competitive pricing, and comprehensive product information make it easy for customers to find the perfect laptop to meet their needs.",
    link: "https://techntech.netlify.app",
    images: [TechNTech, TechNTech, TechNTech, TechNTech, TechNTech],
    startDate: "April 2022",
    endDate: "October 2022",
    organization: "TechNTech Co.",
  },
];

const mobileprojects = [
  {
    id: "pixpel-app",
    banner: PixpelApp,
    title: "Pixpel.io - App",
    techStack: ["React Native", "Blockchain", "Web3"],
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    link: "https://pixpel.io",
    images: [PixpelApp, PixpelApp, PixpelApp, PixpelApp, PixpelApp],
    startDate: "January 2024",
    endDate: "June 2024",
    organization: "Pixpel Inc.",
  },
  {
    id: "adhd-coach-app",
    banner: ADHD_Coach_App,
    title: "ADHD Coach",
    techStack: ["React Native", "Node.js"],
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    link: "https://github.com/qureshikaif/adhd-coach-native",
    images: [
      ADHD_Coach_App,
      ADHD_Coach_App,
      ADHD_Coach_App,
      ADHD_Coach_App,
      ADHD_Coach_App,
    ],
    startDate: "February 2023",
    endDate: "August 2023",
    organization: "ADHD Coach Inc.",
  },
];

const ProjectsHome = () => {
  return (
    <div className="bg-[#0e191e] lg:pb-10 lg:pt-20 lg:px-24 px-4">
      <h1 className="lg:text-6xl text-3xl font-extrabold text-white text-center py-4 lg:py-10 lg:mb-20">
        Projects
      </h1>
      <h2 className="text-white text-xl my-3">Web Apps</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 gap-10">
        {webprojects.map((project, index) => (
          <div
            // href={`/project/${project.id}`}
            key={index}
            className="lg:max-w-[95%]"
          >
            <BackgroundGradient className="bg-[#0e191e]  rounded-[10px] text-white max-w-sm p-0 dark:bg-zinc-900">
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
                {/* <Link href={project.link}>
                  <ExternalLink className="size-3 mt-2" />
                </Link> */}
              </div>

              <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5 line-clamp-5">
                {project.description}
              </p>
              <div className="pb-6 flex space-x-2 mt-4 ml-5">
                <Link
                  href={`/project/${project.id}`}
                  className="flex items-center justify-center bg-[#2b2c2c] text-white text-xs font-semibold px-4 rounded-[10px] border border-white"
                >
                  Learn more
                </Link>
                <Link
                  href={`${project.link}`}
                  className="bg-[#0e191e] text-white text-xs font-semibold py-2 px-4 rounded-[10px] border border-white"
                >
                  Visit
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <h2 className="text-white text-xl mb-3 mt-36">Mobile Apps</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 gap-10">
        {mobileprojects.map((project, index) => (
          <div key={index} className="lg:max-w-[95%]">
            <BackgroundGradient className="bg-[#0e191e] rounded-[10px] text-white max-w-sm p-0 dark:bg-zinc-900">
              <Image
                src={project.banner}
                alt="jordans"
                height="400"
                width="400"
                className="object-top object-cover rounded-t-[10px] h-60"
              />
              <div className="flex items-center space-x-2">
                <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 pl-5">
                  {project.title}
                </p>
                {/* <Link href="https://pixpel.io">
                  <ExternalLink className="size-3 mt-2" />
                </Link> */}
              </div>

              <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5">
                {project.description}
              </p>
              <div className="pb-6 flex space-x-2 mt-4 ml-5">
                <Link
                  href={`/project/${project.id}`}
                  className="flex items-center justify-center bg-[#2b2c2c] text-white text-xs font-semibold px-4 rounded-[10px] border border-white"
                >
                  Learn more
                </Link>
                <Link
                  href={`${project.link}`}
                  className="bg-[#0e191e] text-white text-xs font-semibold py-2 px-4 rounded-[10px] border border-white"
                >
                  Visit
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsHome;
