import { useState, useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const [paddingClass, setPaddingClass] = useState("");

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerHeight < 1080) {
        setPaddingClass("px-4 sm:px-6 lg:px-8 xl:px-[80px] 2xl:px-[195px]");
      } else {
        setPaddingClass("px-4 sm:px-6 lg:px-8 xl:px-[125px] 2xl:px-[195px]");
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <div className={`w-full max-w-[1920px] mx-auto ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
