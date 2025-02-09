"use client";

import { motion } from "framer-motion";

interface AdvertisingItem {
  number: string;
  title: string;
  subtitle?: string;
  isDark?: boolean;
}

interface AdvertisingGridProps {
  items: AdvertisingItem[];
}

export function AdvertisingGrid({ items }: AdvertisingGridProps) {
  const gridClass =
    items.length === 2 || items.length === 3
      ? "grid grid-cols-1 gap-6 w-full" 
      : "grid grid-cols-1 md:grid-cols-2 gap-6 w-full";

  const minHeightClass =
    items.length === 2
      ? "min-h-[300px]" 
      : items.length === 3
      ? "min-h-[250px]" 
      : "min-h-[320px]"; 

  return (
    <div className="w-full">
      <div className={gridClass}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative w-full p-6 rounded-[30px] shadow-lg overflow-hidden flex flex-col justify-end ${minHeightClass}
            ${item.isDark ? "bg-[url('/stagesDark.webp')] bg-cover text-white" : "bg-[url('/stagesBgWhite.webp')] bg-cover text-black"}`}
          >
            <span className="absolute top-4 left-4 text-lg font-bold opacity-50 text-btn_color">
              ({item.number})
            </span>
            <div>
              {item.subtitle && (
                <span className="absolute top-10 left-4 text-base md:text-[20px] font-medium uppercase text-btn_color">
                  {item.subtitle}
                </span>
              )}
              <h3 className="text-[30px] sm:text-[40px] font-bold">{item.title}</h3>
            </div>
            <span className="absolute top-4 right-4 w-3 h-3 bg-gray-400 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}