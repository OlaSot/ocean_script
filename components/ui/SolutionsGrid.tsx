"use client";

import { motion } from "framer-motion";
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
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    price: "from 2000$",
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    price: "from 2000$",
  },
  {
    title: "Corporate websites",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    price: "from 2000$",
  },
  {
    title: "Online stores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    price: "from 2000$",
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    price: "from 2000$",
  },
  {
    title: "Corporate websites",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    price: "from 2000$",
  },
];

export function SolutionsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] my-[40px]">
      {solutions.map((solution, index) => (
       <motion.div
       key={index}
       className={`group p-6 rounded-[20px] border border-gray-700 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[250px]
         bg-transparent hover:bg-[url('/stagesBgWhite.webp')] hover:bg-cover cursor-pointer hover:shadow-lg`}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.1 }}
     >
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-black">{solution.title}</h3>
            <p className="text-sm text-white group-hover:text-black mt-2">{solution.description}</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <ArrowRightButton text="Learn more" arrow={true} show={true} />
            <span className="text-btn_color font-medium">{solution.price}</span>
          </div>
        </motion.div>
      ))} 
    </div>
  );
}
