"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML5", level: 95, color: "from-orange-400 to-orange-600" },
      { name: "CSS3", level: 90, color: "from-blue-300 to-blue-500" },
      { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600" },
      { name: "Sass", level: 75, color: "from-pink-400 to-pink-600" },
      {
        name: "Material UI",
        level: 70,
        color: "from-indigo-400 to-indigo-600",
      },
      {
        name: "Framer Motion",
        level: 75,
        color: "from-purple-400 to-purple-600",
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 75, color: "from-gray-400 to-gray-600" },
      { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", level: 70, color: "from-blue-400 to-blue-600" },
      { name: "Firebase", level: 80, color: "from-yellow-400 to-orange-500" },
      { name: "Supabase", level: 75, color: "from-green-400 to-teal-500" },
      { name: "REST APIs", level: 85, color: "from-purple-400 to-purple-600" },
      { name: "GraphQL", level: 65, color: "from-pink-400 to-pink-600" },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "React Native", level: 85, color: "from-blue-400 to-cyan-400" },
      { name: "Flutter", level: 70, color: "from-blue-500 to-blue-700" },
      { name: "Expo", level: 80, color: "from-gray-400 to-gray-600" },
      {
        name: "iOS Development",
        level: 60,
        color: "from-gray-300 to-gray-500",
      },
      {
        name: "Android Development",
        level: 65,
        color: "from-green-400 to-green-600",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Vercel", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "Netlify", level: 80, color: "from-teal-400 to-teal-600" },
      { name: "AWS", level: 60, color: "from-orange-400 to-orange-600" },
      { name: "Docker", level: 65, color: "from-blue-400 to-blue-600" },
      { name: "Git", level: 90, color: "from-red-400 to-red-600" },
      { name: "GitHub Actions", level: 70, color: "from-gray-400 to-gray-600" },
    ],
  },
  {
    category: "Blockchain & Web3",
    skills: [
      { name: "Ethereum", level: 75, color: "from-gray-400 to-gray-600" },
      { name: "Solidity", level: 70, color: "from-blue-400 to-blue-600" },
      { name: "Web3.js", level: 65, color: "from-orange-400 to-orange-600" },
      { name: "MetaMask", level: 80, color: "from-orange-500 to-orange-700" },
      {
        name: "Smart Contracts",
        level: 70,
        color: "from-purple-400 to-purple-600",
      },
    ],
  },
  {
    category: "Design & Tools",
    skills: [
      { name: "Figma", level: 80, color: "from-purple-400 to-purple-600" },
      { name: "Adobe XD", level: 70, color: "from-pink-400 to-pink-600" },
      { name: "Photoshop", level: 65, color: "from-blue-400 to-blue-600" },
      { name: "Canva", level: 85, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Postman", level: 85, color: "from-orange-400 to-orange-600" },
      { name: "Chrome DevTools", level: 90, color: "from-red-400 to-red-600" },
      { name: "Webpack", level: 60, color: "from-blue-500 to-blue-700" },
      { name: "Vite", level: 75, color: "from-purple-400 to-purple-600" },
    ],
  },
];

const SkillsHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrollStates, setScrollStates] = useState<{
    [key: number]: { canScroll: boolean; isAtBottom: boolean };
  }>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with enhanced effects
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: -10,
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

      // Animate skill categories
      gsap.fromTo(
        ".skill-category",
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate individual skills (simplified to avoid scroll conflicts)
      gsap.fromTo(
        ".skill-item",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate floating skill badges
      gsap.fromTo(
        ".floating-badge",
        {
          y: 30,
          opacity: 0,
          scale: 0,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".floating-badges",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous floating animation
      gsap.to(".floating-badge", {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      // Spinning border animation
      gsap.to(".spin-border", {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Check if content is scrollable and update state
  const checkScrollability = (element: HTMLElement, cardIndex: number) => {
    if (!element) return;

    const canScroll = element.scrollHeight > element.clientHeight;
    const isAtBottom =
      element.scrollTop + element.clientHeight >= element.scrollHeight - 5; // 5px tolerance

    setScrollStates((prev) => ({
      ...prev,
      [cardIndex]: { canScroll, isAtBottom },
    }));
  };

  // Handle scroll events
  const handleScroll = (
    e: React.UIEvent<HTMLDivElement>,
    cardIndex: number
  ) => {
    checkScrollability(e.currentTarget, cardIndex);
  };

  // Initialize scroll state on mount
  useEffect(() => {
    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      skillsData.forEach((_, index) => {
        const container = document.querySelector(
          `.skills-scroll-container-${index}`
        ) as HTMLElement;
        if (container) {
          checkScrollability(container, index);
        }
      });
    }, 500); // Increased delay to ensure animations complete

    return () => clearTimeout(timer);
  }, []);

  // Re-check scroll state after animations complete
  useEffect(() => {
    const recheckTimer = setTimeout(() => {
      skillsData.forEach((_, index) => {
        const container = document.querySelector(
          `.skills-scroll-container-${index}`
        ) as HTMLElement;
        if (container) {
          checkScrollability(container, index);
        }
      });
    }, 2000); // Wait for all animations to complete

    return () => clearTimeout(recheckTimer);
  }, []);

  // Scroll card down when arrow is clicked
  const scrollCardDown = (cardIndex: number) => {
    const container = document.querySelector(
      `.skills-scroll-container-${cardIndex}`
    ) as HTMLElement;
    if (container) {
      container.scrollBy({
        top: 80, // Scroll down by 80px
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Global styles for hiding scrollbars */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        ref={sectionRef}
        className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] py-16 px-6 lg:px-20 text-white overflow-hidden relative"
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Title with enhanced animations */}
        <motion.h1
          ref={titleRef}
          className="lg:text-5xl text-3xl font-extrabold text-center mb-6 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A comprehensive overview of my technical expertise across{" "}
          <span className="text-purple-400 font-semibold">frontend</span>,{" "}
          <span className="text-blue-400 font-semibold">backend</span>,{" "}
          <span className="text-green-400 font-semibold">mobile</span>, and{" "}
          <span className="text-pink-400 font-semibold">blockchain</span>{" "}
          development.
        </motion.p>

        {/* Skills Container */}
        <div className="skills-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 items-start auto-rows-max">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category w-full max-w-full"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => {
                // Force recheck scroll state on hover
                setTimeout(() => {
                  const container = document.querySelector(
                    `.skills-scroll-container-${categoryIndex}`
                  ) as HTMLElement;
                  if (container) {
                    checkScrollability(container, categoryIndex);
                  }
                }, 100);
              }}
              style={{
                gridRowEnd: "span 1",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div className="relative w-full h-80 overflow-hidden">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl blur-xl" />

                {/* Main card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all duration-300 h-full flex flex-col w-full">
                  <h3 className="text-lg font-bold mb-4 text-center flex-shrink-0">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {category.category}
                    </span>
                  </h3>

                  <div
                    className="relative flex-1 min-h-0"
                    style={{ height: "calc(100% - 60px)" }}
                  >
                    <div
                      className={`skills-scroll-container-${categoryIndex} space-y-3 h-full overflow-y-scroll pr-2 scrollbar-hide`}
                      onScroll={(e) => handleScroll(e, categoryIndex)}
                      style={{
                        scrollbarWidth: "none" /* Firefox */,
                        msOverflowStyle: "none" /* IE and Edge */,
                        WebkitOverflowScrolling:
                          "touch" /* iOS smooth scrolling */,
                        maxHeight: "100%",
                        overflowY: "scroll",
                        height: "100%",
                      }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="skill-item"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white font-medium text-sm">
                              {skill.name}
                            </span>
                            <span className="text-gray-400 text-xs">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="relative">
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: skillIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Scroll indicator arrow */}
                    {scrollStates[categoryIndex]?.canScroll &&
                      !scrollStates[categoryIndex]?.isAtBottom && (
                        <motion.div
                          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.button
                            onClick={() => scrollCardDown(categoryIndex)}
                            className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-full p-1.5 shadow-lg hover:bg-gray-700/90 hover:border-gray-500 transition-all duration-200 cursor-pointer"
                            animate={{ y: [0, 3, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronDown className="w-3 h-3 text-gray-300" />
                          </motion.button>
                        </motion.div>
                      )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <div className="floating-badges flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {[
            "💻 Full Stack",
            "📱 Mobile First",
            "🔗 Blockchain",
            "🎨 UI/UX",
            "☁️ Cloud",
            "🚀 Performance",
            "🔒 Security",
            "📊 Analytics",
            "🎯 Problem Solver",
            "🌟 Innovation",
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="floating-badge relative group cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-1 group-hover:border-gray-600 transition-all duration-300">
                <span className="text-xs font-medium text-white">{badge}</span>

                {/* Spinning border */}
                <div
                  className="spin-border absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, transparent, rgba(168, 85, 247, 0.4), transparent, transparent)",
                    animation: "spin 3s linear infinite",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🎯</span>
              <span>50+ Technologies</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">⚡</span>
              <span>3+ Years Experience</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🚀</span>
              <span>Always Learning</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SkillsHome;
