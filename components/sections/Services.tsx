"use client";


import { Container } from "../Container";
import { SectionHeader } from "../ui/SectionHeader";
import ArrowBtn from "@/components/ui/arrowLeftBtn";
import { ServicesGrid } from "../ui/ServicesGrid";

const services = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    href: "/services/web-development",
  },
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    href: "/services/ui-ux",
  },
  {
    title: "Advertising",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    href: "/services/advertising",
  },
  {
    title: "CRM and ERP systems",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    href: "/services/crm-erp",
  },
  {
    title: "AI Integration",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    href: "/services/ai-integration",
  },
  {
    title: "Telegram bots",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    href: "/services/telegram-bots",
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
