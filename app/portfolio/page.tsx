"use client";

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
    "App design",
  ];

  return (
    <div>
      <PageHero
        title="Our recent projects"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilinpmsis sem cras phasellus ullamcorper varius placerat."
        bg="/ourprojects.jpg"
        tagText="Portfolio"
      />
      <Container>
        {/* Скрываем скролл, но оставляем прокрутку */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
          <style>
            {`
              /* Для Chrome, Safari */
              .scrollbar-hidden::-webkit-scrollbar {
                display: none;
              }
              /* Для Firefox */
              .scrollbar-hidden {
                scrollbar-width: none;
              }
            `}
          </style>
          <div className="flex space-x-2 sm:space-x-3 md:space-x-6 lg:space-x-6">
            {data.map((el, index) => (
              <div
                key={el}
                className={`font-semibold text-xs sm:text-sm md:text-[14px] lg:text-lg rounded-full mb-[50px] 
                  px-2 sm:px-3 md:px-4 lg:px-[18px] py-1.5 sm:py-2 lg:py-[10px] border-2 sm:border-[2.5px] border-black 
                  ${index === 0 ? "bg-btn_color text-white border-blue-500" : ""}`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div>
          <ProjectsGrid />
          <div className="mt-[50px] mb-[150px]">
            <ArrowLeftButton text="Learn more" />
          </div>
        </div>
      </Container>
      <Contact />
    </div>
  );
}
