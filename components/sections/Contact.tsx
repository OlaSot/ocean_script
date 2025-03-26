"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Container } from "../Container";
import { Tag } from "../ui/tag";
import ArrowBtn from "@/components/ui/arrowLeftBtn";

const services = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Digital Marketing",
  "Cloud Solutions",
];
const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [selectedService, setSelectedService] = useState(
    "Service you're interested in*"
  );
  const [selectedBudget, setSelectedBudget] = useState("Your budget*");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const serviceRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      )
        setServiceOpen(false);
      if (
        budgetRef.current &&
        !budgetRef.current.contains(event.target as Node)
      )
        setBudgetOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputClasses =
    "w-full text-base bg-transparent border border-white rounded-full px-[30px] py-[17px] md:py-[25px] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-btn_color focus:border-transparent transition-shadow appearance-none";
  const selectClasses =
    "w-full bg-transparent  text-base border border-white rounded-full px-[30px] py-[17px] md:py-[25px] text-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-btn_color focus:border-transparent transition-shadow appearance-none";
  const dropdownClasses =
    "absolute left-0 right-0 mt-2 bg-white/10 backdrop-blur-md text-white rounded-[20px] shadow-lg overflow-y-auto z-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent";

  const dropdownMaxHeight = 3 * 48;

  return (
    <section className="relative py-20 bg-[url('/CTA.webp')] bg-fixed bg-cover overflow-hidden rounded-[40px] mb-[100px] text-white">
      <Container>
        <div className="absolute top-[-80px] left-10 w-60 h-60 pointer-events-none select-none">
          <Image
            src="/Cone-01-2.webp"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-20 right-[-80px] w-60 h-60 pointer-events-none select-none">
          <Image
            src="/Cone-01 3.webp"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-cover"
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
                <Tag text={"Contact"} />
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
                    placeholder="Your phone number*"
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

                <div className="relative" ref={serviceRef}>
                  <button
                    type="button"
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className={selectClasses}
                  >
                    {selectedService}
                    <motion.div
                      animate={{ rotate: serviceOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/dropdownVector.svg"
                        alt="Dropdown arrow"
                        width={20}
                        height={20}
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className={dropdownClasses}
                        style={{ maxHeight: dropdownMaxHeight }}
                      >
                        {services.map((service) => (
                          <li
                            key={service}
                            onClick={() => {
                              setSelectedService(service);
                              setServiceOpen(false);
                            }}
                            className="px-4 py-3 cursor-pointer hover:bg-white/20 transition h-12"
                          >
                            {service}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative" ref={budgetRef}>
                  <button
                    type="button"
                    onClick={() => setBudgetOpen(!budgetOpen)}
                    className={selectClasses}
                  >
                    {selectedBudget}
                    <motion.div
                      animate={{ rotate: budgetOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/dropdownVector.svg"
                        alt="Dropdown arrow"
                        width={20}
                        height={20}
                       
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {budgetOpen && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className={dropdownClasses}
                        style={{ maxHeight: dropdownMaxHeight }}
                      >
                        {budgetRanges.map((range) => (
                          <li
                            key={range}
                            onClick={() => {
                              setSelectedBudget(range);
                              setBudgetOpen(false);
                            }}
                            className="px-4 py-3 cursor-pointer hover:bg-white/20 transition h-12"
                          >
                            {range}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-0">
                  <div className="w-full text-left">
                    <ArrowBtn text={"Continue"} className="w-full sm:w-auto" />
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
