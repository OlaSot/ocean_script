"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "years of experience" },
  { number: "100+", label: "successful cases" },
  { number: "8", label: "professionals" }
];

export function Stats() {
  return (
    <motion.div 
      className="flex justify-start gap-5 sm:gap-12 lg:gap-24 mt-[50px] sm:mt-[70px] text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-left min-w-[100px] sm:min-w-max">
          <motion.div 
            className="text-[36px] md:text-[50px] lg:text-[80px] font-bold break-words"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            {stat.number}
          </motion.div>
          <div className="mt-2 text-[14px] md:text-[18px] lg:text-[22px] break-words sm:whitespace-nowrap">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

