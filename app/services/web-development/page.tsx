"use client";

import { Container } from "@/components/Container";
import ContactShortForm from "@/components/sections/ContactShortForm";
import  Portfolio  from "@/components/sections/Portfolio";
import  Technologies  from "@/components/sections/Technologies";
import TypesOfSolutions from "@/components/sections/TypesOfSolutions";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WorkProcessSteps } from "@/components/ui/WorkProcessSteps";
import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  const stages = [
    {
      number: "01",
      title: "ANALYSIS",
      description:
        "Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.",
    },
    {
      number: "02",
      title: "PROTOTYPE",
      description:
        "Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.",
    },
    {
      number: "03",
      title: "DESIGN",
      description:
        "Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.",
    },
    {
      number: "04",
      title: "DEVELOPMENT",
      description:
        "Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.",
    },
    {
      number: "05",
      title: "LAUNCH",
      description:
        "Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.",
    },
  ];

  const logos = [
    { src: "/logos/laravel.svg", alt: "Laravel" },
    { src: "/logos/nuxt.svg", alt: "NuxtJS" },
    { src: "/logos/GO.svg", alt: "Go" },
    { src: "/logos/next.svg", alt: "Next.js" },
    { src: "/logos/node.svg", alt: "Node.js" },
    { src: "/logos/mySQL.svg", alt: "MySQL" },
    { src: "/logos/postgreS.svg", alt: "PostgreSQL" },
    { src: "/logos/mongo.svg", alt: "MongoDB" },
    { src: "/logos/redis.svg", alt: "Redis" },
    { src: "/logos/NG.svg", alt: "NGINX" },
    { src: "/logos/docker.svg", alt: "Docker" },
    { src: "/logos/aws.svg", alt: "AWS" },
  ];

  return (
    <div>
      <PageHero
        title="Web development"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/web-dev.webp"
        tagText="Web development"
      />
      <Container>
        <div className="mb-[150px]">
          <SectionHeader
            title="Web development service"
            tagText="Service"
            tagVariant="black"
            textVariant="black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
            </motion.div>

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
