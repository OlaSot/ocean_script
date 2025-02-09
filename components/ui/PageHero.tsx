"use client";

import { motion } from "framer-motion";
import { Tag } from "./tag";
import ArrowLeftButton from "./arrowLeftBtn";
interface PageHeroProps {
  title: string;
  description: string;
  showButton?: boolean;
  bg: string;
  tagText?: string; 
}

export function PageHero({
  title,
  description,
  showButton = true,
  bg,
  tagText, 
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[45vh] flex items-center justify-center overflow-hidden mb-[150px]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center rounded-b-xl"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tagText && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-[20px] md:mb-6 inline-block"
          >
            <Tag text={tagText} />
          </motion.div>
        )}

        <motion.h1
          className="text-[45px] md:text-[70px] md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>

        {showButton && (
          <div className="flex justify-center">
            <ArrowLeftButton text="Leave request" />
          </div>
        )}
      </div>
    </section>
  );
}
