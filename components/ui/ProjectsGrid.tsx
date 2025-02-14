"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Tag } from "../ui/tag";

interface ProjectsGridProps {
  hoveredTag: string | null;
}

// Объект с изображениями для каждого тега
const tagImages: Record<string, string[]> = {
  "Websites": ["/projects/websites1.jpg", "/projects/websites2.jpg"],
  "Online-stores": ["/projects/online-store1.jpg", "/projects/online-store2.jpg"],
  "Landing pages": ["/projects/landing1.jpg", "/projects/landing2.jpg"],
  "CRM-systems": ["/projects/crm1.jpg", "/projects/crm2.jpg"],
  "Branding and logo": ["/projects/branding1.jpg", "/projects/branding2.jpg"],
  "App design": ["/projects/app1.jpg", "/projects/app2.jpg"],
};

// Дефолтные проекты, если нет активного тега
const defaultProjects = [
  {
    title: "Clothes Marketplace",
    description: "E-commerce web store",
    image: "/Project card.webp",
    tags: ["Online store", "Web Design", "Web-development"],
  },
  {
    title: "Ukrainemart",
    description: "The first Ukrainian B2B platform for export",
    image: "/Project card (1).webp",
    tags: ["B2B", "Web Design", "Web-development"],
  },
  {
    title: "Size CRM",
    description: "CRM system for businesses",
    image: "/Project card (2).webp",
    tags: ["CRM-System", "Web Design", "Web-development"],
  },
  {
    title: "Clickwerk",
    description: "Mounting systems with pixel strength",
    image: "/Project card (3).webp",
    tags: ["Web Design", "Web-development"],
  },
];

export default function ProjectsGrid({ hoveredTag }: ProjectsGridProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {defaultProjects.map((project, index) => {
          // Если есть ховернутый тег, берем первое изображение для него
          const imageToShow =
            hoveredTag && tagImages[hoveredTag] ? tagImages[hoveredTag][index % tagImages[hoveredTag].length] : project.image;

          return (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-square max-w-[750px] mx-auto">
                <Image
                  src={imageToShow}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              </div>

              <div className="absolute top-0 left-0 flex flex-col items-start gap-2 py-[30px] px-[18px] sm:p-[40px]">
                {project.tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-[16px] sm:p-[40px] bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-[18px] md:text-3xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[14px] md:text-lg text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
