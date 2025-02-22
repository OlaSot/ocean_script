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
import { Tag } from "@/components/ui/tag";

export default function AllgaeuTravelPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {/* Первый блок с изображением */}
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
              <div className="grid grid-rows-4 gap-y-4 text-base md:text-lg">
                {/* Category */}
                <div className="flex items-center space-x-6">
                  <span className="font-medium  w-[100px]">Category:</span>
                  <span className="text-btn_color font-semibold">
                    {siteData.sections.gridValues?.category}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-6">
                  <span className="font-medium  w-[100px]">Location:</span>
                  <span className="text-btn_color font-semibold">
                    {siteData.sections.gridValues?.location}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Price:</span>
                  <span className="text-btn_color font-semibold">
                    {siteData?.sections.gridValues.price}
                  </span>
                </div>

                {/* Timeline */}
                <div className="flex items-center space-x-6">
                  <span className="font-medium  w-[100px]">Timeline:</span>
                  <span className="text-btn_color font-semibold">
                    {siteData.sections.gridValues.timeline}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p> {siteData.sections.description}</p>
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

        {/* Блок с текстом и картинками */}
        <section className="my-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-between items-center">
              {/* Левая колонка с заголовком */}
              <div className="w-full md:w-1/2 ">
                <Tag text={"Case"} variant="black" />
                <h2 className="text-2xl mt-[20px] sm:text-4xl  sm:text-left font-bold mb-6 leading-snug md:leading-tight lg:leading-tight">
                  Some title will be here I think
                </h2>
              </div>

              {/* Правая колонка с текстом */}
              <div className="w-full md:w-1/2 ">
                <p className="text-base md:text-lg max-w-4xl mx-auto mb-6">
                  Lorem ipsum dolor sit amet consectetur. Cursus et eu nunc nec
                  sagittis elementum interdum. Ante gravida eu sed elementum
                  sem. Natum nunc eu cursus elementum sed. Sed elementum cursus
                  elementum sed.
                </p>
              </div>
            </div>

            {/* Блок с квадратными изображениями */}
            <ImgContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {siteData.squareImages.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-[50px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </ImgContainer>
          </motion.div>
        </section>

        <section className="my-10">
          {/* Заголовок */}
          <SectionHeader
            title="Some title"
            tagText="Case"
            tagVariant="black"
            textVariant="black"
          />

          <ImgContainer className="min-h-[700px] flex flex-col justify-center">
            <div className="mt-10 grid grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
              {siteData.mobImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-full max-w-[275px] aspect-[9/16] bg-gray-200 rounded-[40px] ${
                    index === 1 || index === 3 ? "top-24" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    priority
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </ImgContainer>
        </section>

        {/* Блок для десктопов */}
        {isDesktop && (
          <section className="h-screen">
            <SectionHeader
              title="Some title"
              tagText="Case"
              tagVariant="black"
              textVariant="black"
            />

            <div className="relative mt-[-200px] flex flex-col gap-8 items-center cube-wrap">
              <div className="cube cube-l laptop w-[800px] h-[800px] bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
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

              <div className="cube cube-m mobile w-[400px] h-[400px] bg-gray-200 rounded-[30px] shadow-lg overflow-hidden">
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

              <section className="mt-[20%] flex flex-col items-center">
                <ArrowLeftButton text="Learn more" />
              </section>
            </div>
          </section>
        )}
      </Container>

      <div className="mt-[20%]">
        <Contact />
      </div>
    </div>
  );
}
