"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ArrowRightButton from "./arrowRightBtn";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  image?: string;
}

export function ServiceCard({ title, description, index, image }: ServiceCardProps) {
  const pathname = usePathname();
  const theme = pathname === "/services" ? "light" : "dark";
  const [isHovered, setIsHovered] = useState(false);

  const textColor = theme === "light" ? "text-black" : "text-white";
  const borderColor = theme === "light" ? "border-black" : "border-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-[20px] border min-h-[370px] flex flex-col justify-between
      ${borderColor} ${bgColor} overflow-hidden cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 bg-no-repeat bg-cover pointer-events-none
          ${theme === "light" ? "bg-[url('/stagesBgWhite.webp')]" : "bg-[url('/Card.webp')] shadow-lg"}
          ${isHovered ? "opacity-100" : ""}
        `}
      />

      {image && theme === "light" && (
        <div className="absolute bottom-0 right-[-60px] w-[245px] h-[120px] sm:w-[245px] sm:h-[245px] pointer-events-none">
          <div 
            className="w-full h-full transform origin-center transition-all duration-500 ease-out"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0.8)',
              filter: `blur(${isHovered ? '0px' : '10px'})`
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-3 h-3 rounded-full ${theme === "light" ? "bg-black" : "bg-white"}`}></span>
          <h3 className={`text-[24px] sm:text-[28px] font-bold ${textColor}`}>{title}</h3>
        </div>
        <p className={`text-[16px] sm:text-[18px] mb-4 ${textColor}`}>{description}</p>
      </div>

      <div className="relative z-10">
        <ArrowRightButton text="Learn more" arrow={true} show={true} isHovered={isHovered} />
      </div>
    </motion.div>
  );
}

