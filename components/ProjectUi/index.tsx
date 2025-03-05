"use client";

import { useState, useEffect } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/Container";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Technologies } from "@/components/sections/Technologies";
import { ImgContainer } from "@/components/ImgContainer";
import { Contact } from "@/components/sections/Contact";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { motion } from "framer-motion";
import { Tag } from "@/components/ui/tag";
import { ProjectData } from "@/types/types";

interface ProjectUiProps {
  projectId: string;
}

export default function ProjectUi({ projectId }: ProjectUiProps) {
  const [data, setData] = useState<ProjectData | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const dataModule = await import(`@/data/siteData/${projectId}.json`);
        setData(dataModule.default);
      } catch (error) {
        console.error("Ошибка загрузки данных проекта:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [projectId]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (!data) {
    return <div>Ошибка: данные проекта не найдены</div>;
  }

  return (
    <div>
      <PageHero
        title={data.siteData.name}
        description={data.siteData.description}
        bg={data.heroSection.bg}
        tagText={data.heroSection.tagText}
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
        <Technologies logos={data.logos} />
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
              alt={data.images[0].alt}
              src={data.images[0].src}
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
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Категория:</span>
                  <span className="text-btn_color font-semibold">
                    {data.sections.gridValues.category}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Локация:</span>
                  <span className="text-btn_color font-semibold">
                    {data.sections.gridValues.location}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Цена:</span>
                  <span className="text-btn_color font-semibold">
                    {data.sections.gridValues.price}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Сроки:</span>
                  <span className="text-btn_color font-semibold">
                    {data.sections.gridValues.timeline}
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
              <p>{data.sections.description}</p>
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
                alt={data.images[1].alt}
                src={data.images[1].src}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </ImgContainer>
          </motion.div>
        </section>

        <section className="my-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/2">
                <Tag text={"Case"} variant="black" />
                <h2 className="text-2xl mt-[20px] sm:text-4xl sm:text-left font-bold mb-6 leading-snug md:leading-tight lg:leading-tight">
                  Some title will be here I think
                </h2>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg max-w-4xl mx-auto mb-6">
                  Lorem ipsum dolor sit amet consectetur. Cursus et eu nunc nec sagittis
                  elementum interdum. Ante gravida eu sed elementum sem.
                </p>
              </div>
            </div>

            <ImgContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data.squareImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-[50px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </ImgContainer>
          </motion.div>
        </section>

        <section className="my-10">
          <SectionHeader
            title="Some title"
            tagText="Case"
            tagVariant="black"
            textVariant="black"
          />

          <ImgContainer className="min-h-[700px] flex flex-col justify-center">
            <div className="mt-10 grid grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
              {data.mobImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
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
                </motion.div>
              ))}
            </div>
          </ImgContainer>
        </section>

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
                    src={data.images[2].src}
                    alt={data.images[2].alt}
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
                    src={data.images[3].src}
                    alt={data.images[3].alt}
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