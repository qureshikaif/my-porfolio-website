"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Star, GitFork, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const repositories = [
  {
    name: "SF Business Solutions",
    description: "A modern business solution platform with React and Node.js",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    color: "from-blue-500 to-purple-600",
    url: "https://github.com/qureshikaif/sf-business-solutions",
  },
  {
    name: "Arbitrage Trading Bot",
    description:
      "Automated crypto arbitrage trading bot with real-time analysis",
    language: "Python",
    stars: 8,
    forks: 2,
    color: "from-green-500 to-blue-600",
    url: "https://github.com/qureshikaif/arbitrage-trading-bot",
  },
  {
    name: "ADHD Coach App",
    description: "React Native app for ADHD coaching and task management",
    language: "React Native",
    stars: 15,
    forks: 4,
    color: "from-pink-500 to-rose-600",
    url: "https://github.com/qureshikaif/adhd-coach-app",
  },
  {
    name: "Nosh NFT Marketplace",
    description: "Decentralized NFT marketplace built on Ethereum",
    language: "Solidity",
    stars: 20,
    forks: 7,
    color: "from-orange-500 to-red-600",
    url: "https://github.com/qureshikaif/nosh-nft-marketplace",
  },
  {
    name: "Sudoku Solver",
    description: "AI-powered Sudoku solver using backtracking algorithm",
    language: "JavaScript",
    stars: 6,
    forks: 1,
    color: "from-yellow-500 to-orange-600",
    url: "https://github.com/qureshikaif/sudoku-solver",
  },
  {
    name: "Pixpel Design Studio",
    description: "Creative agency website with modern animations",
    language: "Next.js",
    stars: 10,
    forks: 2,
    color: "from-purple-500 to-indigo-600",
    url: "https://github.com/qureshikaif/pixpel-design-studio",
  },
];

const languageStats = [
  {
    name: "JavaScript",
    percentage: 35,
    color: "from-yellow-400 to-yellow-600",
  },
  { name: "TypeScript", percentage: 30, color: "from-blue-500 to-blue-700" },
  { name: "Python", percentage: 15, color: "from-green-500 to-green-700" },
  { name: "Solidity", percentage: 10, color: "from-purple-500 to-purple-700" },
  { name: "CSS", percentage: 10, color: "from-pink-500 to-pink-700" },
];

const GitHubStatsHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: 5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate GitHub stats
      gsap.fromTo(
        ".github-stat",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".github-stats",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate repository cards
      gsap.fromTo(
        ".repo-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".repositories-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate language stats containers
      gsap.fromTo(
        ".language-item",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".language-stats",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for GitHub logo
      gsap.to(".github-logo", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] py-20 px-8 lg:px-24 text-white overflow-hidden relative"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Title */}
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-4xl font-extrabold text-center mb-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          GitHub Portfolio
        </span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Showcasing my open-source contributions and coding journey on{" "}
        <span className="text-green-400 font-semibold">GitHub</span>. Each
        repository tells a story of{" "}
        <span className="text-blue-400 font-semibold">innovation</span> and{" "}
        <span className="text-purple-400 font-semibold">
          continuous learning
        </span>
        .
      </motion.p>

      {/* GitHub Stats */}
      <div className="github-stats flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
        <motion.div
          className="github-stat text-center group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <Github className="github-logo w-16 h-16 mx-auto mb-4 text-green-400" />
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-400">Repositories</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="github-stat text-center group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-gray-400">Followers</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="github-stat text-center group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <Star className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl font-bold text-white mb-2">71</div>
              <div className="text-gray-400">Total Stars</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Repositories */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Repositories
          </span>
        </h2>
        <p className="text-gray-400">
          A collection of my most impactful projects
        </p>
      </motion.div>

      <div className="repositories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {repositories.map((repo, index) => (
          <motion.div
            key={index}
            className="repo-card group cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open(repo.url, "_blank")}
          >
            <div className="relative h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${repo.color} opacity-5 rounded-2xl blur-xl group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Github className="w-8 h-8 text-green-400" />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>{repo.stars}</span>
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {repo.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow group-hover:text-gray-300 transition-colors">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${repo.color} text-white font-medium`}
                  >
                    {repo.language}
                  </span>
                  <span className="text-xs text-gray-500">Click to view</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Language Statistics */}
      <motion.div
        className="language-stats text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Language Distribution
          </span>
        </h2>

        <div className="space-y-6">
          {languageStats.map((lang, index) => (
            <motion.div
              key={index}
              className="language-item flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 text-right font-medium text-gray-300">
                {lang.name}
              </div>
              <div className="flex-1 relative">
                <div className="h-6 bg-gray-800/60 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full relative overflow-hidden`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: `${lang.percentage}%`, opacity: 1 }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth easing
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Animated shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear",
                      }}
                    />

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                  </motion.div>
                </div>

                {/* Progress indicator line */}
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white/60 rounded-full"
                  initial={{ left: 0, opacity: 0 }}
                  whileInView={{ left: `${lang.percentage}%`, opacity: 1 }}
                  transition={{
                    duration: 1.8,
                    delay: index * 0.15 + 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true }}
                />
              </div>
              <motion.div
                className="w-12 text-left font-bold text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 1.5,
                }}
                viewport={{ once: true }}
              >
                {lang.percentage}%
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/qureshikaif"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 cursor-pointer transform-gpu"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

          {/* Button content */}
          <div className="relative flex items-center gap-3 z-10">
            <Github className="w-6 h-6" />
            <span>View Full GitHub Profile</span>

            {/* Arrow indicator */}
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-2xl transition-all duration-300" />
        </motion.a>

        <motion.p
          className="text-gray-400 text-sm mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          🚀 Explore my repositories, contributions, and coding journey
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GitHubStatsHome;
