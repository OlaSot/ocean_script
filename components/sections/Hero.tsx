"use client";

import { motion } from "framer-motion";
import { Stats } from "@/components/ui/Stats";
import ArrowBtn from "@/components/ui/arrowLeftBtn";
import { Tag } from "../ui/tag";

export function Hero() {
  return (
    <section className="relative min-h-screen w-screen max-w-full flex flex-col justify-center overflow-hidden rounded-b-[40px]">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/mainPbg.png')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tag text={"Web agency"} />
        </motion.div>

        <motion.h1
          className="text-[45px] max-w-[350px] md:max-w-[850px] leading-[60px] md:text-7xl md:leading-[100px] font-extrabold my-[22px] h1080:text-[60px] h1080:leading-[80px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Ideas into Digital Marvels
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-12 max-w-[350px] md:max-w-[850px] mx-auto
            "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum
          vulputate adipiscing condimentum. Velit facilisis sem cras phasellus
          ullamcorper varius placerat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-auto"
        >
          <ArrowBtn text="Go to services" />
        </motion.div>

        <Stats />
      </div>
    </section>
  );
}
