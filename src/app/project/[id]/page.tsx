"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Pixpel from "@/../public/thumbnails/pixpel.png";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import SF_Business from "@/../public/thumbnails/sf-business-solutions.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import ScriptMatix from "@/../public/thumbnails/script-matix.png";
import TechNTech from "@/../public/thumbnails/tech-n-tech.png";
import PixpelApp from "@/../public/thumbnails/pxipel-app.jpeg";
import ADHD_Coach_App from "@/../public/thumbnails/adhd-coach-app.jpeg";
import { usePathname, useRouter } from "next/navigation";

const projects = [
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
  {
    id: "pixpel-app",
    banner: PixpelApp,
    title: "Pixpel.io - App",
    techStack: ["React Native", "Blockchain", "Web3"],
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
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

const Project = () => {
  const router = usePathname();
  const projectId = router.split("/").pop();

  const projectData = projects.find((project) => project.id === projectId);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#0e191e] py-10 px-8 lg:px-24 text-white">
      <div className="mb-10">
        <Slider {...settings}>
          {projectData.images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-auto"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </Slider>
      </div>
      <h1 className="lg:text-6xl text-3xl font-extrabold text-center mb-10">
        {projectData.title}
      </h1>
      <h2 className="text-2xl font-semibold mb-5">Tech Stack</h2>
      <ul className="list-disc list-inside mb-10">
        {projectData.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-5">Description</h2>
      <p className="mb-10">{projectData.description}</p>
      <h2 className="text-xl font-semibold mb-2">Project Duration</h2>
      <p className="mb-5">
        {projectData.startDate} - {projectData.endDate}
      </p>
      <h2 className="text-xl font-semibold mb-2">Organization</h2>
      <p className="mb-5">{projectData.organization}</p>
    </div>
  );
};

export default Project;
