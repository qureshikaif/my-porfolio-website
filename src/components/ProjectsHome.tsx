"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

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
    color: "from-purple-500 to-pink-500",
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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-yellow-500 to-orange-500",
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
    color: "from-indigo-500 to-purple-500",
  },
];

const mobileprojects = [
  {
    id: "pixpel-app",
    banner: PixpelApp,
    title: "Pixpel.io - App",
    techStack: ["React Native", "Blockchain", "Web3"],
    description:
      "The Pixpel mobile app brings the full Web3 gaming experience to your fingertips. Built with React Native, it provides seamless access to blockchain-based games, cryptocurrency rewards, and decentralized gaming features. The app maintains the same security and functionality as the web platform while offering a native mobile experience.",
    link: "https://pixpel.io",
    images: [PixpelApp, PixpelApp, PixpelApp, PixpelApp, PixpelApp],
    startDate: "January 2024",
    endDate: "June 2024",
    organization: "Pixpel Inc.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "adhd-coach-app",
    banner: ADHD_Coach_App,
    title: "ADHD Coach",
    techStack: ["React Native", "Node.js"],
    description:
      "ADHD Coach is a comprehensive mobile application designed to help individuals with ADHD manage their daily tasks, routines, and goals. The app features personalized coaching, habit tracking, medication reminders, and productivity tools. Built with React Native for cross-platform compatibility and a Node.js backend for robust data management.",
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
    color: "from-blue-500 to-cyan-500",
  },
];

const ProjectsHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate main title
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate section titles
      gsap.fromTo(
        ".section-title",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate project cards
      gsap.fromTo(
        ".project-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate mobile project cards
      gsap.fromTo(
        ".mobile-project-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".mobile-projects-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      data-section="projects"
      className="bg-[#0e191e] py-20 px-8 lg:px-24 text-white overflow-hidden relative"
    >
      {/* Main Title */}
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-3xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </motion.h1>

      {/* Web Apps Section */}
      <motion.h2
        className="section-title text-2xl lg:text-3xl font-bold mb-8 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          🌐 Web Applications
        </span>
      </motion.h2>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {webprojects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card group"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 rounded-2xl blur-xl`}
              />

              {/* Project Card */}
              <BackgroundGradient className="bg-[#0e191e] text-white p-0 dark:bg-zinc-900">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    height="300"
                    width="400"
                    className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/project/${project.id}`}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex-1 bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 text-center"
                    >
                      Visit Site
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Apps Section */}
      <motion.h2
        className="section-title text-2xl lg:text-3xl font-bold mb-8 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          📱 Mobile Applications
        </span>
      </motion.h2>

      <div className="mobile-projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mobileprojects.map((project, index) => (
          <motion.div
            key={project.id}
            className="mobile-project-card group"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 rounded-2xl blur-xl`}
              />

              {/* Mobile Project Card */}
              <BackgroundGradient className="bg-[#0e191e] rounded-2xl text-white max-w-sm p-0 dark:bg-zinc-900 overflow-hidden">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    height="400"
                    width="300"
                    className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300">
                        +{project.techStack.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/project/${project.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex-1 bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 text-center"
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
    </div>
  );
};

export default ProjectsHome;
