"use client";

import { Container } from "@/components/Container";
import  Contact  from "@/components/sections/Contact";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { PageHero } from "@/components/ui/PageHero";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import AnimatedSection from "@/components/AnimatedSection.tsx";
import ProjectsGrid from "@/components/ui/ProjectsGrid";
import { useState } from "react";

export default function PortfolioPage() {
  const categories = [
    "Websites",
    "Online-stores",
    "Landing pages",
    "CRM-systems",
    "Branding and logo",
    "App design",
  ];
  const defaultCategory = "Websites";
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  return (
    <div>
      <AnimatedSection>
        <PageHero
          title="Our recent projects"
          description="Explore our latest works across various categories."
          bg="/ourprojects.jpg"
          tagText="Portfolio"
        />
      </AnimatedSection>
      <Container>
        <PortfolioCategorySelector
          categories={categories}
          defaultCategory={defaultCategory}
          onCategoryChange={setSelectedCategory} 
        />
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
