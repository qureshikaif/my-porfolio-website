import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Pixpel from "@/../public/thumbnails/pixpel.png";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
  {
    banner: Pixpel,
    title: "Pixpel.io",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
  },
];

const ProjectsHome = () => {
  return (
    <div className="bg-[#0e191e] pb-10 pt-20 px-24">
      <h1 className="text-6xl font-extrabold text-white text-center py-10">
        Projects
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="max-w-[96%]">
            <BackgroundGradient className="bg-[#0e191e] rounded-[10px] text-white max-w-sm p-2 sm:p-0 dark:bg-zinc-900">
              <Image
                src={project.banner}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain rounded-t-[10px]"
              />
              <div className="flex items-center space-x-2">
                <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 pl-5">
                  {project.title}
                </p>
                <Link href="https://pixpel.io">
                  <ExternalLink className="size-3 mt-2" />
                </Link>
              </div>

              <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5 pb-5">
                {project.description}
              </p>
            </BackgroundGradient>
          </div>
        ))}
        {/* <div className="max-w-[96%]">
          <BackgroundGradient className="bg-[#0e191e] rounded-[10px] text-white max-w-sm p-2 sm:p-0 dark:bg-zinc-900">
            <Image
              src={Pixpel}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-t-[10px]"
            />
            <div className="flex items-center space-x-2">
              <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 pl-5">
                Pixpel.io
              </p>
              <Link href="https://pixpel.io">
                <ExternalLink className="size-3 mt-2" />
              </Link>
            </div>

            <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5 pb-5">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
          </BackgroundGradient>
        </div> */}
        {/* <div className="">
          <BackgroundGradient className="bg-[#0e191e] rounded-[10px] text-white max-w-sm p-2 sm:p-0 dark:bg-zinc-900">
            <Image
              src={Pixpel}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-t-[10px]"
            />
            <div className="flex items-center space-x-2">
              <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 pl-5">
                Pixpel.io
              </p>
              <Link href="https://pixpel.io">
                <ExternalLink className="size-3 mt-2" />
              </Link>
            </div>

            <p className="text-sm text-neutral-300 dark:text-neutral-400 px-5 pb-5">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
          </BackgroundGradient>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsHome;
