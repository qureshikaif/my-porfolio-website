"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cubicus from "@/../public/cubicus.svg";
import CodingIcon from "@/../public/Coding.png";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Cubicus.io",
    date: "July 2023 - July 2024",
    position: "Junior Full Stack Developer",
    image: Cubicus,
    color: "from-purple-500 to-pink-500",
    points: [
      "Developed beautiful front-end interfaces using React.js and Next.js.",
      "Leveraged Next.js for improved SEO performance.",
      "Built scalable back-end systems using Node.js and Express server.",
      "Successfully deployed applications on AWS EC2.",
      "Managed Postgres databases, deploying on various platforms including Neon DB and AWS RDS.",
      "Worked on blockchain technology, specifically Solidity smart contracts for ERC721 tokens.",
      "Currently developing a React Native application for both Android and iOS.",
      "Applied SSL certification on a backend Node server on an EC2 instance using Caddy and nip.io.",
    ],
  },
  {
    title: "Freelancing",
    date: "March 2023 - Present",
    position: "Freelancer",
    image: CodingIcon,
    color: "from-blue-500 to-cyan-500",
    points: [
      "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor.",
      "Ensured responsive design for optimal viewing across multiple devices.",
      "Utilized Webflow's rich visual interface to create complex animations and interactions.",
      "Implemented triggers and animations to enhance user experience and engagement.",
      "Used timed animations to control the sequence and timing of animations.",
      "Worked with multi-step animations to create complex, layered effects.",
    ],
  },
];

const ExperienceHome = () => {
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

      // Animate experience cards
      gsap.fromTo(
        ".experience-card",
        {
          x: -100,
          opacity: 0,
          rotateY: -15,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".experience-container",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for images
      gsap.to(".floating-image", {
        y: -20,
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
      className="bg-[#0e191e] py-20 px-8 lg:px-24 text-white overflow-hidden"
    >
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-3xl font-extrabold text-center mt-20 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h1>

      <div className="experience-container space-y-20">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-5 rounded-3xl blur-xl`}
              />

              {/* Card content */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <motion.h2
                        className="lg:text-4xl text-2xl font-bold"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className={`bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}
                        >
                          {experience.title}
                        </span>
                      </motion.h2>
                      <h3 className="text-xl text-gray-300 font-medium">
                        {experience.position}
                      </h3>
                      <p className="text-gray-400 font-mono text-sm">
                        {experience.date}
                      </p>
                    </div>

                    {/* Points with stagger animation */}
                    <motion.ul
                      className="space-y-4 text-gray-300"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {experience.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className="flex items-start gap-3 group/item"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                          />
                          <span className="text-sm leading-relaxed group-hover/item:text-white transition-colors duration-200">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="relative w-48 h-48 lg:w-64 lg:h-64"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-full opacity-20 blur-2xl`}
                      />
                      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-full p-8 border border-gray-700">
                        <Image
                          src={experience.image}
                          alt={`${experience.title} Logo`}
                          className="w-full h-full object-contain floating-image"
                          width={200}
                          height={200}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
    </div>
  );
};

export default ExperienceHome;
