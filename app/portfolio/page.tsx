"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { PageHero } from "@/components/ui/PageHero";
import ProjectsGrid from "@/components/ui/ProjectsGrid";
import projectsData from "@/data/projects.json";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Websites");
  const categories = projectsData.categories;

  return (
    <div>
      <PageHero
        title="Our recent projects"
        description="Explore our latest works across various categories."
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
          <div className=" flex space-x-3 md:space-x-6 lg:space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer font-semibold text-xs sm:text-sm md:text-[14px] lg:text-lg 
                           rounded-full px-4 py-2 border-2 transition-all 
                           ${
                             selectedCategory === category
                               ? "bg-btn_color text-white border-btn_color"
                               : "border-gray-300 hover:bg-btn_color hover:text-white"
                           }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

    
        <div className="mt-[50px]">
          <ProjectsGrid selectedCategory={selectedCategory} />
          <div className="mt-[50px] mb-[150px]">
            <ArrowLeftButton text="Learn more" />
          </div>
        </div>
      </Container>
      <Contact />
    </div>
  );
}
