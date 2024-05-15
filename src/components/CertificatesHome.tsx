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

const CertificatesHome = () => {
  return (
    <div className="bg-[#0e191e] pb-10 pt-20 px-24">
      <h1 className="text-6xl font-extrabold text-white text-center pt-10">
        Certifications
      </h1>
      <div className="flex flex-wrap mt-10 gap-10">
        {skills.map((skill, index) => (
          <button key={index} className="p-[2px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              {skill.name}
            </div>
          </button>
          // <button
          //   key={index}
          //   className="inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          // >
          //   {skill.name}
          // </button>
        ))}

        {/* {skills.map((skill, index) => (
          <Button
            key={index}
            borderRadius="1.75rem"
            className="bg-[#0e191e] text-white border-neutral-200"
          >
            {skill.name}
          </Button>
        ))} */}
      </div>
    </div>
  );
};

export default CertificatesHome;
