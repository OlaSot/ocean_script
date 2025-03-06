import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Technologies } from "@/components/sections/Technologies";
import { ImgContainer } from "@/components/ImgContainer";
import { Contact } from "@/components/sections/Contact";
import ArrowLeftButton from "@/components/ui/arrowLeftBtn";
import { Tag } from "@/components/ui/tag";
import { ProjectData } from "@/types/types";
import AnimatedSection from "../AnimatedSection.tsx";


interface ProjectUiProps {
  projectData: ProjectData;
}

export default function ProjectUi({ projectData }: ProjectUiProps) {
  return (
    <div>
      <PageHero
        title={projectData.siteData.name}
        description={projectData.siteData.description}
        bg={projectData.heroSection.bg}
        tagText={projectData.heroSection.tagText}
      />

      <Container>
        <SectionHeader
          title="Main screen"
          tagText="Case"
          tagVariant="black"
          textVariant="black"
        />
        <ImgContainer>
          <img
            src={projectData.images[0].src}
            alt={projectData.images[0].alt}
            className="w-full h-auto"
          />
        </ImgContainer>
      </Container>

      <AnimatedSection>
        <Technologies logos={projectData.logos} />
      </AnimatedSection>

      <Container>
        <section className="my-10">
          <SectionHeader
            title="Some title will be here i think"
            tagText="Case"
            tagVariant="black"
            textVariant="black"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            <AnimatedSection
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-4"
            >
              <div className="grid grid-rows-4 gap-y-4 text-base md:text-lg">
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Категория:</span>
                  <span className="text-btn_color font-semibold">
                    {projectData.sections.gridValues.category}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Локация:</span>
                  <span className="text-btn_color font-semibold">
                    {projectData.sections.gridValues.location}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Цена:</span>
                  <span className="text-btn_color font-semibold">
                    {projectData.sections.gridValues.price}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-medium w-[100px]">Сроки:</span>
                  <span className="text-btn_color font-semibold">
                    {projectData.sections.gridValues.timeline}
                  </span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <p>{projectData.sections.description}</p>
            </AnimatedSection>
          </div>

          <ImgContainer>
            <img
              src={projectData.images[1].src}
              alt={projectData.images[1].alt}
              className="w-full h-auto"
            />
          </ImgContainer>
        </section>

        <section className="my-20">
          <AnimatedSection>
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/2">
                <Tag text="Case" variant="black" />
                <h2 className="text-2xl mt-[20px] sm:text-4xl sm:text-left font-bold mb-6 leading-snug md:leading-tight lg:leading-tight">
                  Some title will be here I think
                </h2>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg max-w-4xl mx-auto mb-6">
                  {projectData.sections.description}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <ImgContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projectData.squareImages.map((image, index) => (
                <AnimatedSection
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-[50px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </AnimatedSection>
              ))}
            </div>
          </ImgContainer>
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
              {projectData.mobImages.map((image, index) => (
                <AnimatedSection
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative w-full max-w-[275px] aspect-[9/16] bg-gray-200 rounded-[40px] ${
                    index === 1 || index === 3 ? "top-24" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatedSection>
              ))}
            </div>
          </ImgContainer>
        </section>

        <section className="h-screen hidden md:block">
          <SectionHeader
            title="Some title"
            tagText="Case"
            tagVariant="black"
            textVariant="black"
          />
          <div className="relative mt-[-200px] flex flex-col gap-8 items-center cube-wrap">
            <div className="cube cube-l laptop w-[800px] h-[800px] bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
              <img
                src={projectData.images[2].src}
                alt={projectData.images[2].alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="cube cube-m mobile w-[400px] h-[400px] bg-gray-200 rounded-[30px] shadow-lg overflow-hidden">
              <img
                src={projectData.images[3].src}
                alt={projectData.images[3].alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <section className="mt-[20%] flex flex-col items-center">
              <ArrowLeftButton text="Learn more" />
            </section>
          </div>
        </section>

      
      </Container>  
      <div className="mt-[20%]">
          <Contact />
        </div>
    </div>
  );
}