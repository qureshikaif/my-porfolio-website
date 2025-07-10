"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BUKC from "@/../public/bukc.png";
import Educators from "@/../public/educators.png";
import Fazaia from "@/../public/fazaia.png";

gsap.registerPlugin(ScrollTrigger);

const educations = [
  {
    title: "Bahria University, Karachi Campus",
    date: "September 2022 - Present",
    image: BUKC,
    position: "Bachelor of Science in Information Technology",
    color: "from-blue-500 to-indigo-600",
    points: [
      "Achieved a GPA of 3.7/4.0.",
      "Awarded Dean's List for academic excellence.",
      "Led a team to develop a blockchain-based project that won the university's innovation competition.",
      "Published a research paper on smart contracts in a peer-reviewed journal.",
    ],
  },
  {
    title: "Fazaia Degree College, Faisal",
    date: "2020 - 2022",
    image: Fazaia,
    position: "Intermediate in Computer Science",
    color: "from-green-500 to-emerald-600",
    points: [
      "Graduated with honors in Computer Science.",
      "Ranked top 5% in the class.",
      "Won the inter-college coding competition.",
      "Developed a mobile app as a final year project that received high praise from faculty.",
    ],
  },
  {
    title: "The Educators School",
    date: "2009 - 2020",
    image: Educators,
    position: "Matriculation in Computer Science",
    color: "from-purple-500 to-pink-600",
    points: [
      "Achieved highest marks in Computer Science in the final year.",
      "Received the Best Student Award for outstanding performance.",
      "Participated in and won several science fairs and IT competitions.",
      "Served as the president of the school's computer club.",
    ],
  },
];

const EducationHome = () => {
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

      // Animate education cards
      gsap.fromTo(
        ".education-card",
        {
          x: 100,
          opacity: 0,
          rotateY: 15,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".education-container",
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
      className="bg-[#0e191e] py-20 px-8 lg:px-24 text-white overflow-hidden"
    >
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-3xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Education
        </span>
      </motion.h1>

      <div className="education-container space-y-16 max-w-6xl mx-auto">
        {educations.map((education, index) => (
          <motion.div
            key={index}
            className="education-card group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${education.color} opacity-5 rounded-3xl blur-xl`}
              />

              {/* Card content */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Image */}
                  <div className="flex-shrink-0 order-2 lg:order-1">
                    <motion.div
                      className="relative w-32 h-32 lg:w-40 lg:h-40"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${education.color} rounded-full opacity-20 blur-xl`}
                      />
                      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-full p-4 border border-gray-700">
                        <Image
                          src={education.image}
                          alt={`${education.title} Logo`}
                          className="w-full h-full object-contain"
                          width={160}
                          height={160}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
                    <div className="space-y-4">
                      <motion.h2
                        className="text-2xl lg:text-3xl font-bold"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className={`bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}
                        >
                          {education.title}
                        </span>
                      </motion.h2>

                      <h3 className="text-lg text-gray-300 font-medium">
                        {education.position}
                      </h3>

                      <p className="text-gray-400 font-mono text-sm">
                        {education.date}
                      </p>

                      {/* Points with stagger animation */}
                      <motion.ul
                        className="space-y-3 text-gray-300 mt-6"
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
                        {education.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            className="flex items-start gap-3 group/item"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 },
                            }}
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${education.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                            />
                            <span className="text-sm leading-relaxed group-hover/item:text-white transition-colors duration-200">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default EducationHome;
