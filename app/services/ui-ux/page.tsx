import { Container } from "@/components/Container";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import TypesOfSolutions from "@/components/sections/TypesOfSolutions";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WorkProcessSteps } from "@/components/ui/WorkProcessSteps";
import { Metadata } from "next";
import ContactShortForm from "@/components/sections/ContactShortForm";
import AnimatedSection from "@/components/AnimatedSection.tsx";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "UI/UX Design | Ocean Script - Digital Agency",
    description:
      "Explore UI/UX design services at Ocean Script, creating intuitive and engaging user experiences.",
    openGraph: {
      title: "UI/UX Design | Ocean Script - Digital Agency",
      description:
        "Explore UI/UX design services at Ocean Script, creating intuitive and engaging user experiences.",
      images: ["/uiBG.webp"],
    },
  };
};

export default function WebDevelopmentPage() {
  const logos = [{ src: "/logos/figma.svg", alt: "Figma design tool" }];

  const stages = [
    {
      number: "01",
      title: "RESEARCH",
      expanded: false,
    },
    { number: "02", title: "PROTOTYPE", expanded: false },
    { number: "03", title: "CONCEPT", expanded: false },
    { number: "04", title: "TEST", expanded: false },
  ];

  return (
    <div>
      <AnimatedSection>
        <PageHero
          title="UI/UX Design"
          description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
          bg="/uiBG.webp"
          tagText="UI/UX"
        />
      </AnimatedSection>
      <Container>
        <div className="mb-[150px]">
          <SectionHeader
            title="Importance of Design"
            tagText="Design"
            tagVariant="black"
            textVariant="black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 text-lg leading-7"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur. Curabitur nunc nec
                sagittis ullamcorper adipiscing. Integer gravida morbi
                elementum. Feugiat mauris est elementum bibendum purus elit.
                Neque maecenas sed sollicitudin fermentum diam volutpat mi nunc.
                Sit ultrices interdum pellentesque non semper sagittis faucibus
                amet nunc turpis.
              </p>
              <p className="mt-4">
                Pellentesque ac enim nunc rutrum et accumsan. Turpis euismod
                feugiat purus malesuada fames nunc imperdiet lorem. Sed turpis
                ut tincidunt ultricies aliquet justo fringilla. Consequat amet
                id cras tellus.
              </p>
            </AnimatedSection>

            <WorkProcessSteps stages={stages} />
          </div>
        </div>
      </Container>
      <TypesOfSolutions />
      <Portfolio />
      <Technologies logos={logos} />
      <ContactShortForm />
    </div>
  );
}