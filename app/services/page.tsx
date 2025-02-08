"use client";

import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/ui/ServicesGrid";

const services = [
  {
    title: "Web Development",
    description: "Build modern and fast websites with our development team.",
    image: "figures/untitled-1-01.png",
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences.",
    image: "figures/untitled-1-02.png",
  },
  {
    title: "Mobile Apps",
    description: "Develop high-performance mobile applications.",
    image: "figures/untitled-1-03.png",
  },
  {
    title: "Digital Strategy",
    description: "Plan and execute effective digital strategies.",
    image: "figures/untitled-1-04.png",
  },
  {
    title: "Cloud Solutions",
    description: "Leverage cloud technologies for scalability.",
    image: "figures/untitled-1-05.png",
  },
  {
    title: "API Integration",
    description: "Seamlessly connect your apps with powerful APIs.",
    image: "figures/untitled-1-06.png",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Our services"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/our_ser_bg.webp"
        tagText="Services"
      />
      <Container>
        <div className="my-[150px]">
          <ServicesGrid services={services} />
        </div>
      </Container>
      <Contact />
    </div>
  );
}
