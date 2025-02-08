"use client";

import { motion } from "framer-motion";
import { Tag } from "../ui/tag";

interface SectionHeaderProps {
  title: string;
  tagText: string;
  tagVariant?: "white" | "black";
  textVariant?: "white" | "black"; // Новый пропс для цвета текста
  description?: string; // Дополнительно можно передавать описание
}

export function SectionHeader({
  title,
  tagText,
  tagVariant = "black",
  textVariant = "black",
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col space-y-4 order-2 sm:order-1">
        <h2 className={`text-2xl sm:text-4xl font-bold text-center sm:text-left ${textVariant === "black" ? "text-black" : "text-white"}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg max-w-3xl ${textVariant === "black" ? "text-black" : "text-white"}`}>
            {description}
          </p>
        )}
      </div>
      <div className="order-1 sm:order-2 mb-4 sm:mb-0 flex justify-center sm:justify-end">
        <Tag text={tagText} variant={tagVariant} />
      </div>
    </motion.div>
  );
}
