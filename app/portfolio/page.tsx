import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { PageHero } from "@/components/ui/PageHero";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import AnimatedSection from "@/components/AnimatedSection.tsx";
import { Metadata } from "next";
import ProjectsGrid from "@/components/ui/ProjectsGrid";




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
          onCategoryChange={(category) => {}}
        />

        <div className="mt-[50px]">
          <ProjectsGrid selectedCategory={defaultCategory} />
          <div className="mt-[50px] mb-[150px]">
            <ArrowLeftButton text="Learn more" />
          </div>
        </div>
      </Container>
      <Contact />
    </div>
  );
}