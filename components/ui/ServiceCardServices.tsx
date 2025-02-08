"use client";

import { motion } from "framer-motion";
import ArrowRightButton from "./arrowRightBtn";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  image?: string;
}

export function ServiceCardServices({
  title,
  description,
  index,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-[20px] border border-black bg-white min-h-[370px] flex flex-col justify-between 
      transition duration-300 overflow-hidden bg-[url('/stagesBgWhite.webp')] bg-contain"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          width={245}
          height={245}
          className="absolute bottom-0 right-[-60px] sm:w-[245px] sm:h-[245px] object-contain max-w-full"
        />
      )}

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 rounded-full bg-black"></span>
          <h3 className="text-[24px] sm:text-[28px] font-bold text-black">
            {title}
          </h3>
        </div>
        <p className="text-[16px] sm:text-[18px] mb-4 text-black">
          {description}
        </p>
      </div>

      <ArrowRightButton text="Learn more" arrow={true} show={true} />
    </motion.div>
  );
}
