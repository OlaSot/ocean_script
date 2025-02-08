"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const stages = [
  { number: "01", title: "ANALYSIS" },
  { number: "02", title: "PROTOTYPE" },
  { number: "03", title: "DEVELOPMENT" },
  { number: "04", title: "TESTING" },
  { number: "05", title: "LAUNCH" },
];

export function WorkProcess() {
  return (
    <section className="pb-[80px] md:pb-[120px] lg:pb-[150px]">
      <Container>
        <SectionHeader
          title="Stages of work"
          tagText="Work process"
          tagVariant="black"
          textVariant="black"
        />

        <div className="space-y-[-10px] md:space-y-[-40px] lg:space-y-[-70px] relative">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "bg-[url('/stagesDark.webp')] bg-cover bg-center"
                  : "bg-[url('/stagesBgWhite.webp')] bg-cover bg-center"
              }`}
              style={{ zIndex: index }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[30px] lg:px-[50px] py-6 md:py-[30px] lg:py-[40px] relative text-center md:text-left">
                <span
                  className={`text-[50px] md:text-[100px] lg:text-[150px] font-extrabold ${
                    index % 2 === 0 ? "text-transparent" : "text-black"
                  } ${inter.className}`}
                  style={{
                    WebkitTextStroke: index % 2 === 0 ? "2px white" : "",
                  }}
                >
                  {stage.number}
                </span>

                <span
                  className={`text-xl md:text-4xl lg:text-[80px] font-bold tracking-wider ${
                    index % 2 === 0 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stage.title}
                </span>

                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 bg-gray-300 rounded-full" />
              </div>

              <div className="absolute bottom-0 right-0 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-tl-full" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
