"use client";

import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import TypesOfSolutions from "@/components/sections/TypesOfSolutions";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/tag";
import { WorkProcessSteps } from "@/components/ui/WorkProcessSteps";
import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  const stages = [
    {
      number: "01",
      title: "ANALYSIS",
      description:
        "Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.",
      expanded: true,
    },
    { number: "02", title: "PROTOTYPE", expanded: false },
    { number: "03", title: "DESIGN", expanded: false },
    { number: "04", title: "DEVELOPMENT", expanded: false },
    { number: "05", title: "LAUNCH", expanded: false },
  ];

  const logos = [
    { src: "/logos/laravel.svg", alt: "Laravel" },
    { src: "/logos/nuxt.svg", alt: "NuxtJS" },
    { src: "/logos/go.svg", alt: "Go" },
    { src: "/logos/next.svg", alt: "Next.js" },
    { src: "/logos/node.svg", alt: "Node.js" },
    { src: "/logos/mysql.svg", alt: "MySQL" },
    { src: "/logos/postgres.svg", alt: "PostgreSQL" },
    { src: "/logos/mongo.svg", alt: "MongoDB" },
    { src: "/logos/redis.svg", alt: "Redis" },
    { src: "/logos/ng.svg", alt: "NGINX" },
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
          <motion.div
            className="text-3xl font-bold subtitle-container text-black "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Web development service</h2>
            <Tag text={"Service"} variant="black" />
          </motion.div>

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
      <Contact />
    </div>
  );
}
