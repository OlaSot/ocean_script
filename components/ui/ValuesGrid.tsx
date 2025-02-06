"use client";

import { motion } from "framer-motion";

interface ValueItem {
  number: string;
  title: string;
  subtitle?: string;
  isDark?: boolean;
}

interface ValuesGridProps {
  items: ValueItem[];
}

export function ValuesGrid({ items }: ValuesGridProps) {

  const gridClass =
    items.length === 3
      ? "grid grid-cols-1 sm:grid-cols-3 gap-6"
      : "grid grid-cols-2 gap-6"; 

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative p-6 rounded-[20px] shadow-lg overflow-hidden flex flex-col justify-end min-h-[180px] sm:min-h-[220px] lg:min-h-[250px]
          ${item.isDark ? "bg-[url('/stagesDark.webp')] bg-cover text-white" : "bg-[url('/stagesBgWhite.webp')] bg-cover text-black"}`}
        >
   
          <span className="absolute top-4 left-4 text-sm font-medium uppercase text-blue-600">
            {item.subtitle || "VALUE"}
          </span>

          <h3 className="text-[24px] sm:text-[30px] font-bold">{item.title}</h3>


          <span className="absolute top-4 right-4 w-3 h-3 bg-gray-400 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}
