"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ArrowRightButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
  isHovered?: boolean; 
}

const ArrowRightButton: React.FC<ArrowRightButtonProps> = ({
  text,
  onClick,
  className = "",
  arrow = false,
  isHovered = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        flex justify-center items-center gap-2 px-6 py-3 rounded-full text-lg font-medium 
        transition w-full self-end mt-auto ${className} 
        ${
          isHovered
            ? "bg-white text-btn_color border border-btn_color" 
            : "bg-btn_color text-white hover:bg-white hover:text-btn_color border border-transparent"
        }
      `}
    >
      <span>{text}</span>
      {arrow && <ArrowRight size={20} />}
    </motion.button>
  );
};

export default ArrowRightButton;
