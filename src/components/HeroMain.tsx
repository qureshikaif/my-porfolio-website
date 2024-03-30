import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Build",
    className: "text-white",
  },
  {
    text: "awesome",
    className: "text-white",
  },
  {
    text: "apps",
    className: "text-white",
  },
  {
    text: "with",
    className: "text-white",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const HeroMain = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#001C29]">
      <p className="text-white dark:text-neutral-200 text-base mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
};

export default HeroMain;
