"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface WorkProcessStepsProps {
  stages: {
    number: string;
    title: string;
    description?: string;
  }[];
}

export function WorkProcessSteps({ stages }: WorkProcessStepsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-[-20px] sm:space-y-[-30px] relative">
      {stages.map((stage, index) => {
        const isExpanded = expandedIndex === index;
        const isDark = index % 2 !== 0;

        return (
          <motion.div
            key={stage.number}
            className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 mb-6 sm:mb-8 ${
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
            {/* Мобильная версия */}
            <button
              className="flex flex-col md:hidden items-center justify-between px-4 py-6 relative text-left"
              onClick={() => toggleExpand(index)}
            >
              <span
                className={`text-[100px] font-extrabold ${
                  index % 2 === 0 ? "text-black" : "text-transparent"
                } ${inter.className} w-full text-left`}
                style={{
                  WebkitTextStroke: index % 2 !== 0 ? "2px white" : "",
                }}
              >
                {stage.number}
              </span>

              <span
                className={`text-[40px] font-bold tracking-wider ${
                  index % 2 === 0 ? "text-gray-900" : "text-white"
                } w-full text-left`}
              >
                {stage.title}
              </span>
            </button>

            {/* Десктопная версия */}
            <button
              className="hidden md:flex flex-row items-center justify-between px-4 sm:px-[50px] py-6 sm:py-[30px] relative sm:text-left w-full"
              onClick={() => toggleExpand(index)}
            >
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
            </button>

            <div className="absolute top-4 right-4 md:top-3 md:right-3 w-3 h-3 bg-gray-300 rounded-full" />

            <motion.div
              className={`w-full px-4 sm:px-[50px] pb-6 sm:pb-[30px] text-base sm:text-lg leading-relaxed text-left overflow-hidden ${
                index % 2 === 0 ? "text-black" : "text-white"
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={
                isExpanded
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
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
