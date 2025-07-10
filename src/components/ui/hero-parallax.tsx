"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Sparkles, Code, Coffee, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string | StaticImageData;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating icons
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Animate sparkles
      gsap.to(".sparkle", {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
      });

      // Text reveal animation
      gsap.fromTo(
        ".hero-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="h-[260vh] bg-[#0e191e] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-500 rounded-full opacity-60 sparkle" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full opacity-80 sparkle" />
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-pink-500 rounded-full opacity-40 sparkle" />
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-yellow-400 rounded-full opacity-70 sparkle" />
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-green-400 rounded-full opacity-60 sparkle" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={headerRef}
      className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0 text-white"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="floating-icon absolute top-10 right-20 size-8 text-purple-400 opacity-60" />
        <Coffee className="floating-icon absolute top-32 left-10 size-6 text-yellow-500 opacity-70" />
        <Heart className="floating-icon absolute bottom-20 right-32 size-7 text-pink-500 opacity-60" />
        <Sparkles className="floating-icon absolute bottom-40 left-20 size-8 text-cyan-400 opacity-70" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h1
          className="hero-text text-2xl md:text-7xl font-bold relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block">
            Turning{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ideas
            </motion.span>{" "}
            into
          </span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            beautiful realities
          </motion.span>
        </motion.h1>

        <motion.div
          className="hero-text max-w-2xl mt-6 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Transforming ideas into beautiful digital realities. As a{" "}
            <motion.span
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              software developer
            </motion.span>
            , I specialize in crafting elegant solutions that bring concepts to
            life.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Whether it&apos;s building{" "}
            <motion.span
              className="text-cyan-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              intuitive user interfaces
            </motion.span>{" "}
            or architecting{" "}
            <motion.span
              className="text-pink-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              robust backend systems
            </motion.span>
            , I thrive on turning visions into tangible, functional creations.
          </p>

          <motion.p
            className="text-base md:text-lg text-gray-400 leading-relaxed"
            whileInView={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore my work and witness the fusion of{" "}
            <span className="text-yellow-400 font-semibold">creativity</span>{" "}
            and <span className="text-green-400 font-semibold">technology</span>{" "}
            in every project ✨
          </motion.p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="hero-text flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={() => {
              const projectsSection =
                document.querySelector('[data-section="projects"]') ||
                document.querySelector("#projects") ||
                document.getElementsByTagName("main")[0]?.children[2]; // Projects is 3rd section
              if (projectsSection) {
                projectsSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer relative z-20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Projects</span>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.button>

          <motion.button
            onClick={() => {
              const contactSection =
                document.querySelector('[data-section="contact"]') ||
                document.querySelector("#contact") ||
                document.getElementsByTagName("main")[0]?.lastElementChild; // Contact is last section
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 cursor-pointer relative z-20 hover:bg-white/5"
            whileHover={{ scale: 1.05, borderColor: "#9CA3AF" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>

            {/* Hover glow effect */}
            <div className="absolute inset-0 border border-gray-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string | StaticImageData;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
        rotateY: 5,
        scale: 1.05,
      }}
      key={product.title}
      className="group/product h-[18.6rem] w-[35rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl h-full w-full"
      >
        {/* Main container with proper sizing */}
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          {/* Image - Base layer */}
          <Image
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-center h-full w-full group-hover/product:scale-110 transition-transform duration-500"
            alt={product.title}
          />

          {/* Gradient overlay on hover - subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/20 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300" />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover/product:bg-black/40 transition-all duration-300" />

          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/product:border-purple-500/50 transition-all duration-300" />

          {/* Title overlay */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-white opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 font-semibold text-lg drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {product.title}
            </motion.h2>

            {/* Animated underline */}
            <motion.div className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover/product:w-full transition-all duration-500 mt-1" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};
