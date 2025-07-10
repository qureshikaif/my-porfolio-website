"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Music, Coffee, Heart, MapPin, Zap, Brain, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const funFacts = [
  {
    icon: Music,
    title: "Music Addict 🎵",
    description:
      "Can't go a day without music! My code flows better with beats.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/20",
  },
  {
    icon: Coffee,
    title: "Code & Coffee ☕",
    description: "Fueled by caffeine and powered by passion for clean code.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/20",
  },
  {
    icon: Brain,
    title: "Problem Solver 🧠",
    description: "Love turning complex problems into elegant solutions.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/20",
  },
  {
    icon: Rocket,
    title: "Innovation Hunter 🚀",
    description: "Always exploring new technologies and pushing boundaries.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/20",
  },
];

const personalStats = [
  { label: "Years Coding", value: "3+", icon: "💻" },
  { label: "Projects Built", value: "20+", icon: "🚀" },
  { label: "Technologies Mastered", value: "15+", icon: "⚡" },
  { label: "Coffee Cups Daily", value: "4", icon: "☕" },
  { label: "Music Hours/Day", value: "8+", icon: "🎵" },
  { label: "GitHub Commits", value: "500+", icon: "📊" },
];

const AboutMeHome = () => {
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

      // Animate fun fact cards
      gsap.fromTo(
        ".fun-fact-card",
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
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".fun-facts-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate stats
      gsap.fromTo(
        ".stat-item",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0e191e] py-20 px-8 lg:px-24 text-white overflow-hidden relative"
    >
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-3xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          More About Me
        </span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Beyond the code, {`I'm`} a{" "}
        <span className="text-pink-400 font-semibold">music enthusiast</span>{" "}
        from{" "}
        <span className="text-green-400 font-semibold">Karachi, Pakistan</span>{" "}
        who believes that the best solutions come from{" "}
        <span className="text-cyan-400 font-semibold">creativity</span> and{" "}
        <span className="text-yellow-400 font-semibold">passion</span>! 🌟
      </motion.p>

      {/* Fun Facts Grid */}
      <div className="fun-facts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {funFacts.map((fact, index) => (
          <motion.div
            key={index}
            className="fun-fact-card group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${fact.color} opacity-5 rounded-2xl blur-xl`}
              />

              {/* Card content */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 text-center h-full">
                <div
                  className={`w-16 h-16 rounded-full ${fact.bgColor} flex items-center justify-center mx-auto mb-4 floating-icon`}
                >
                  <fact.icon className="size-8 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {fact.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {fact.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal Stats */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Quick Stats About Me
          </span>
        </h2>
        <p className="text-gray-400">Numbers that define my journey</p>
      </motion.div>

      <div className="stats-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {personalStats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item text-center group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Location & Contact Info */}
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
            <MapPin className="size-5 text-green-400" />
            <span>Karachi, Pakistan</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="size-5 text-red-400" />
            <span>Open to collaborations</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="size-5 text-yellow-400" />
            <span>Always learning</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
    </div>
  );
};

export default AboutMeHome;
