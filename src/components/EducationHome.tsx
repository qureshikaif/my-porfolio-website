import React from "react";
import Image from "next/image";
import BUKC from "@/../public/bukc.png";
import Educators from "@/../public/educators.png";
import Fazaia from "@/../public/fazaia.png";
import { TracingBeam } from "./ui/tracing-beam";

const educations = [
  {
    title: "Bahria University, Karachi Campus",
    date: "September 2022 - Present",
    image: BUKC,
    position: "BSIT",
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
    position: "Computer Science",
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
    position: "Computer Science",
    points: [
      "Achieved highest marks in Computer Science in the final year.",
      "Received the Best Student Award for outstanding performance.",
      "Participated in and won several science fairs and IT competitions.",
      "Served as the president of the school's computer club.",
    ],
  },
];

const EducationHome = () => {
  return (
    <div className="bg-[#0e191e] py-20 px-8 lg:px-24 text-white">
      <h1 className="lg:text-6xl text-3xl font-extrabold text-center mt-20">
        Education
      </h1>
      {educations.map((education, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col w-1/2">
            <ul className="list-disc">
              <li className="lg:text-3xl text-3xl font-semibold mt-28">
                {education.title}
              </li>
            </ul>
            <h3 className="font-mono text-lg">{education.position}</h3>

            <h3 className="font-sans">{education.date}</h3>
            {/* <ul className="list-disc my-10 ml-4 space-y-5 text-left">
              {education.points.map((point, index) => (
                <li key={index}>{point}</li>
                ))}
                </ul> */}
          </div>
          {/* <div className="w-1/2 flex items-center justify-center">
            <Image
              src={education.image}
              alt="Cubicus.io Logo"
              className="w-1/2 h-1/2"
            />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default EducationHome;
