import { motion } from "framer-motion";
import React from "react";
import { SolutionsGrid } from "../ui/SolutionsGrid";
import { Tag } from "../ui/tag";
import { Container } from "../Container";
import { SectionHeader } from "../ui/SectionHeader";

export default function TypesOfSolutions() {
  return (
    <div className="bg-[url('/CTA.webp')] bg-cover overflow-hidden rounded-[40px] py-[50px]">
      <Container>
        <SectionHeader
          title="Types of solutions"
          tagText="Service"
          tagVariant="white"
          textVariant="white"
        />
        <SolutionsGrid />
      </Container>
    </div>
  );
}
