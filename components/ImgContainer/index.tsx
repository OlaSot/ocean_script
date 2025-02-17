import React from "react";

interface ImgContainerProps {
  children: React.ReactNode;
  className?: string; 
}

export const ImgContainer = ({ children, className = "" }: ImgContainerProps) => {
  return (
    <div
      className={`w-full max-w-[1920px] px-[130px] mx-auto pt-[50px] pb-[150px] ${className}`}
    >
      {children}
    </div>
  );
};
