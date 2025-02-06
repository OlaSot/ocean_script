"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

interface DirectionCardProps {
  number: string;
  title: string;
  image: string;
  index: number;
}

const inter = Inter({ subsets: ["latin"] });

export function DirectionCard({
  number,
  title,
  image,
  index,
}: DirectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-[20px] shadow-lg overflow-hidden flex flex-col justify-between 
      bg-[url('/stagesBgWhite.webp')] bg-contain bg-center text-black min-h-[370px]"
    >
      <span
        className={`${inter.className} text-[100px] font-bold text-transparent`}
        style={{ WebkitTextStroke: "2px black" }}
      >
        {number}
      </span>

      <img
        src={image}
        alt={title}
        className="absolute top-3 right-[-70px] w-[250px] h-[250px] object-contain"
      />

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-black"></span>
        <h3 className="text-[32px] font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}
