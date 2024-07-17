"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import One from "@/../public/thumbnails/arbitrage.png";
import Two from "@/../public/thumbnails/nosh-nft.png";
import Three from "@/../public/thumbnails/summare-ai.png";

const ProjectTest = () => {
  const projectData = {
    title: "Awesome Project",
    techStack: ["React", "Next.js", "TypeScript", "Node.js"],
    description:
      "This is an awesome project that showcases my skills in building full-stack applications.",
    startDate: "January 2023",
    endDate: "June 2023",
    organization: "Tech Company",
    images: [One, Two, Three],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#0e191e] py-10 px-8 lg:px-24 text-white">
      <div className="mb-10">
        <Slider {...settings}>
          {projectData.images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-auto"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </Slider>
      </div>
      <h1 className="lg:text-6xl text-3xl font-extrabold text-center mb-10">
        {projectData.title}
      </h1>
      <h2 className="text-2xl font-semibold mb-5">Tech Stack</h2>
      <ul className="list-disc list-inside mb-10">
        {projectData.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-5">Description</h2>
      <p className="mb-10">{projectData.description}</p>
      <h2 className="text-xl font-semibold mb-2">Project Duration</h2>
      <p className="mb-5">
        {projectData.startDate} - {projectData.endDate}
      </p>
      <h2 className="text-xl font-semibold mb-2">Organization</h2>
      <p className="mb-5">{projectData.organization}</p>
    </div>
  );
};

export default ProjectTest;
