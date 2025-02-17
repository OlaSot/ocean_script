"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../Container";
import { Tag } from "../ui/tag";
import ArrowBtn from "@/components/ui/arrowLeftBtn";

export default function ContactTask() {
  const inputClasses =
    "w-full text-base bg-transparent border border-white rounded-full px-[30px] py-[17px] md:py-[25px] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-btn_color focus:border-transparent transition-shadow appearance-none";

  return (
    <section className="relative py-20 bg-[url('/contacts2.webp')] bg-fixed bg-cover overflow-hidden rounded-b-[40px]  mb-[100px] text-white">
      <Container>
        <div className="absolute top-[80px] left-[-60px] w-60 h-60 pointer-events-none select-none">
          <Image
            src="/cilindr.png"
            alt="Decorative element"
            width={200}
            height={200}
            className="hidden sm:block object-cover rotate-75" 
            priority
          />
        </div>
        <div className="absolute top-[5px] right-[-90px] md:top-auto md:bottom-[150px] md:right-[-80px] w-60 h-60">

          <Image
            src="/figure1.png"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-cover rotate-200"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[550px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block">
                <Tag text="Contact" />
              </div>
              <h2 className="text-[24px] md:text-4xl font-bold">
                Let's discuss your tasks.
                <br />
                Contact today!
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative md:p-5 w-full"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name*"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your phone*"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email*"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your task*"
                    className="w-full h-[120px] bg-transparent border border-white rounded-[20px] px-[30px] py-[17px] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-btn_color focus:border-transparent transition-shadow appearance-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-0">
                  <div className="w-full text-left">
                    <ArrowBtn text="Continue" className="w-full sm:w-auto" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs text-white/60 text-center sm:text-left">
                      By clicking the "Send" button, you consent to the
                      processing of personal data.
                    </p>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
