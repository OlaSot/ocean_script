"use client";

import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/tag";
import { AdvertisingGrid } from "@/components/ui/AdvertisingGrid";
import { motion } from "framer-motion";
import { Advantages } from "@/components/sections/Advantages";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ContactShortForm from "@/components/sections/ContactShortForm";

export default function AdvertisingPage() {
  const logos = [
    { src: "/logos/laravel.svg", alt: "Laravel" },
    { src: "/logos/nuxt.svg", alt: "NuxtJS" },
    { src: "/logos/GO.svg", alt: "Go" },
    { src: "/logos/mySQL.svg", alt: "MySQL" },
    { src: "/logos/postgres.svg", alt: "PostgreSQL" },
    { src: "/logos/mongo.svg", alt: "MongoDB" },
    { src: "/logos/docker.svg", alt: "Docker" },
    { src: "/logos/aws.svg", alt: "AWS" },
  ];

  const integrations = [
    {
      number: "01",
      title: "THE SITE",
      subtitle: "INTEGRATION WITH",
      isDark: false,
    },
    {
      number: "02",
      title: "TELEPHONY",
      subtitle: "INTEGRATION WITH",
      isDark: true,
    },
    {
      number: "03",
      title: "ANALYTICS",
      subtitle: "INTEGRATION WITH",
      isDark: true,
    },
    {
      number: "04",
      title: "ACCOUNTING REPORT",
      subtitle: "INTEGRATION WITH",
      isDark: false,
    },
  ];

  return (
    <div>
      <PageHero
        title="CRM & ERP - systems"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/crm.jpg"
        tagText="CRM & ERP"
      />
      <Container>
        <div className="mb-[150px]">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <SectionHeader
                title="What is it and why?"
                tagText="Service"
                tagVariant="black"
                textVariant="black"
              />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" text-lg leading-7"
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
            </div>

            <div className="flex-1">
              <AdvertisingGrid items={integrations} />
            </div>
          </div>
        </div>
      </Container>

      <Advantages />
      <Portfolio />
      <Technologies logos={logos} />
      <ContactShortForm />
    </div>
  );
}
