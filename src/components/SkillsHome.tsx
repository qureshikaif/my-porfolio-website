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

const SkillsHome = () => {
  return (
    <div className="bg-[#0e191e] pb-10 px-24">
      <h1 className="text-6xl font-extrabold text-white text-center pt-10">
        Skills
      </h1>
      <div className="flex flex-wrap mt-10 gap-4">
        {skills.map((skill, index) => (
          <Button
            key={index}
            borderRadius="1.75rem"
            className="bg-[#0e191e] text-white border-neutral-200"
          >
            {skill.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SkillsHome;
