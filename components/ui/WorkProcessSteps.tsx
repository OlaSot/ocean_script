"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface WorkProcessStepsProps {
  stages: {
    number: string;
    title: string;
    description?: string;
    expanded: boolean;
  }[];
}



export function WorkProcessSteps({stages}:WorkProcessStepsProps) {
  return (
    <div className="space-y-[-20px] sm:space-y-[-30px] relative">
      {stages.map((stage, index) => (
        <motion.div
          key={stage.number}
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${
            index % 2 === 0
              ? "bg-[url('/stagesBgWhite.webP')] bg-cover bg-center"
              : "bg-[url('/stagesDark.webP')] bg-cover bg-center"
          } shadow-lg transition-transform duration-300 hover:scale-105`}
          style={{ zIndex: index }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-[50px] py-6 sm:py-[30px] relative sm:text-left">
            <span
              className={`text-[60px] sm:text-[40px] font-extrabold ${
                index % 2 === 0 ? "text-black" : "text-white"
              } ${inter.className}`}
            >
              {stage.number}
            </span>
            <span
              className={`text-2xl sm:text-[40px] font-bold tracking-wider ${
                index % 2 === 0 ? "text-gray-900" : "text-white"
              }`}
            >
              {stage.title}
            </span>
          </div>

          {stage.description && index === 0 && (
            <div className="w-full px-4 sm:px-[50px] pb-6 sm:pb-[50px] text-sm sm:text-lg text-black leading-relaxed text-justify">
              {stage.description}
            </div>
          )}
          
        </motion.div>
      ))}
    </div>
  );
}
