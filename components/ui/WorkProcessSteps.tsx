"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface WorkProcessStepsProps {
  stages: {
    number: string;
    title: string;
    description: string;
  }[];
}

export function WorkProcessSteps({ stages }: WorkProcessStepsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index)); 
  };

  return (
    <div className="space-y-[-20px] sm:space-y-[-30px] relative">
      {stages.map((stage, index) => {
        const isExpanded = expandedIndex === index;
        const isDark = index % 2 !== 0;

        return (
          <motion.div
            key={stage.number}
            className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              isDark
                ? "bg-[url('/stagesDark.webp')] bg-cover bg-center"
                : "bg-[url('/stagesBgWhite.webp')] bg-cover bg-center"
            }`}
            style={{ zIndex: index }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >

            <button
              className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-[50px] py-6 sm:py-[30px] relative sm:text-left w-full"
              onClick={() => toggleExpand(index)}
            >
              <span
                className={`text-[60px] sm:text-[40px] font-extrabold ${
                  isDark ? "text-white" : "text-black"
                } ${inter.className}`}
              >
                {stage.number}
              </span>
              <span
                className={`text-2xl sm:text-[40px] font-bold tracking-wider ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {stage.title}
              </span>

            </button>


            <motion.div
              className={`w-full px-4 sm:px-[50px] pb-6 sm:pb-[30px] text-sm sm:text-lg leading-relaxed text-left overflow-hidden ${
                isDark ? "text-white" : "text-black"
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {stage.description}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
