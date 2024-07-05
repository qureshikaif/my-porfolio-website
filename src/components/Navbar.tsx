"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

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
            <div className="flex flex-col space-y-4 text-sm ">
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
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
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
