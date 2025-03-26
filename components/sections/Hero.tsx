import { Stats } from "@/components/ui/Stats";
import ArrowBtn from "@/components/ui/arrowLeftBtn";
import { Tag } from "../ui/tag";
import AnimatedSection from "../AnimatedSection.tsx";
import HeroBackground from "../ui/HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-screen max-w-full flex flex-col justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-[120px]">
        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <Tag text="Web agency" />
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-[40px] max-w-[350px] md:max-w-[850px] leading-[55px] md:text-7xl md:leading-[100px] font-extrabold my-[22px] h1080:text-[60px] h1080:leading-[80px]"
        >
          Transforming Ideas into Digital Marvels
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-gray-300 mb-12 max-w-[350px] md:max-w-[850px] mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum
          vulputate adipiscing condimentum. Velit facilisis sem cras phasellus
          ullamcorper varius placerat.
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-auto"
        >
          <ArrowBtn text="Go to services" />
        </AnimatedSection>

        <Stats />
      </div>
    </section>
  );
}
