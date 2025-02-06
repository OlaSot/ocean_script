import { motion } from "framer-motion";
import React from "react";
import { SolutionsGrid } from "../ui/SolutionsGrid";
import { Tag } from "../ui/tag";
import { Container } from "../Container";

export default function TypesOfSolutions() {
  return (
    <div className="bg-[url('/CTA.webp')] bg-cover overflow-hidden rounded-[40px] py-[50px]">
      <Container>
        <motion.div
          className="text-3xl font-bold subtitle-container text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Types of solutions</h2>
          <Tag text={"Service"} variant="white" />
        </motion.div>
        <SolutionsGrid />
      </Container>
    </div>
  );
}
