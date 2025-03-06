import AnimatedSection from "@/components/AnimatedSection.tsx";
import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import ValuesSection from "@/components/sections/Values";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";



export default function AboutUsPage() {
  return (
    <div>

      <PageHero
        title="About us"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/aboutus.webp"
        tagText="About"
      />
      <Container>
        <div className="mb-[150px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full flex justify-center"
            >
              <div className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gray-300 rounded-[20px]" />
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gray-600 text-lg leading-7"
            >
              <SectionHeader
                title="Our Mission"
                tagText="Who we are"
                tagVariant="black"
                textVariant="black"
              />
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc nec
                sagittis ullamcorper adipiscing. Justo gravida non elementum
                enim. Nullam vulputate varius nisi ullamcorper.
              </p>
              <p className="mt-4">
                Sit eu ultricies interdum libero auctor. Sagittis faucibus
                aenean urna volutpat quam libero potenti morbi. Volutpat sit
                nisi in et aliquet mauris potenti euismod.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </Container>
      <ValuesSection />
      <Contact />
    </div>
  );
}