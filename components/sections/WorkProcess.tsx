"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { Tag } from "../ui/tag";
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
    <section className="pb-[100px] sm:pb-[150px]">
      <Container>
      <motion.div
          className="mb-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="order-2 sm:order-1 text-4xl font-bold text-center sm:text-left text-black">
            <h2>Stages of work</h2>
          </div>
          <div className="order-1 sm:order-2 mb-4 sm:mb-0 flex justify-center sm:justify-end">
          <Tag text="Work process" variant="black" />
          </div>
          </motion.div>
     

        <div className="space-y-[-20px] sm:space-y-[-70px] relative">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${
                index % 2 === 0
                  ? "bg-[url('/stagesDark.webp')] bg-cover bg-center"
                  : "bg-[url('/stagesBgWhite.webp')] bg-cover bg-center"
              } shadow-lg transition-transform duration-300 hover:scale-105`}
              style={{ zIndex: index }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-[50px] py-6 sm:py-[40px] relative sm:text-left">
                <span
                  className={`text-[60px] sm:text-[150px] font-extrabold ${
                    index % 2 === 0 ? "text-transparent" : "text-black"
                  } ${inter.className}`}
                  style={{
                    WebkitTextStroke: index % 2 === 0 ? "2px white" : "",
                  }}
                >
                  {stage.number}
                </span>
                <span
                  className={`text-2xl sm:text-[80px] font-bold tracking-wider ${
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
