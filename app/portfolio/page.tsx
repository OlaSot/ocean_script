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
        bg="/portfolioBg.webp"
        tagText="Portfolio"
      />
      <Container>
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
            {data.map((el, index) => (
              <div
                key={el}
                className={`font-semibold text-sm rounded-full mb-[50px] px-3 sm:px-[18px] sm:text-[14px] md:text-lg py-2 sm:py-[10px] border-[2.5px] border-black ${
                  index === 0 ? "bg-btn_color text-white border-blue-500" : ""
                }`}
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
