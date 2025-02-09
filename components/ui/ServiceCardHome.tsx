"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowRightButton from "./arrowRightBtn";
import Link from "next/link";


interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  href: string; 
}

export function ServiceCardHome({ title, description, index, href }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; 

  return (
    <Link href={href} >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative h-[216px] p-6 rounded-[20px] border border-white bg-transparent md:min-h-[370px] flex flex-col justify-between 
        overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 bg-no-repeat bg-cover pointer-events-none
          bg-[url('/Card.webp')] shadow-lg
          ${isHovered ? "opacity-100" : ""}`}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <h3 className="text-[20px] sm:text-[28px] font-bold text-white">{title}</h3>
          </div>
          <p className="text-[14px] sm:text-[18px] mb-4 text-white">{description}</p>
        </div>

        <div className="relative z-10 hidden sm:block">
        <ArrowRightButton text="Learn more" arrow={true} show={true} isHovered={isHovered} />
      </div>
      </motion.div>
    </Link>
  );
}
