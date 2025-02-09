"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../Container";
import { SectionHeader } from "../ui/SectionHeader";

const pains = [
  {
    id: "01",
    title: "No clear site development plan",
    solution:
      "We analyze the niche and create a project tailored to business goals.",
  },
  {
    id: "02",
    title: "Outdated or inconvenient design",
    solution: "We offer modern UI/UX that improves engagement and sales.",
  },
  {
    id: "03",
    title: "No clarity in customer management",
    solution:
      "We implement CRM, where all processes are streamlined and automated, which helps to maintain and develop the client base.",
  },
  {
    id: "04",
    title: "Lack of knowledge in the field of AI",
    solution:
      "We integrate AI solutions that provide accurate analytics and simplify decision-making, taking business efficiency to the next level.",
  },
  {
    id: "05",
    title: "Chaotic ads with low effectiveness",
    solution:
      "We develop a promotion strategy and set up precise targeting to ensure a stable flow of applications.",
  },
];

export function CustomerPains() {
  return (
    <section className="my-mobile md:my-desktop bg-white text-black">
      <Container>
        <SectionHeader title="Customer pains" tagText="Pains" tagVariant="black" textVariant="black" />
        
        <div className="flex flex-col lg:flex-row items-start gap-12">

          <motion.div
            className="lg:basis-1/3 w-full relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[490px] mx-auto">
              <Image
                src="/Cone_01-2.webp"
                alt="Abstract 3D shape"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </motion.div>


          <div className="lg:basis-2/3">
            <div className="space-y-4">
              {pains.map((pain, index) => (
                <motion.div
                  key={pain.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-1 md:gap-6 p-4 rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 bg-[url('/bg_white.webp')] bg-cover bg-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex flex-col items-start gap-2 md:gap-4 min-w-[200px] w-full"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <span className="text-btn_color text-sm">({pain.id})</span>
                    <h3 className="font-bold text-lg sm:text-xl w-full text-left">
                      {pain.title}
                    </h3>
                  </motion.div>

                  <motion.p
                    className="text-black text-sm sm:text-lg w-full sm:max-w-[400px] text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    {pain.solution}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
