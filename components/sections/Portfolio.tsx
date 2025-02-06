"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { Tag } from "../ui/tag";
import ArrowBtn from "@/components/ui/arrowLeftBtn";
import ProjectsGrid from "../ui/ProjectsGrid";



export function Portfolio() {
  return (
    <section className="py-[150px]">
      <Container>
        <div>
          <motion.div className="text-3xl font-bold subtitle-container text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }} 
              >
            <h2
              
            >
              Our latest works
            </h2>
            <Tag text={"Portfolio"} variant="black" />
          </motion.div>

          <ProjectsGrid />

          <motion.div className="btn text-center mt-8"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }} >
            <ArrowBtn text={"Learn more"} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
