import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { Button } from "./ui/moving-border";

const skills = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "PostgreSQL" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "NoSQL" },
  { name: "Linux" },
  { name: "AWS" },
  { name: "React Native" },
  { name: "Web3/Blockchain" },
  { name: "Solidity" },
  { name: "ERC721 Tokens" },
  { name: "Tailwind CSS" },
  { name: "Next UI" },
  { name: "Shadcn UI" },
  { name: "Bootstrap" },
  { name: "Webflow" },
  { name: "Git" },
  { name: "OOP" },
  { name: "Wordpress Elementor" },
];

const ProjectsHome = () => {
  return (
    <div className="bg-[#0e191e] pb-10 pt-20 px-24 h-screen">
      <h1 className="text-6xl font-extrabold text-white text-center pt-10">
        Projects
      </h1>
    </div>
  );
};

export default ProjectsHome;
