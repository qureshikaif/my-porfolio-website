import React from "react";
import { TracingBeam } from "./ui/tracing-beam";

const experiences = [
  {
    title: "Cubicus.io",
    date: "August 2023 - Present",
    position: "Junior Full Stack Developer",
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
    points: [
      "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor.",
      "Ensured responsive design for optimal viewing across multiple devices.",
      "Utilized Webflow’s rich visual interface to create complex animations and interactions.",
      "Implemented triggers and animations to enhance user experience and engagement.",
      "Used timed animations to control the sequence and timing of animations.",
      "Worked with multi-step animations to create complex, layered effects.",
    ],
  },
];

const ExperienceHome = () => {
  return (
    <div className="bg-[#0e191e] h-screen py-10">
      <h1 className="text-6xl font-extrabold text-white text-center">
        Experience
      </h1>
      <TracingBeam className="mt-10">
        {experiences.map((experience, index) => (
          <div key={index}>
            <h1 className="text-xl text-white pt-2 font-bold">
              {experience.title}
            </h1>
            <h2 className="text-base text-white font-light">
              {experience.date}
            </h2>
            <h3 className="text-base text-white font-light">
              {experience.position}
            </h3>
            <ul className="text-white space-y-4 my-4 list-disc text-sm">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
};

export default ExperienceHome;
