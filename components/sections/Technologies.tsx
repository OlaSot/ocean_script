"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Tag } from "@/components/ui/tag";
import ArrowRightButton from "../ui/arrowRightBtn";
import { usePathname } from "next/navigation";

interface TechnologiesProps {
  logos: { src: string; alt: string }[];
}

const Technologies = ({ logos }: TechnologiesProps) => {
  const pathname = usePathname();
  const isProjectPage = pathname === "/project";

  const gridClasses = logos.length === 1
    ? "flex justify-center items-center w-full"
    : logos.length === 4
    ? "grid grid-cols-2 gap-6 w-full"
    : logos.length === 3
    ? "grid grid-cols-3 gap-6 w-full max-w-[900px] mx-auto"
    : logos.length === 2
    ? "grid grid-cols-2 gap-6 w-full max-w-[600px] mx-auto"
    : "grid grid-cols-2 sm:grid-cols-4 gap-6 w-full";

  return (
    <section className="mb-[100px] md:mb-[150px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:gap-5 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 lg:w-1/3 flex flex-col"
          >
            {!isProjectPage && (
              <>
                <Tag
                  text="Our Technologies"
                  variant="black"
                  className="max-w-max self-start"
                />
                <h2 className="text-2xl sm:text-4xl font-bold mt-4">
                  Technologies
                </h2>
                <div className="mt-6">
                  <ArrowRightButton
                    text="Learn more"
                    arrow={true}
                    show={true}
                  />
                </div>
              </>
            )}
            <p className="text-lg md:mt-4">
              Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum
              vulputate adipiscing condimentum. Lorem ipsum dolor sit amet
              consectetur. Viverra est eget ut ipsum vulputate adipiscing
              condimentum. Lorem ipsum dolor sit amet consectetur. Viverra est
              eget ut ipsum vulputate adipiscing condimentum. Lorem ipsum dolor
              sit amet consectetur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full my-[30px] md:w-2/3 lg:w-2/3 flex justify-center"
          >
            <div className={gridClasses}>
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className={`flex ${logos.length === 1 ? "justify-center items-center" : "justify-center"}`}
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className={`min-w-[80px] min-h-[40px] ${
                      logos.length === 1 
                        ? "w-auto h-[150px] max-h-[150px]" 
                        : "w-full h-16 sm:h-20 md:h-24 lg:h-28"
                    } object-contain`}
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Technologies;