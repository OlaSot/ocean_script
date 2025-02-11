"use client";

import { motion } from "framer-motion";
import ArrowRightButton from "./arrowRightBtn";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  image?: string;
  href: string;
}

export function ServiceCardServices({
  title,
  description,
  index,
  image,
  href
}: ServiceCardProps) {
  return (
    <Link href={href} className="block no-underline text-inherit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative p-5 rounded-[20px] border bg-white md:min-h-[280px] flex flex-col justify-between 
        transition duration-300 overflow-hidden bg-[url('/whiteBack.webp')] bg-cover hover:shadow-lg"
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="absolute bottom-0 right-[-45px] w-[200px] h-[200px] object-contain max-w-full"
          />
        )}

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <h3 className="text-[22px] font-bold text-black leading-tight">
              {title}
            </h3>
          </div>
          <p className="text-[16px] mb-4 text-black/90 leading-relaxed max-w-[80%]">
            {description}
          </p>
        </div>

        <ArrowRightButton text="Learn more" arrow={true} show={true} />
      </motion.div>
    </Link>
  );
}