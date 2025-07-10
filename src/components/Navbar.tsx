"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu as MenuIcon,
  X,
  Home,
  Briefcase,
  FileText,
} from "lucide-react";
import SF_Business_Solutions from "@/../public/thumbnails/sf-business-solutions.png";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import Tech_N_Tech from "@/../public/thumbnails/tech-n-tech.png";

const projects = [
  {
    title: "SF Business Solutions",
    href: "https://sfbusinesssolutions.com",
    src: SF_Business_Solutions,
    description: "Modern business solution platform with Next.js and Shadcn UI",
    tech: ["Next.js", "TypeScript", "Shadcn UI"],
  },
  {
    title: "Summare AI",
    href: "https://www.summare.ai",
    src: Summare_AI,
    description:
      "AI-powered web article summarizer with enhanced SEO performance",
    tech: ["Next.js", "AI", "Next UI"],
  },
  {
    title: "Nosh NFT",
    href: "https://noshnft.com",
    src: Nosh_NFT,
    description: "Cutting-edge NFT marketplace with modern tech stack",
    tech: ["React", "Blockchain", "Web3"],
  },
  {
    title: "TechNTech",
    href: "https://techntech.netlify.app",
    src: Tech_N_Tech,
    description: "Premier e-commerce platform for laptop buying and selling",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/qureshikaif",
    icon: Github,
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kaif-qureshi-087ab6259",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    url: "mailto:qureshikaif@gmail.com",
    icon: Mail,
    color: "hover:text-red-400",
  },
];

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Resume", href: "/resume", icon: FileText },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background change
      setScrolled(currentScrollY > 50);

      // Close mobile menu when scrolling
      if (isMobileMenuOpen && currentScrollY > lastScrollY) {
        setIsMobileMenuOpen(false);
      }

      // Hide/show navbar based on scroll direction (but not when mobile menu is open)
      if (!isMobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
          // Scrolling up or at the top
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div
        className={`fixed top-4 left-0 right-0 z-[9999] flex justify-center transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
        }`}
      >
        <motion.nav
          className={`transition-all duration-500 max-w-6xl w-[95%] ${
            scrolled
              ? "bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl"
              : "bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
          } rounded-2xl`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-sm group-hover:bg-white/20 transition-all duration-300" />
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/30 transition-all duration-300">
                    <Image
                      src="/my-image.png"
                      alt="Muhammad Kaif Qureshi"
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold text-white/95 group-hover:text-white transition-colors">
                    MKQ
                  </h1>
                  <p className="text-xs text-white/60 -mt-1">
                    Full Stack Developer
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group relative py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{item.name}</span>
                    <div className="absolute bottom-0 -left-2 w-0 h-0.5 bg-gradient-to-r from-white/80 to-white/60 group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                ))}

                {/* Projects Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsProjectsOpen(true)}
                  onMouseLeave={() => setIsProjectsOpen(false)}
                >
                  <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group relative py-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium text-sm">Projects</span>
                    <motion.div
                      animate={{ rotate: isProjectsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                    <div className="absolute bottom-0 -left-2 w-0 h-0.5 bg-gradient-to-r from-white/80 to-white/60 group-hover:w-full transition-all duration-300 ease-out" />
                  </button>

                  <AnimatePresence>
                    {isProjectsOpen && (
                      <motion.div
                        className="absolute top-full right-0 mt-3 w-[500px] max-w-[85vw]"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="bg-black/70 backdrop-blur-2xl border border-white/30 rounded-2xl p-4 shadow-2xl">
                          <div className="grid grid-cols-1 gap-3">
                            {projects.map((project, index) => (
                              <motion.a
                                key={project.title}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300">
                                  <div className="relative p-3">
                                    <div className="flex items-start space-x-3">
                                      <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/20 group-hover:border-white/30 transition-colors flex-shrink-0">
                                        <Image
                                          src={project.src}
                                          alt={project.title}
                                          width={40}
                                          height={40}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>

                                      <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-white/95 group-hover:text-white transition-colors text-sm">
                                          {project.title}
                                        </h3>
                                        <p className="text-xs text-white/60 mt-1 line-clamp-2">
                                          {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 mt-2">
                                          {project.tech
                                            .slice(0, 3)
                                            .map((tech) => (
                                              <span
                                                key={tech}
                                                className="text-xs px-2 py-1 bg-white/20 text-white/80 rounded-full backdrop-blur-sm"
                                              >
                                                {tech}
                                              </span>
                                            ))}
                                        </div>
                                      </div>

                                      <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white/80 transition-colors flex-shrink-0" />
                                    </div>
                                  </div>
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Social Links & Mobile Menu Button */}
              <div className="flex items-center space-x-3">
                {/* Desktop Social Links */}
                <div className="hidden lg:flex items-center space-x-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-9 h-9 rounded-lg bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MenuIcon className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden bg-black/40 backdrop-blur-xl border-t border-white/20 rounded-b-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-6 space-y-6">
                  {/* Mobile Navigation Items */}
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors group py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium text-base">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Mobile Projects */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 text-white/70 py-2 mb-4">
                        <Briefcase className="w-5 h-5" />
                        <span className="font-medium text-base">Projects</span>
                      </div>
                      <div className="ml-8 space-y-3">
                        {projects.slice(0, 4).map((project, index) => (
                          <motion.a
                            key={project.title}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all duration-300">
                              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20">
                                <Image
                                  src={project.src}
                                  alt={project.title}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-white/90 group-hover:text-white transition-colors text-sm">
                                  {project.title}
                                </h4>
                                <p className="text-xs text-white/60 truncate">
                                  {project.description}
                                </p>
                              </div>
                              <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white/80 transition-colors" />
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Social Links */}
                  <motion.div
                    className="border-t border-white/20 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-white/60 mb-4">
                      Connect with me
                    </p>
                    <div className="flex space-x-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                        >
                          <social.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
    </>
  );
};

export default Navbar;
