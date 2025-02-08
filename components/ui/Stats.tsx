"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: " years of experience" },
  { number: "100+", label: "successful cases" },
  { number: "8", label: "professionals" }
];

export function Stats() {
  return (
    <motion.div 
      className="flex justify-start gap-8 sm:gap-12 lg:gap-24 mt-[70px] text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-left min-w-max">
          <motion.div 
            className="text-[36px] sm:text-[80px] font-bold whitespace-nowrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            {stat.number}
          </motion.div>
          <div className="mt-2 text-[14px] sm:text-[22px] whitespace-nowrap">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
