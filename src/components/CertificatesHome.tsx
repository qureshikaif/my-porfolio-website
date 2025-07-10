"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Calendar, ExternalLink, Verified } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "March 2024",
    credentialId: "AWS-CCP-2024-001",
    category: "Cloud Computing",
    color: "from-orange-500 to-yellow-500",
    level: "Foundational",
    skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
    description:
      "Validates overall understanding of the AWS Cloud and basic understanding of AWS services.",
    verified: true,
    link: "#",
  },
  {
    id: "react-advanced",
    title: "Advanced React Development",
    issuer: "Meta (Facebook)",
    issueDate: "January 2024",
    credentialId: "META-REACT-2024-007",
    category: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    level: "Advanced",
    skills: ["React", "Hooks", "Context API", "Performance Optimization"],
    description:
      "Advanced concepts in React including hooks, context, performance optimization, and testing.",
    verified: true,
    link: "#",
  },
  {
    id: "nodejs-certification",
    title: "Node.js Application Development",
    issuer: "OpenJS Foundation",
    issueDate: "November 2023",
    credentialId: "NODEJS-DEV-2023-156",
    category: "Backend Development",
    color: "from-green-500 to-emerald-500",
    level: "Professional",
    skills: ["Node.js", "Express", "REST APIs", "Database Integration"],
    description:
      "Comprehensive certification covering Node.js development, API creation, and database integration.",
    verified: true,
    link: "#",
  },
  {
    id: "blockchain-fundamentals",
    title: "Blockchain Fundamentals",
    issuer: "Ethereum Foundation",
    issueDate: "September 2023",
    credentialId: "ETH-FUND-2023-089",
    category: "Blockchain",
    color: "from-purple-500 to-pink-500",
    level: "Intermediate",
    skills: ["Blockchain", "Smart Contracts", "Solidity", "Web3"],
    description:
      "Understanding of blockchain technology, smart contracts, and decentralized application development.",
    verified: true,
    link: "#",
  },
  {
    id: "react-native-mobile",
    title: "React Native Mobile Development",
    issuer: "Expo",
    issueDate: "July 2023",
    credentialId: "EXPO-RN-2023-234",
    category: "Mobile Development",
    color: "from-indigo-500 to-purple-500",
    level: "Professional",
    skills: ["React Native", "Mobile UI", "Navigation", "Native APIs"],
    description:
      "Cross-platform mobile development using React Native and Expo framework.",
    verified: true,
    link: "#",
  },
  {
    id: "typescript-expert",
    title: "TypeScript Expert Certification",
    issuer: "Microsoft",
    issueDate: "May 2023",
    credentialId: "MS-TS-2023-445",
    category: "Programming Languages",
    color: "from-blue-600 to-indigo-600",
    level: "Expert",
    skills: ["TypeScript", "Type System", "Generic Types", "Advanced Patterns"],
    description:
      "Advanced TypeScript concepts including complex type definitions and design patterns.",
    verified: true,
    link: "#",
  },
];

const categories = [
  { name: "All", color: "from-gray-500 to-gray-700" },
  { name: "Cloud Computing", color: "from-orange-500 to-yellow-500" },
  { name: "Frontend Development", color: "from-blue-500 to-cyan-500" },
  { name: "Backend Development", color: "from-green-500 to-emerald-500" },
  { name: "Blockchain", color: "from-purple-500 to-pink-500" },
  { name: "Mobile Development", color: "from-indigo-500 to-purple-500" },
  { name: "Programming Languages", color: "from-blue-600 to-indigo-600" },
];

const CertificatesHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

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

      // Animate certificate cards
      gsap.fromTo(
        ".certificate-card",
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
            trigger: ".certificates-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate filter buttons
      gsap.fromTo(
        ".filter-button",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".filter-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Foundational":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Professional":
        return "text-blue-400";
      case "Advanced":
        return "text-purple-400";
      case "Expert":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Expert":
        return "⭐⭐⭐";
      case "Advanced":
        return "⭐⭐";
      case "Professional":
        return "⭐";
      default:
        return "📋";
    }
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#0e191e] py-20 px-8 lg:px-24 text-white overflow-hidden relative"
    >
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-3xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Certifications & Achievements
        </span>
      </motion.h1>

      {/* Category Filters */}
      <div className="filter-section flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <motion.button
            key={category.name}
            className={`filter-button px-6 py-3 rounded-full border transition-all duration-300 ${
              selectedCategory === category.name
                ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                : "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="certificates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredCertificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="certificate-card group"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-5 rounded-2xl blur-xl`}
              />

              {/* Certificate Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${certificate.color} bg-opacity-20`}
                    >
                      <Award className="size-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-medium ${getLevelColor(
                            certificate.level
                          )}`}
                        >
                          {certificate.level}
                        </span>
                        <span className="text-lg">
                          {getLevelIcon(certificate.level)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {certificate.category}
                      </span>
                    </div>
                  </div>

                  {certificate.verified && (
                    <motion.div
                      className="flex items-center gap-1 text-green-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Verified className="size-4" />
                      <span className="text-xs">Verified</span>
                    </motion.div>
                  )}
                </div>

                {/* Title and Issuer */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {certificate.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Skills Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Calendar className="size-3" />
                    <span>{certificate.issueDate}</span>
                  </div>

                  <motion.button
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${certificate.color} text-white text-xs font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="size-3" />
                    View Certificate
                  </motion.button>
                </div>

                {/* Credential ID */}
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <p className="text-xs text-gray-500">
                    ID: {certificate.credentialId}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>



      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default CertificatesHome;
