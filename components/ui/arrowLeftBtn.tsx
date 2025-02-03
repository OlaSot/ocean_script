"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      transition={{ type: 'spring', stiffness: 300, damping: 20 }} 
      className={cn(
        `flex items-center justify-center gap-2 bg-[#0044F1] text-white rounded-full 
         transition-colors duration-300 hover:bg-white hover:text-[#0044F1] 
         px-4 py-2 sm:px-6 sm:py-3 
         w-full sm:w-auto`, 
      )}
    >
      <Image src="/btnArr.svg" alt="Arrow Icon" width={24} height={24} />
      <span>{text}</span>
    </motion.button>
  );
};

export default ArrowLeftButton;
