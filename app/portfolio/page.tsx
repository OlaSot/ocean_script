"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { PageHero } from "@/components/ui/PageHero";
import ProjectsGrid from "@/components/ui/ProjectsGrid";

export default function PortfolioPage() {
  const data = [
    "Websites",
    "Online-stores",
    "Landing pages",
    "CRM-systems",
    "Branding and logo",
    "App design",
  ];

  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  return (
    <div>
      <PageHero
        title="Our recent projects"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilinpmsis sem cras phasellus ullamcorper varius placerat."
        bg="/ourprojects.jpg"
        tagText="Portfolio"
      />
      <Container>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
          <style>
            {`
              .scrollbar-hidden::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hidden {
                scrollbar-width: none;
              }
            `}
          </style>
          <div className="flex space-x-2 sm:space-x-3 md:space-x-6 lg:space-x-6">
            {data.map((tag, index) => (
              <div
                key={tag}
                onMouseEnter={() => setHoveredTag(tag)}
                onMouseLeave={() => setHoveredTag(null)}
                className={`mb-[50px] cursor-pointer font-semibold text-xs sm:text-sm md:text-[14px] lg:text-lg rounded-full 
                  px-2 sm:px-3 md:px-4 lg:px-[18px] py-1.5 sm:py-2 lg:py-[10px] border-2 sm:border-[2.5px] border-black 
                  transition-all duration-300 hover:bg-btn_color hover:text-white 
                 `}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>
          <ProjectsGrid hoveredTag={hoveredTag} />
          <div className="mt-[50px] mb-[150px]">
            <ArrowLeftButton text="Learn more" />
          </div>
        </div>
      </Container>
      <Contact />
    </div>
  );
}
