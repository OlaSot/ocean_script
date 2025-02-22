"use client";

import { useState, useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const [paddingClass, setPaddingClass] = useState("px-4 sm:px-6 lg:px-8 xl:px-[125px] 2xl:px-[195px]");

  useEffect(() => {
    const updatePadding = () => {
      const newPaddingClass = window.innerHeight < 1080
        ? "px-4 sm:px-6 lg:px-8 xl:px-[80px] 2xl:px-[195px]"
        : "px-4 sm:px-6 lg:px-8 xl:px-[125px] 2xl:px-[195px]";
      
      if (newPaddingClass !== paddingClass) {
        setPaddingClass(newPaddingClass);
      }
    };

   
    updatePadding();


    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updatePadding, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [paddingClass]);

  return (
    <div 
      className={`mx-auto w-full max-w-[1920px] transition-[padding] duration-300 ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
}