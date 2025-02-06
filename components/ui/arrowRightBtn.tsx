"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

interface ArrowRightButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
  show?: boolean; 
}

const ArrowRightButton: React.FC<ArrowRightButtonProps> = ({
  text,
  onClick,
  className,
  arrow,
  show = false, 
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm font-medium 
        transition bg-btn_color text-white hover:text-btn_color hover:bg-white 
        max-w-[140px] w-full ${className} 
        ${show ? 'hidden sm:inline-flex' : ''} 
      `}
    >
      <span>{text}</span>
      {arrow && <ArrowRight size={16} />}
    </motion.button>
  );
};

export default ArrowRightButton;
