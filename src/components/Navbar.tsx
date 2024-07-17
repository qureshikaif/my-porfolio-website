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
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <>
      <Menu
        setActive={setActive}
        className="bg-[#0e1e25] rounded-none justify-between lg:flex items-center z-50 hidden"
      >
        <Link href={"/"}>
          <h1 className="text-white text-3xl font-extrabold space-x-1">
            <span className="text-gray-600">M</span>
            <span className="text-gray-500">K</span>
            <span className="text-gray-400">Q</span>
          </h1>
        </Link>
        <div className="flex justify-between w-1/3">
          <Link
            href={"/"}
            className="text-white hover:underline hover:underline-offset-8"
          >
            Home
          </Link>

          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
            className="text-white z-50 hover:underline hover:underline-offset-8"
          >
            <div className="z-50 text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="SF Business Solutions"
                href="https://sfbusinesssolutions.com"
                src={SF_Business_Solutions}
                description="SF Business Solutions is a website built with Next.js using App Router and Shadcn UI library for a business. The frontend is currently deployed on Vercel for development purposes. This website is currently under development."
              />
              <ProductItem
                title="Summare AI"
                href="https://www.summare.ai"
                src={Summare_AI}
                description="SummareAI is an AI-powered web article summarizer that I had the opportunity to work on. The primary goal of this project was to transition the existing website from React to Next.js to enhance SEO performance. I was responsible for rebuilding the website from scratch using Next.js and the Next UI library."
              />
              <ProductItem
                title="Nosh NFT"
                href="https://noshnft.com"
                src={Nosh_NFT}
                description="NoshNFT is a cutting-edge NFT marketplace built with a modern tech stack to provide a seamless experience for buying and selling NFTs. The platform is designed with a focus on performance, scalability, and security."
              />
              <ProductItem
                title="TechNTech"
                href="https://techntech.netlify.app"
                src={Tech_N_Tech}
                description="Techntech is a premier e-commerce platform dedicated to the buying and selling of laptops. Techntech offers a vast selection of the latest laptops from top brands, catering to both individual consumers and businesses. A user-friendly interface, competitive pricing, and comprehensive product information make it easy for customers to find the perfect laptop to meet their needs."
              />
            </div>
          </MenuItem>
          <Link
            className="text-white hover:underline hover:underline-offset-8"
            href="/resume"
          >
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
        </div>
      </Menu>

      {/* Mobile MENU */}
      <Menu
        setActive={setActive}
        className="bg-[#0e1e25] rounded-none justify-between lg:hidden items-center z-50 p-4"
      >
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <h1 className="text-white text-3xl font-extrabold space-x-1">
              <span className="text-gray-600">M</span>
              <span className="text-gray-500">K</span>
              <span className="text-gray-400">Q</span>
            </h1>
          </Link>
          <button
            onClick={() => setMobile(!mobile)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {mobile && (
          <div className="flex flex-col mt-4 space-y-2">
            <Link
              href={"/"}
              className="text-white hover:underline hover:underline-offset-8"
            >
              Home
            </Link>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Projects"
              className="text-white z-50 hover:underline hover:underline-offset-8"
            >
              <div className="z-50 text-sm grid grid-cols-1 gap-4 p-4">
                <ProductItem
                  title="SF Business Solutions"
                  href="https://sfbusinesssolutions.com"
                  src={SF_Business_Solutions}
                  description="SF Business Solutions is a website built with Next.js using App Router and Shadcn UI library for a business. The frontend is currently deployed on Vercel for development purposes. This website is currently under development."
                />
                <ProductItem
                  title="Summare AI"
                  href="https://www.summare.ai"
                  src={Summare_AI}
                  description="SummareAI is an AI-powered web article summarizer that I had the opportunity to work on. The primary goal of this project was to transition the existing website from React to Next.js to enhance SEO performance. I was responsible for rebuilding the website from scratch using Next.js and the Next UI library."
                />
                <ProductItem
                  title="Nosh NFT"
                  href="https://noshnft.com"
                  src={Nosh_NFT}
                  description="NoshNFT is a cutting-edge NFT marketplace built with a modern tech stack to provide a seamless experience for buying and selling NFTs. The platform is designed with a focus on performance, scalability, and security."
                />
                <ProductItem
                  title="TechNTech"
                  href="https://techntech.netlify.app"
                  src={Tech_N_Tech}
                  description="Techntech is a premier e-commerce platform dedicated to the buying and selling of laptops. Techntech offers a vast selection of the latest laptops from top brands, catering to both individual consumers and businesses. A user-friendly interface, competitive pricing, and comprehensive product information make it easy for customers to find the perfect laptop to meet their needs."
                />
              </div>
            </MenuItem>
            <Link
              className="text-white hover:underline hover:underline-offset-8"
              href="/resume"
            >
              Resume
            </Link>
            <div className="flex justify-around mt-4 space-x-4">
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
            </div>
          </div>
        )}
      </Menu>
    </>
  );
};

export default Navbar;
