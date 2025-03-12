"use client";

import { useState, useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const [paddingClass, setPaddingClass] = useState("px-4 sm:px-6 lg:px-8 xl:px-[125px] 2xl:px-[195px]");


  useEffect(() => {
    const getPaddingClass = () => {
      return window.innerHeight < 1080
        ? "px-4 sm:px-6 lg:px-8 xl:px-[80px] 2xl:px-[195px]"
        : "px-4 sm:px-6 lg:px-8 xl:px-[125px] 2xl:px-[195px]";
    };

    const updatePadding = () => {
      setPaddingClass(getPaddingClass());
    };


    let timeoutId: NodeJS.Timeout | null = null;
    const debouncedResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(updatePadding, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`mx-auto w-full max-w-[1920px] ${paddingClass} ${className}`}

    >
      {children}
    </div>
  );
}