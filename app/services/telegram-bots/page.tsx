import { Container } from "@/components/Container";
import  Technologies  from "@/components/sections/Technologies";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/tag";
import { AdvertisingGrid } from "@/components/ui/AdvertisingGrid";
import Directions from "@/components/sections/Directions";
import ProjectsGrid from "@/components/ui/ProjectsGrid";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServicesGrid } from "@/components/ui/ServicesGrid";
import { Metadata } from "next";
import ContactShortForm from "@/components/sections/ContactShortForm";
import AnimatedSection from "@/components/AnimatedSection.tsx";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Telegram Bots | Ocean Script - Digital Agency",
    description:
      "Discover Telegram bot development services at Ocean Script, enhancing your business with automation.",
    openGraph: {
      title: "Telegram Bots | Ocean Script - Digital Agency",
      description:
        "Discover Telegram bot development services at Ocean Script, enhancing your business with automation.",
      images: ["/tgbots.jpg"],
    },
  };
};

export default function TelegramPage() {
  const services = [
    {
      title: "CRM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
      image: "/figures/Untitled-1-06.png",
      href: "/services/crm-erp",
    },
    {
      title: "Payment systems",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
      image: "/figures/Untitled-1-01.png",
      href: "/services/payment-systems",
    },
    {
      title: "Websites",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.",
      image: "/figures/Untitled-1-04.png",
      href: "/services/websites",
    },
  ];

  const logos = [
    { src: "/logos/python.svg", alt: "Python programming language" },
    { src: "/logos/docker.svg", alt: "Docker containerization platform" },
  ];

  const advantagesItems = [
    {
      number: "01",
      title: "NOTIFICATIONS",
      subtitle: "POSIBILITIES",
      isDark: false,
    },
    { number: "02", title: "SUPPORT", subtitle: "POSIBILITIES", isDark: true },
    { number: "03", title: "SALES", subtitle: "POSIBILITIES", isDark: false },
  ];

  return (
    <div>
      <AnimatedSection>
        <PageHero
          title="Telegram bots"
          description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
          bg="/tgbots.jpg"
          tagText="Telegram"
        />
      </AnimatedSection>
      <Container>
        <div className="mb-[150px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col gap-6"
            >
              <div className="text-xl md:text-3xl font-bold text-black flex flex-col gap-4">
                <div className="inline-flex">
                  <Tag text="Service and Advantages" variant="black" />
                </div>
                <h2>What is it and why?</h2>
              </div>

              <AnimatedSection
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg leading-7"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc
                  nec sagittis ullamcorper adipiscing. Justo gravida non
                  elementum enim. Nullam vulputate varius nisi ullamcorper.
                  Interdum viverra eget odio mattis mollis. Sit eu ultricies
                  interdum libero auctor. Sagittis faucibus aenean urna volutpat
                  quam libero potenti morbi. Volutpat sit nisi in et aliquet
                  mauris potenti euismod. Tortor fermentum dolor amet fermentum
                  sit est duis pretium praesent. Sed egestas fermentum dui
                  bibendum molestie erat. Viverra aliquam posuere consectetur
                  nisi.
                </p>
              </AnimatedSection>
            </AnimatedSection>

            <div className="w-full">
              <AdvertisingGrid items={advantagesItems} />
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <SectionHeader
          title="Integration with"
          tagText="Integration"
          tagVariant="black"
          textVariant="black"
        />
        <div>
          <ServicesGrid services={services} />
        </div>
      </Container>

      <section className="py-[150px]">
        <Container>
          <div>
            <SectionHeader
              title="Bots created by us"
              tagText="Bots"
              tagVariant="black"
              textVariant="black"
            />

            <ProjectsGrid selectedCategory="all" />

            <AnimatedSection
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="btn text-center mt-8"
            >
              <ArrowLeftButton text="Learn more" />
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <Technologies logos={logos} />
      <ContactShortForm />
    </div>
  );
}