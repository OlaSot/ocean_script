"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Tag } from "@/components/ui/tag";
import ArrowRightButton from "../ui/arrowRightBtn";

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
            <p className="text-lg my-[30px]">
              Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.
            </p>
            <div className="w-full ">
              <ArrowRightButton text="Learn more" arrow={true} show={true} className="w-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4 md:gap-6 justify-center"
          >
            {logos.map((logo, index) => (
              <motion.div key={index} className="flex justify-start">
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
