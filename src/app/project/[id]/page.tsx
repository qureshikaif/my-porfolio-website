"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Building,
  Code,
  Lightbulb,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Pixpel from "@/../public/thumbnails/pixpel.png";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import SF_Business from "@/../public/thumbnails/sf-business-solutions.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import ScriptMatix from "@/../public/thumbnails/script-matix.png";
import TechNTech from "@/../public/thumbnails/tech-n-tech.png";
import PixpelApp from "@/../public/thumbnails/pxipel-app.jpeg";
import ADHD_Coach_App from "@/../public/thumbnails/adhd-coach-app.jpeg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "pixpel-web",
    banner: Pixpel,
    title: "Pixpel.io - Web Platform",
    type: "web",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Blockchain",
      "Solidity",
      "Web3.js",
      "PostgreSQL",
    ],
    description:
      "Pixpel.io is a cutting-edge Web3 gaming and cryptocurrency platform that revolutionizes the gaming experience by integrating blockchain technology. At Pixpel.io, players can immerse themselves in a variety of innovative games, earn rewards in cryptocurrency, and participate in a decentralized gaming ecosystem.",
    fullDescription:
      "Pixpel.io represents the next generation of gaming platforms, seamlessly blending traditional gaming mechanics with blockchain technology. The platform offers a comprehensive ecosystem where players can engage in various games, earn cryptocurrency rewards, and truly own their in-game assets through NFT integration. Our team developed a robust architecture that ensures secure transactions, scalable gameplay, and an intuitive user experience that appeals to both crypto enthusiasts and traditional gamers.",
    link: "https://home.pixpel.io",
    images: [Pixpel, Pixpel, Pixpel, Pixpel, Pixpel],
    startDate: "January 2023",
    endDate: "June 2023",
    organization: "Pixpel Inc.",
    color: "from-purple-500 to-pink-500",
    challenges: [
      "Integrating blockchain technology with traditional gaming mechanics",
      "Ensuring secure cryptocurrency transactions",
      "Creating an intuitive UX for both crypto and non-crypto users",
      "Implementing scalable NFT marketplace functionality",
    ],
    features: [
      "Multi-game platform with unified cryptocurrency rewards",
      "NFT marketplace for in-game assets",
      "Secure wallet integration",
      "Real-time leaderboards and tournaments",
      "Cross-platform compatibility",
    ],
  },
  {
    id: "summare-ai",
    banner: Summare_AI,
    title: "Summare AI - Article Summarizer",
    type: "web",
    techStack: ["Next.js", "React", "Next UI", "OpenAI API", "Tailwind CSS"],
    description:
      "SummareAI is an AI-powered web article summarizer that I had the opportunity to work on. The primary goal of this project was to transition the existing website from React to Next.js to enhance SEO performance.",
    fullDescription:
      "SummareAI transforms the way people consume online content by providing intelligent article summarization powered by advanced AI algorithms. The platform was rebuilt from the ground up using Next.js to improve SEO performance and user experience. Users can input any article URL and receive concise, accurate summaries that capture the essential points while maintaining context and readability.",
    link: "https://summare.ai",
    images: [Summare_AI, Summare_AI, Summare_AI, Summare_AI, Summare_AI],
    startDate: "February 2022",
    endDate: "August 2022",
    organization: "Summare AI",
    color: "from-blue-500 to-cyan-500",
    challenges: [
      "Migrating from React to Next.js while maintaining functionality",
      "Implementing AI-powered summarization algorithms",
      "Optimizing for SEO and performance",
      "Creating an intuitive interface for content consumption",
    ],
    features: [
      "AI-powered article summarization",
      "URL-based content extraction",
      "Multiple summary length options",
      "SEO-optimized architecture",
      "Responsive design for all devices",
    ],
  },
  {
    id: "sf-business",
    banner: SF_Business,
    title: "SF Business Solutions",
    type: "web",
    techStack: [
      "Next.js",
      "App Router",
      "Shadcn UI",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "SF Business Solutions is a website built with Next.js using App Router and Shadcn UI library for a business. The frontend is currently deployed on Vercel for development purposes.",
    fullDescription:
      "SF Business Solutions represents a modern approach to business website development, utilizing the latest Next.js App Router architecture for optimal performance and user experience. The project showcases advanced component design using Shadcn UI library, creating a professional and engaging online presence for business services.",
    link: "https://sfbusinesssolutions.com",
    images: [SF_Business, SF_Business, SF_Business, SF_Business, SF_Business],
    startDate: "March 2023",
    endDate: "Ongoing",
    organization: "SF Business Solutions",
    color: "from-green-500 to-emerald-500",
    challenges: [
      "Implementing Next.js App Router architecture",
      "Creating responsive business-focused design",
      "Integrating modern UI component library",
      "Optimizing for business conversion metrics",
    ],
    features: [
      "Modern Next.js App Router implementation",
      "Responsive business-focused design",
      "Shadcn UI component integration",
      "SEO optimization",
      "Performance-optimized architecture",
    ],
  },
  {
    id: "nosh-nft",
    banner: Nosh_NFT,
    title: "Nosh NFT Marketplace",
    type: "web",
    techStack: ["React", "Next.js", "Blockchain", "NFT", "Solidity", "Web3.js"],
    description:
      "NoshNFT is a cutting-edge NFT marketplace built with a modern tech stack to provide a seamless experience for buying and selling NFTs. The platform is designed with a focus on performance, scalability, and security.",
    fullDescription:
      "NoshNFT revolutionizes the digital asset marketplace by providing a comprehensive platform for NFT trading. Built with cutting-edge technology, the platform ensures secure transactions, efficient smart contract interactions, and an intuitive user experience that appeals to both seasoned collectors and newcomers to the NFT space.",
    link: "https://noshnft.com",
    images: [Nosh_NFT, Nosh_NFT, Nosh_NFT, Nosh_NFT, Nosh_NFT],
    startDate: "May 2021",
    endDate: "December 2021",
    organization: "Nosh Ltd.",
    color: "from-orange-500 to-red-500",
    challenges: [
      "Implementing secure blockchain transactions",
      "Creating efficient smart contract architecture",
      "Designing intuitive NFT browsing experience",
      "Ensuring scalability for high-volume trading",
    ],
    features: [
      "Comprehensive NFT marketplace",
      "Secure smart contract integration",
      "Advanced search and filtering",
      "Real-time price tracking",
      "Multi-wallet support",
    ],
  },
  {
    id: "script-matix",
    banner: ScriptMatix,
    title: "ScriptMatix - Film NFT Platform",
    type: "web",
    techStack: ["React", "Next.js", "Blockchain", "NFT", "Solidity", "IPFS"],
    description:
      "ScriptMatix is an advanced NFT marketplace, specifically designed for the trading of film and movie clip NFTs. The platform leverages a state-of-the-art tech stack to ensure a smooth and secure trading experience.",
    fullDescription:
      "ScriptMatix represents a specialized approach to NFT trading, focusing exclusively on film and movie clip NFTs. The platform bridges the gap between traditional entertainment industry and blockchain technology, providing creators and collectors with a dedicated space for cinematic digital assets.",
    link: "https://nft-marketplace-exl5.vercel.app",
    images: [ScriptMatix, ScriptMatix, ScriptMatix, ScriptMatix, ScriptMatix],
    startDate: "July 2021",
    endDate: "February 2022",
    organization: "ScriptMatix Inc.",
    color: "from-yellow-500 to-orange-500",
    challenges: [
      "Handling large video file NFTs",
      "Implementing IPFS for decentralized storage",
      "Creating film-specific metadata standards",
      "Ensuring copyright compliance",
    ],
    features: [
      "Film-specific NFT marketplace",
      "IPFS integration for media storage",
      "Advanced video preview system",
      "Creator verification system",
      "Royalty distribution mechanism",
    ],
  },
  {
    id: "tech-n-tech",
    banner: TechNTech,
    title: "TechNTech - Laptop E-commerce",
    type: "web",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "E-commerce",
      "Stripe",
      "PostgreSQL",
    ],
    description:
      "Techntech is a premier e-commerce platform dedicated to the buying and selling of laptops. The platform offers a vast selection of the latest laptops from top brands, catering to both individual consumers and businesses.",
    fullDescription:
      "TechNTech revolutionizes the laptop shopping experience by providing a comprehensive e-commerce platform that caters to both individual consumers and businesses. The platform features advanced search capabilities, detailed product comparisons, and secure payment processing to ensure a seamless shopping experience.",
    link: "https://techntech.netlify.app",
    images: [TechNTech, TechNTech, TechNTech, TechNTech, TechNTech],
    startDate: "April 2022",
    endDate: "October 2022",
    organization: "TechNTech Co.",
    color: "from-indigo-500 to-purple-500",
    challenges: [
      "Implementing advanced product filtering",
      "Creating detailed product comparison tools",
      "Integrating secure payment processing",
      "Ensuring mobile-responsive design",
    ],
    features: [
      "Advanced laptop search and filtering",
      "Detailed product comparisons",
      "Secure payment integration",
      "Business bulk ordering system",
      "Real-time inventory management",
    ],
  },
  {
    id: "pixpel-app",
    banner: PixpelApp,
    title: "Pixpel Mobile App",
    type: "mobile",
    techStack: ["React Native", "Blockchain", "Web3", "Redux", "Firebase"],
    description:
      "The Pixpel mobile app brings the full Web3 gaming experience to your fingertips. Built with React Native, it provides seamless access to blockchain-based games, cryptocurrency rewards, and decentralized gaming features.",
    fullDescription:
      "The Pixpel mobile app extends the Web3 gaming platform to mobile devices, ensuring players can access their favorite blockchain games anywhere, anytime. The app maintains all the security and functionality of the web platform while providing a native mobile experience optimized for touch interactions and mobile gaming.",
    link: "https://pixpel.io",
    images: [PixpelApp, PixpelApp, PixpelApp, PixpelApp, PixpelApp],
    startDate: "January 2024",
    endDate: "June 2024",
    organization: "Pixpel Inc.",
    color: "from-purple-500 to-pink-500",
    challenges: [
      "Implementing blockchain functionality on mobile",
      "Ensuring cross-platform compatibility",
      "Optimizing for mobile gaming performance",
      "Maintaining security across mobile platforms",
    ],
    features: [
      "Native mobile gaming experience",
      "Blockchain wallet integration",
      "Push notifications for game events",
      "Offline game caching",
      "Cross-platform synchronization",
    ],
  },
  {
    id: "adhd-coach-app",
    banner: ADHD_Coach_App,
    title: "ADHD Coach Mobile App",
    type: "mobile",
    techStack: ["React Native", "Node.js", "MongoDB", "Redux", "Firebase"],
    description:
      "ADHD Coach is a comprehensive mobile application designed to help individuals with ADHD manage their daily tasks, routines, and goals. The app features personalized coaching, habit tracking, and productivity tools.",
    fullDescription:
      "ADHD Coach represents a compassionate approach to ADHD management, providing individuals with the tools and support they need to thrive. The app combines evidence-based therapeutic techniques with modern technology to create a personalized coaching experience that adapts to each user's unique needs and challenges.",
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
    challenges: [
      "Creating accessible and inclusive UX design",
      "Implementing evidence-based therapeutic features",
      "Ensuring data privacy and security",
      "Developing adaptive coaching algorithms",
    ],
    features: [
      "Personalized coaching system",
      "Habit tracking and analytics",
      "Medication reminder system",
      "Goal setting and progress tracking",
      "Therapeutic exercise integration",
    ],
  },
];

const Project = () => {
  const router = useRouter();
  const pathname = usePathname();
  const projectId = pathname.split("/").pop();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectData = projects.find((project) => project.id === projectId);

  useEffect(() => {
    if (!projectData) return;

    const ctx = gsap.context(() => {
      // Animate hero section
      gsap.fromTo(
        ".hero-content",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      // Animate feature cards
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate tech stack items
      gsap.fromTo(
        ".tech-item",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".tech-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [projectData]);

  if (!projectData) {
    return (
      <div className="min-h-screen bg-[#0e191e] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#0e191e] text-white overflow-hidden"
    >
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${projectData.color} opacity-10`}
          />
          <div className="absolute inset-0 bg-[#0e191e]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-8 lg:px-24 py-20">
          {/* Back Button */}
          <motion.div
            className="hero-content mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Project Title */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${projectData.color}`}
                  />
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    {projectData.type === "mobile"
                      ? "Mobile Application"
                      : "Web Application"}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  <span
                    className={`bg-gradient-to-r ${projectData.color} bg-clip-text text-transparent`}
                  >
                    {projectData.title}
                  </span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {projectData.fullDescription}
                </p>
              </motion.div>

              {/* Project Meta */}
              <motion.div
                className="hero-content grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="size-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="font-medium">
                      {projectData.startDate} - {projectData.endDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="size-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Organization</p>
                    <p className="font-medium">{projectData.organization}</p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="hero-content flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href={projectData.link}
                  target="_blank"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${projectData.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  <ExternalLink className="size-4" />
                  {projectData.type === "mobile" ? "View Code" : "Visit Site"}
                </Link>
                <button className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                  View Images
                </button>
              </motion.div>
            </div>

            {/* Project Image */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${projectData.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                />
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                  <Image
                    src={projectData.banner}
                    alt={projectData.title}
                    width={projectData.type === "mobile" ? 300 : 600}
                    height={projectData.type === "mobile" ? 600 : 400}
                    className={`w-full rounded-xl ${
                      projectData.type === "mobile"
                        ? "aspect-[3/4] object-cover"
                        : "aspect-video object-cover"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-section px-8 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span
                className={`bg-gradient-to-r ${projectData.color} bg-clip-text text-transparent`}
              >
                Technology Stack
              </span>
            </h2>
            <p className="text-gray-400">
              Technologies and tools used in this project
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {projectData.techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center group-hover:border-gray-700 transition-all duration-300">
                  <Code className="size-6 mx-auto mb-2 text-gray-400 group-hover:text-white transition-colors" />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {tech}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section px-8 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span
                className={`bg-gradient-to-r ${projectData.color} bg-clip-text text-transparent`}
              >
                Key Features
              </span>
            </h2>
            <p className="text-gray-400">What makes this project special</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${projectData.color} mt-2 flex-shrink-0`}
                    />
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {feature}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="px-8 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span
                className={`bg-gradient-to-r ${projectData.color} bg-clip-text text-transparent`}
              >
                Challenges & Solutions
              </span>
            </h2>
            <p className="text-gray-400">
              Key challenges faced and how they were overcome
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projectData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="feature-card group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="size-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {challenge}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span
                className={`bg-gradient-to-r ${projectData.color} bg-clip-text text-transparent`}
              >
                Interested in this project?
              </span>
            </h2>
            <p className="text-gray-400 mb-8">
              Feel free to explore the live version or reach out for more
              details about the development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={projectData.link}
                target="_blank"
                className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${projectData.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
              >
                <ExternalLink className="size-5" />
                {projectData.type === "mobile"
                  ? "View Source Code"
                  : "Visit Live Site"}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="size-5" />
                Back to Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute top-20 right-20 w-64 h-64 bg-gradient-to-r ${projectData.color} opacity-5 rounded-full blur-3xl animate-pulse`}
      />
      <div
        className={`absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r ${projectData.color} opacity-5 rounded-full blur-3xl animate-pulse delay-1000`}
      />
    </div>
  );
};

export default Project;
