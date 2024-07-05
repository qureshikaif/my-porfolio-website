"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import SF_Business_Solutions from "@/../public/thumbnails/sf-business-solutions.png";
import Summare_AI from "@/../public/thumbnails/summare-ai.png";
import Nosh_NFT from "@/../public/thumbnails/nosh-nft.png";
import Grand_Cercle from "@/../public/thumbnails/grand-cercle.png";
import Tech_N_Tech from "@/../public/thumbnails/tech-n-tech.png";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Menu
        setActive={setActive}
        className="bg-[#0e1e25] rounded-none justify-between flex items-center z-50"
      >
        <div>
          <h1 className="text-white text-3xl font-extrabold space-x-3">
            <span className="text-gray-600">M</span>
            <span className="text-gray-500">K</span>
            <span className="text-gray-400">Q</span>
          </h1>
        </div>
        <div className="flex justify-between w-1/3">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
            className="text-white"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                App Development
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
            className="text-white z-50"
          >
            <div className="z-50 text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="SF Business Solutions"
                href="https://sfbusinesssolutions.com"
                src={SF_Business_Solutions}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Summare AI"
                href="https://www.summare.ai"
                src={Summare_AI}
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Nosh NFT"
                href="https://noshnft.com"
                src={Nosh_NFT}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="TechNTech"
                href="https://techntech.netlify.app"
                src={Tech_N_Tech}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <Link className="text-white" href="#">
            Resume
          </Link>
        </div>
        <div className="justify-between flex space-x-4">
          <SocialIcon
            url="https://github.com/qureshikaif"
            network="github"
            style={{ width: 40, height: 40 }}
            bgColor="black"
          />
          <SocialIcon
            url="https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/"
            network="linkedin"
            style={{ width: 40, height: 40 }}
            bgColor="black"
          />
          <SocialIcon
            url="https://www.upwork.com/freelancers/~01dcfe9b5f254cca69?mp_source=share"
            network="upwork"
            style={{ width: 40, height: 40 }}
            bgColor="black"
          />
          <SocialIcon
            url="mailto:kaifqureshi.dev@gmail.com"
            network="email"
            style={{ width: 40, height: 40 }}
            bgColor="black"
          />
          {/* <Phone className="size-10 rounded-full bg-black text-white object-contain p-2" /> */}
          {/* <HoveredLink href="/contact">
            <SocialIcon url="https://fiverr.com" network="fiverr" />
          </HoveredLink> */}
        </div>
      </Menu>
    </>
  );
};

export default Navbar;
