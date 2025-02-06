"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export function Contact() {
  return (
    <section className="relative py-20 bg-[url('/CTA.webp')] bg-cover overflow-hidden rounded-[40px] mb-[150px] text-white ">
      <Container>
        <div className="absolute top-[-80px] left-10 w-60 h-60 ">
          <Image
            src="/Cone-01-2.webp"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-20 right-[-80px] w-60 h-60 ">
          <Image
            src="/Cone-01 3.webp"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block">
                <Tag text={"Contact"} />
              </div>
              <h2 className="text-4xl font-bold">
                Let's discuss your tasks.
                <br />
                Contact today!
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=" p-5"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your phone number*"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email*"
                    className="input"
                  />
                </div>
                <div>
                  <select className="input">
                    <option value="">Service you're interested in*</option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="text-black"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className="input">
                    <option value="">Your budget*</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="text-black">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center justify-center gap-4 w-full">
                  <div className="w-1/2 flex justify-center">
                    <ArrowBtn text={"Continue"} className="w-full" />
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <p className="text-xs text-white/60 text-center w-full">
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
