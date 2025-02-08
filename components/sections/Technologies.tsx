"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Tag } from "@/components/ui/tag";

interface TechnologiesProps {
  logos: { src: string; alt: string }[];
}

export function Technologies({ logos }: TechnologiesProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col md:flex-row gap-[100px] md:gap-[150px] items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <Tag text="Our Technologies" variant="black" />
            <h2 className="text-[40px] font-bold mt-4">Technologies</h2>
            <p className="text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.
            </p>
            <button className="mt-6 bg-btn_color hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Learn more →
            </button>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`w-full flex justify-center ${
              logos.length === 1
                ? "flex justify-center items-center h-[200px]" 
                : logos.length === 2
                ? "grid grid-cols-2 gap-12 justify-center" 
                : logos.length === 3
                ? "grid grid-cols-3 gap-10 sm:grid-cols-2 sm:grid-rows-2 justify-center" 
                : logos.length === 4
                ? "grid grid-cols-2 gap-12 justify-center" 
                : logos.length > 4 && logos.length <= 8
                ? "grid grid-cols-4 gap-12 justify-center"
                : "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-6 justify-center" 
            }`}
          >
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`mx-auto ${
                  logos.length === 1
                    ? "h-32 w-[360px]" 
                    : logos.length === 2
                    ? "h-28 w-[220px]" 
                    : logos.length === 3
                    ? "h-24 w-30" 
                    : logos.length === 4
                    ? "h-24 w-30" 
                    : "h-16 w-30" 
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
