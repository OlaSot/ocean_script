"use client";

import { motion } from "framer-motion";
import ArrowRightButton from "./arrowRightBtn";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  isActive?: boolean; 
}

export function ServiceCard({ title, description, index, isActive }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-2xl border min-h-[250px] flex flex-col justify-between border-white bg-transparent  hover:bg-[url('/Card.webp')] transition duration-300  hover:shadow-lg cursor-pointer`}
    >
      <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      </div>
     <ArrowRightButton text={"Learn more"} arrow={true} show={true}/>
    </motion.div>
  );
}
