"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Tag } from "@/components/ui/tag";
import ArrowLeftButton from "../ui/arrowLeftBtn";

export function Advantages() {
  const advantages = ["Sales growth", "Loyalty", "Recognition"];

  return (
    <section className="relative py-20 bg-[url('/CTA.webp')] bg-cover bg-center rounded-[40px]">
      <Container>

        <motion.div
          className="mb-8 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white">Advantages</h2>
          <Tag text="Advantages" />
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="border border-white text-white text-[28px] text-center py-8 px-6 rounded-[20px] transition duration-300 hover:bg-white hover:text-black cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {advantage}
            </motion.div>
          ))}
        </div>


        <div className="mt-[50px] flex justify-center">
         <ArrowLeftButton text="Leave a request"/>
        </div>
      </Container>
    </section>
  );
}
