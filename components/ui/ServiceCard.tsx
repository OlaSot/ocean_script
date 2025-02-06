"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
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

  const hoverEffects =
    theme === "light"
      ? "bg-[url('/stagesBgWhite.webp')] bg-contain"
      : "hover:bg-[url('/Card.webp')] hover:shadow-lg cursor-pointer";

  const textColor = theme === "light" ? "text-black" : "text-white";
  const borderColor = theme === "light" ? "border-black" : "border-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-[20px] border min-h-[370px] flex flex-col justify-between transition duration-300 
      ${borderColor} ${bgColor} ${hoverEffects} overflow-hidden`} 
    >
      


      {image && theme === "light" && (
        <img
          src={image}
          alt={title}
          className="absolute bottom-0 right-[-60px] w-[245px] h-[120px] sm:w-[245px] sm:h-[245px] object-contain max-w-full" 
        />
      )}

      <div>
  
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-3 h-3 rounded-full ${theme === "light" ? "bg-black" : "bg-white"}`}></span>
          <h3 className={`text-[24px] sm:text-[28px] font-bold ${textColor}`}>{title}</h3>
        </div>
        <p className={`text-[16px] sm:text-[18px] mb-4`}>{description}</p>
      </div>

      <ArrowRightButton text={"Learn more"} arrow={true} show={true} />
    </motion.div>
  );
}
