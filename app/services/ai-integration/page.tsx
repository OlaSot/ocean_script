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
import { DirectionsGrid } from "@/components/ui/DirectionsGrid";
import Directions from "@/components/sections/Directions";

export default function AdvertisingPage() {
  const logos = [
    { src: "/logos/python.svg", alt: "python" },
    { src: "/logos/docker.svg", alt: "Docker" },
    { src: "/logos/cloud.svg", alt: "Cloud" },
  ];

  const advantagesItems = [
    {
      number: "01",
      title: "SAVING TIME",
      subtitle: "ADVANTAGE",
      isDark: false,
    },
    {
      number: "02",
      title: "PROCESS OPTIMIZATION",
      subtitle: "ADVANTAGE",
      isDark: true,
    },
  ];

  return (
    <div>
      <PageHero
        title="AI Integration"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/ai.webp"
        tagText="Ai"
      />
      <Container>
        <div className="mb-[150px]">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <motion.div
                className="text-[40px] font-bold text-black flex flex-col gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex">
                  <Tag text={"Service and Advantages"} variant="black" />
                </div>
                <h2>What is it and why?</h2>
              </motion.div>

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
              <AdvertisingGrid items={advantagesItems} />
            </div>
          </div>
        </div>
      </Container>

      <Directions />

      <Portfolio />
      <Technologies logos={logos} />
      <Contact />
    </div>
  );
}
