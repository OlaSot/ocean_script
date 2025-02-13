interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Container({ children, className = '' }: ContainerProps) {
    return (
      <div
        className={`w-full max-w-[1920px] mx-auto 
                    px-4 sm:px-6  lg:px-8 
                    xl:px-[80px] 2xl:px-[195px] 
                    ${className} h1080:px-[125px]`}
      >
        {children}
      </div>
    );
  }
  