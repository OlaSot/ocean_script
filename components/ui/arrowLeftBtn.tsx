"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ArrowLeftButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ArrowLeftButton: React.FC<ArrowLeftButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        `inline-flex items-center justify-center gap-2 bg-btn_color text-white rounded-full 
        transition-colors duration-300 hover:bg-white hover:text-btn_color
        px-6 py-3 min-h-[50px] text-center w-full sm:w-auto whitespace-nowrap`,
        className
      )}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300 fill-current"
        >
          <path d="M11.5 0.5C8.58262 0.5 5.78473 1.65893 3.72183 3.72183C1.65893 5.78473 0.5 8.58262 0.5 11.5C0.5 14.4174 1.65893 17.2153 3.72183 19.2782C5.78473 21.3411 8.58262 22.5 11.5 22.5C14.4174 22.5 17.2153 21.3411 19.2782 19.2782C21.3411 17.2153 22.5 14.4174 22.5 11.5C22.5 8.58262 21.3411 5.78473 19.2782 3.72183C17.2153 1.65893 14.4174 0.5 11.5 0.5ZM12.7232 15.4732V12.9674C9.6674 12.9674 7.5268 13.9442 6 16.0826C6.6116 13.0268 8.4442 9.9732 12.7232 9.3616V6.9174L17 11.1942L12.7232 15.4732Z" />
        </svg>
      </div>
      <span className="font-medium">{text}</span>
    </motion.button>
  );
};

export default ArrowLeftButton;