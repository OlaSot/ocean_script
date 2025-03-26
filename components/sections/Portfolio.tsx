"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeader } from "../ui/SectionHeader";
import ArrowBtn from "@/components/ui/arrowLeftBtn";
import ProjectsGrid from "../ui/ProjectsGrid";

const Portfolio = () => {
  return (
    <section className="my-mobile md:my-desktop">
      <Container>
        <SectionHeader title="Our latest works" tagText="Portfolio" tagVariant="black" />
        <ProjectsGrid selectedCategory="all" />
        <motion.div
          className="btn text-center md:mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ArrowBtn text={"Learn more"} />
        </motion.div>
      </Container>
    </section>
  );
}

export default Portfolio;