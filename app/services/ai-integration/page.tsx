import { Container } from "@/components/Container";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AdvertisingGrid } from "@/components/ui/AdvertisingGrid";
import Directions from "@/components/sections/Directions";
import ContactShortForm from "@/components/sections/ContactShortForm";
import AnimatedSection from "@/components/AnimatedSection.tsx";



export default function AdvertisingPage() {
  const logos = [
    { src: "/logos/python.svg", alt: "Python programming language" },
    { src: "/logos/docker.svg", alt: "Docker containerization platform" },
    { src: "/logos/cloud.svg", alt: "Cloud computing services" },
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
      <AnimatedSection>
        <PageHero
          title="AI Integration"
          description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
          bg="/ai.webp"
          tagText="Ai"
        />
      </AnimatedSection>
      <Container>
        <div className="mb-[150px]">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <SectionHeader
                title="What is it and why?"
                tagText="Service and Advantages"
                tagVariant="black"
                textVariant="black"
              />

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
      <ContactShortForm />
    </div>
  );
}