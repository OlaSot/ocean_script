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
      className="grid grid-cols-3 gap-16 sm:gap-8 max-w-3xl mx-auto mt-[70px] px-[33px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-left  sm:text-center">
          <motion.div 
            className="text-[36px] sm:text-[80px] font-bold "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            {stat.number}
          </motion.div>
          <div className="mt-2 text-[14px]  sm:text-[22px]">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}