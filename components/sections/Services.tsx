"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Container } from "../Container";
import { Tag } from "../ui/tag";
import ArrowBtn from "@/components/ui/arrowLeftBtn";

interface Service {
  title: string;
  description: string;
  isActive?: boolean;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
  },
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
  },
  {
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
  },
  {
    title: "Digital Strategy",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
  },
  {
    title: "Cloud Solutions",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
  },
  {
    title: "API Integration",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-[url('/Services.webp')] bg-cover bg-start rounded-[40px] ">
      <Container>
      <motion.div
          className="mb-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="order-2 sm:order-1 text-4xl font-bold text-center sm:text-left">
          Services</div>
          <div className="order-1 sm:order-2 mb-4 sm:mb-0 flex justify-center sm:justify-end">
          <Tag text={"Our services"} />
          </div>
          </motion.div>
        <div className="w-full  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] auto-rows-fr">
            {" "}
            
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                index={index}
                isActive={service.isActive}
              />
            ))}
          </div>
        </div>
        <div className="btn">
          <ArrowBtn text="Send request" />
        </div>
      </Container>
    </section>
  );
}
