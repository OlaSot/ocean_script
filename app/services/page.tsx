"use client";

import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/ui/ServicesGrid";

const services = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    image: "figures/Untitled-1-01.png",
    href: "/services/web-development",
  },
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    image: "figures/Untitled-1-02.png",
    href: "/services/ui-ux-design",
  },
  {
    title: "Advertising",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    image: "figures/Untitled-1-03.png",
    href: "/services/advertising",

  },
  {
    title: "CRM and ERP systems",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    image: "figures/Untitled-1-04.png",
    href: "/services/crm-erp",
  },
  {
    title: "AI Integration",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    image: "figures/Untitled-1-05.png",
    href: "/services/ai-integration",
  },
  {
    title: "Telegram bots",
    description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
    image: "figures/Untitled-1-06.png",
    href: "/services/telegram-bots",
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
