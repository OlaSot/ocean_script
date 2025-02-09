"use client";

import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import { Technologies } from "@/components/sections/Technologies";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/tag";
import { AdvertisingGrid } from "@/components/ui/AdvertisingGrid";
import { motion } from "framer-motion";
import Directions from "@/components/sections/Directions";
import ProjectsGrid from "@/components/ui/ProjectsGrid";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ContactShortForm from "@/components/sections/ContactShortForm";

export default function TelegramPage() {
  const logos = [
    { src: "/logos/python.svg", alt: "python" },
    { src: "/logos/docker.svg", alt: "Docker" },
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
      <PageHero
        title="Telegram bots"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/telegram.webp"
        tagText="Telegram"
      />
      <Container>
        <div className="mb-[150px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-xl md:text-3xl font-bold text-black flex flex-col gap-4">
                <div className="inline-flex">
                  <Tag text={"Service and Advantages"} variant="black" />
                </div>
                <h2>What is it and why?</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
              </motion.div>
            </motion.div>
            
            <div className="w-full">
              <AdvertisingGrid items={advantagesItems} />
            </div>
          </div>
        </div>
      </Container>

      <Directions />
      
      <section className="py-[150px]">
        <Container>
          <div>
            <SectionHeader
              title="Bots created by us"
              tagText="Bots"
              tagVariant="black"
              textVariant="black"
            />

            <ProjectsGrid />

            <motion.div
              className="btn text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ArrowLeftButton text={"Learn more"} />
            </motion.div>
          </div>
        </Container>
      </section>
      
      <Technologies logos={logos} />
      <ContactShortForm />
    </div>
  );
}