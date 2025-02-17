"use client";

import { useState, useEffect } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/Container";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Technologies } from "@/components/sections/Technologies";
import { ImgContainer } from "@/components/ImgContainer";
import { Contact } from "@/components/sections/Contact";
import siteData from "@/data/data.json";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { motion } from "framer-motion";

export default function AllgaeuTravelPage() {
  console.log("Loaded JSON:", siteData);

  return (
    <div>
      <PageHero
        title={siteData.siteData.name}
        description={` ${siteData.siteData.description}`}
        bg={siteData.heroSection.bg}
        tagText={siteData.heroSection.tagText}
      />

      <Container>
        <SectionHeader
          title={"Main screen"}
          tagText={"Case"}
          tagVariant={"black"}
          textVariant={"black"}
        />
      </Container>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Technologies logos={siteData.logos} />
      </motion.div>

      <Container>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ImgContainer>
            <Image
              alt={siteData.images[0].alt}
              src={siteData.images[0].src}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </ImgContainer>
        </motion.div>

        <section className="my-10">
          <SectionHeader
            title={"Some title will be here i think"}
            tagText={"Case"}
            tagVariant="black"
            textVariant="black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            <motion.div
              className="space-y-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-500">Category:</span>
                <span className="text-blue-600 font-medium">
                  {siteData.sections.gridValues?.category}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-500">Location:</span>
                <span className="text-blue-600 font-medium">
                  {siteData.sections.gridValues?.location}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-500">Price:</span>
                <span className="text-blue-600 font-medium">
                  {siteData?.sections.gridValues.price}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-500">Timeline:</span>
                <span className="text-blue-600 font-medium">
                  {siteData.sections.gridValues.timeline}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700"> {siteData.sections.description}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImgContainer>
              <Image
                alt={siteData.images[1].alt}
                src={siteData.images[1].src}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </ImgContainer>
          </motion.div>
        </section>

        <section className="h-100vh">
          <SectionHeader
            title="Some title"
            tagText="Case"
            tagVariant="black"
            textVariant="black"
          />

          <div className="relative mt-[-200px] flex flex-col gap-8 items-center cube-wrap">
            <div className="cube cube-l laptop w-[800px] h-[500px] bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={siteData.images[2].src}
                  alt={siteData.images[2].alt}
                  fill
                  className="object-cover object-top"
                  priority
                  quality={100}
                />
              </div>
            </div>

            <div className="cube cube-m mobile w-[200px] h-[400px] bg-gray-200 rounded-[30px] shadow-lg overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={siteData.images[3].src}
                  alt={siteData.images[3].alt}
                  fill
                  className="object-cover object-top"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>

          <section className="mt-[20%] flex flex-col items-center">
            <ArrowLeftButton text="Learn more" />
          </section>
        </section>
      </Container>
      <div className="mt-[20%]">
        <Contact />
      </div>
    </div>
  );
}
