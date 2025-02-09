"use client";


import { Container } from "../Container";
import { SectionHeader } from "../ui/SectionHeader";
import ArrowBtn from "@/components/ui/arrowLeftBtn";
import { ServicesGrid } from "../ui/ServicesGrid";

const services = [
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
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentум.",
  },
  {
    title: "Cloud Solutions",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentум.",
  },
  {
    title: "API Integration",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentум.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-[url('/Services.webp')] bg-cover bg-start rounded-[40px]">
      <Container>
        <SectionHeader title="Services" tagText="Our services" tagVariant="white" textVariant="white" />

        <ServicesGrid services={services} />

        <div className="btn text-center mt-8">
          <ArrowBtn text="Send request" />
        </div>
      </Container>
    </section>
  );
}
