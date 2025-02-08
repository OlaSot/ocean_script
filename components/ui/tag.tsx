import { cn } from '@/lib/utils';

interface TagProps {
  text: string;
  variant?: 'white' | 'black';
  className?: string;
}

export function Tag({ text, variant = 'white', className = '' }: TagProps) {
  const baseStyle = 'inline-flex whitespace-nowrap font-light text-sm rounded-full px-3 sm:px-[18px] sm:text-[14px] md:text-lg py-2 sm:py-[10px] border';

  const variantClasses = {
    white: 'text-white border-white',
    black: 'text-black border-black',
  };

  return (
    <span className={cn(`${baseStyle} ${variantClasses[variant]}`, className)}>
      {text}
    </span>
  );
}