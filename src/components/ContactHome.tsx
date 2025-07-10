"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  MessageSquare,
  Heart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    name: "GitHub",
    handle: "@qureshikaif",
    url: "https://github.com/qureshikaif",
    icon: Github,
    color: "from-gray-600 to-gray-800",
    hoverColor: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-500/20",
    description: "Open source contributions & projects",
  },
  {
    name: "LinkedIn",
    handle: "Kaif Qureshi",
    url: "https://linkedin.com/in/kaif-qureshi-087ab6259",
    icon: Linkedin,
    color: "from-blue-500 to-blue-700",
    hoverColor: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/20",
    description: "Professional networking & career updates",
  },
  {
    name: "Email",
    handle: "qureshikaif@gmail.com",
    url: "mailto:qureshikaif@gmail.com",
    icon: Mail,
    color: "from-red-500 to-red-700",
    hoverColor: "from-red-400 to-red-600",
    bgColor: "bg-red-500/20",
    description: "Direct communication & collaboration",
  },
  {
    name: "Portfolio",
    handle: "My Work",
    url: "https://kaif-qureshi.vercel.app",
    icon: ExternalLink,
    color: "from-purple-500 to-purple-700",
    hoverColor: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/20",
    description: "Showcase of my projects & skills",
  },
];

const floatingEmojis = [
  { emoji: "💻", position: { top: "10%", left: "15%" }, delay: 0 },
  { emoji: "☕", position: { top: "20%", right: "20%" }, delay: 0.5 },
  { emoji: "🚀", position: { bottom: "25%", left: "10%" }, delay: 1 },
  { emoji: "🎯", position: { top: "60%", right: "10%" }, delay: 1.5 },
  { emoji: "⚡", position: { bottom: "40%", right: "25%" }, delay: 2 },
  { emoji: "🎨", position: { top: "40%", left: "5%" }, delay: 2.5 },
  { emoji: "🔥", position: { bottom: "15%", right: "40%" }, delay: 3 },
  { emoji: "🌟", position: { top: "80%", left: "30%" }, delay: 3.5 },
];

const ContactHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardAnimations = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const animations: gsap.core.Tween[] = [];
    
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: -5,
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

      // Animate contact cards
      gsap.fromTo(
        ".contact-card",
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
            trigger: ".contact-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate contact info
      gsap.fromTo(
        ".contact-info",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-details",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate floating emojis
      gsap.fromTo(
        ".floating-emoji",
        {
          y: 50,
          opacity: 0,
          scale: 0,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".floating-emojis",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous floating animation
      gsap.to(".floating-emoji", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Individual pulsing animations for contact cards
      contactMethods.forEach((_, index) => {
        const cardElement = `.contact-card-${index}`;
        const animation = gsap.to(cardElement, {
          scale: 1.02,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.5,
        });
        animations[index] = animation;
        cardAnimations.current[index] = animation;
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      // Clean up card animations using local variable
      animations.forEach(animation => {
        if (animation) animation.kill();
      });
    };
  }, []);

  // Handle card hover events
  const handleCardHover = (index: number, isHovered: boolean) => {
    setHoveredCard(isHovered ? index : null);
    
    const animation = cardAnimations.current[index];
    if (animation) {
      if (isHovered) {
        // Pause the automatic animation and return to scale 1
        animation.pause();
        gsap.to(`.contact-card-${index}`, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Resume the automatic animation
        animation.resume();
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      data-section="contact"
      className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] py-20 px-8 lg:px-24 text-white overflow-hidden relative"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Background Emojis */}
      <div className="floating-emojis absolute inset-0 pointer-events-none">
        {floatingEmojis.map((item, index) => (
          <motion.div
            key={index}
            className="floating-emoji absolute text-4xl opacity-20"
            style={item.position}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Title */}
      <motion.h1
        ref={titleRef}
        className="lg:text-6xl text-4xl font-extrabold text-center mb-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          {`Let's`} Connect
        </span>
        <motion.span
          className="absolute -top-4 -right-4 text-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          🌟
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ready to collaborate on something amazing? {`I'm`} just a message away!
        Whether {`it's`} a{" "}
        <span className="text-purple-400 font-semibold">new project</span>,{" "}
        <span className="text-pink-400 font-semibold">freelance work</span>, or
        just a{" "}
        <span className="text-cyan-400 font-semibold">friendly chat</span> about
        tech.
      </motion.p>

      {/* Contact Cards */}
      <div className="contact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            className={`contact-card contact-card-${index} group cursor-pointer`}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open(method.url, "_blank")}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
          >
            <div className="relative h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${method.color} ${
                  hoveredCard === index ? 'opacity-25' : 'opacity-10'
                } rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}
              />
              
              {/* Additional glow effect for hovered card */}
              {hoveredCard === index && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${method.hoverColor} opacity-30 rounded-2xl blur-2xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              )}

                              <div className={`relative bg-gray-900/50 backdrop-blur-sm border ${
                  hoveredCard === index ? 'border-gray-600' : 'border-gray-800'
                } rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 h-full flex flex-col items-center text-center`}>
                <div
                  className={`w-16 h-16 rounded-full ${method.bgColor} flex items-center justify-center mb-4 ${
                    hoveredCard === index ? 'scale-110' : ''
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className={`w-8 h-8 text-white ${
                    hoveredCard === index ? 'animate-pulse' : ''
                  }`} />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {method.name}
                </h3>

                <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors">
                  {method.handle}
                </p>

                <p className="text-gray-500 text-xs leading-relaxed flex-grow">
                  {method.description}
                </p>

                <div className="mt-4 flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span>Click to connect</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Details */}
      <motion.div
        className="contact-details text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="contact-info"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
              <p className="text-gray-500 text-xs mt-1">GMT +5 Timezone</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-info"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300">
              <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-gray-400 text-sm">Usually within 24 hours</p>
              <p className="text-gray-500 text-xs mt-1">
                Faster for urgent projects
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-info"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300">
              <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Availability</h3>
              <p className="text-gray-400 text-sm">Open to new opportunities</p>
              <p className="text-gray-500 text-xs mt-1">
                Freelance & full-time
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-3xl mx-auto">
          <motion.div
            className="text-4xl mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🚀
          </motion.div>

          <h2 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {`I'm`} always excited to work on new projects and collaborate with
            passionate people. {`Let's`} turn your ideas into reality!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:qureshikaif@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/kaif-qureshi-087ab6259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactHome;
