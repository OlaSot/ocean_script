"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ArrowRightButton from "./arrowRightBtn";

interface Solution {
  title: string;
  description: string;
  price: string;
}

const solutions: Solution[] = [
  {
    title: "Online stores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate",
    price: "2000$",
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate",
    price: "2000$",
  },
  {
    title: "Corporate websites",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate",
    price: "2000$",
  },
  {
    title: "Online stores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate",
    price: "2000$",
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate",
    price: "2000$",
  },
  {
    title: "Corporate websites",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate",
    price: "2000$",
  },
];

export function SolutionsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] my-[40px]">
      {solutions.map((solution, index) => (
        <motion.div
          key={index}
          className="relative p-6 rounded-[20px] border border-white transition-all duration-500 ease-in-out 
            flex flex-col justify-between min-h-[180px] md:min-h-[250px] overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 bg-no-repeat bg-cover pointer-events-none
            bg-[url('/stagesBgWhite.webp')] shadow-lg
            ${hoveredIndex === index ? "opacity-100" : ""}`}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-3 h-3 rounded-full transition-colors duration-300 ${hoveredIndex === index ? 'bg-black' : 'bg-white'}`}></span>
              <h3 className={`text-xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
                {solution.title}
              </h3>
            </div>
            <p className={`text-base mt-2 transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
              {solution.description}
            </p>
          </div>

          <div className="relative z-10 mt-6 flex items-center justify-between">
            <ArrowRightButton 
              text="Learn more" 
              arrow={true} 
              show={true} 
              isHovered={hoveredIndex === index}
            />
            <div className="flex items-center gap-1">
              <span className={`font-semibold transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
                from
              </span>
              <span className="text-btn_color font-medium">{solution.price}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}