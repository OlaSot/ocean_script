import { Container } from "@/components/Container";
import dynamic from "next/dynamic";
import { Tag } from "./tag";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection.tsx";


const ArrowLeftButton = dynamic(() => import("./arrowLeftBtn"), {
  loading: () => <div style={{ width: 160, height: 40 }} />,
});

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
          quality={70}
          sizes="100vw"
        />
      </div>


      <Container className="relative z-10 text-center">
        {tagText && (
          <AnimatedSection
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-[20px] md:mb-6 inline-block"
          >
            <Tag text={tagText} />
          </AnimatedSection>
        )}

        <AnimatedSection
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[45px] md:text-[70px] md:text-6xl font-bold text-white mb-6"
        >
          <h1>{title}</h1>
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
