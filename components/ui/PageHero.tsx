import { Container } from "@/components/Container";
import ArrowLeftButton from "./arrowLeftBtn";
import { Tag } from "./tag";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection.tsx";


interface PageHeroProps {
  title: string;
  description: string;
  showButton?: boolean;
  bg: string;
  tagText?: string;
}

export function PageHero({
  title,
  description,
  showButton = true,
  bg,
  tagText,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden mb-[150px]"
      role="banner"
    >
      <div className="absolute inset-0 z-0 bg-cover bg-start rounded-b-xl">
        <Image
          src={bg}
          alt="Background image for page hero"
          fill
          className="object-cover rounded-b-xl"
          priority
        />
      </div>

      <Container className="relative z-10 text-center">
        {tagText && (
          <AnimatedSection
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-[20px] md:mb-6 inline-block"
          >
            <Tag text={tagText} />
          </AnimatedSection>
        )}

        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[45px] md:text-[70px] md:text-6xl font-bold text-white mb-6"
        >
          <h1>{title}</h1>
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-white max-w-4xl mx-auto mb-6"
        >
          <p>{description}</p>
        </AnimatedSection>

        {showButton && (
          <div className="flex justify-center">
            <ArrowLeftButton text="Leave request" />
          </div>
        )}
      </Container>
    </section>
  );
}

