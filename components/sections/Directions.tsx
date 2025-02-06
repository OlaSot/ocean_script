import { motion } from "framer-motion";
import React from "react";

import { Tag } from "../ui/tag";
import { Container } from "../Container";
import { DirectionsGrid } from "../ui/DirectionsGrid";
import ArrowBtn from "../ui/arrowLeftBtn"; // Используем ту же кнопку, что и в Services

export default function Directions() {
  return (
    <div className="bg-[url('/CTA.webp')] bg-cover overflow-hidden rounded-[40px] py-[50px]">
      <Container>
        <motion.div
          className="text-3xl font-bold subtitle-container text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Directions</h2>
          <Tag text={"Our directions"} variant="white" />
        </motion.div>

        <DirectionsGrid />


        <div className="flex justify-center mt-8">
          <ArrowBtn text="Send request" />
        </div>
      </Container>
    </div>
  );
}
