"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { Tag } from "../ui/tag";


const projects = [
    {
      title: "Clothes Marketplace",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut mauris sed leo porttitor elit elementum.",
      image:
        "/Project card.webp",
      tags:[
        { text: "Online store" },
        { text: "Web Design"},
        { text: "Web-development" }
      ],
    },
    {
      title: "Ukrainemart",
      description: "The first Ukrainian B2B platform for export",
      image:
        "/Project card (1).webp",
      tags: [
        { text: "B2B" },
        { text: "Web Design"},
        { text: "Web-development" }
      ],
    },
    {
      title: "Size CRM",
      description: "CRM - a system for working in the cloud with your unity",
      image:
        "/Project card (2).webp",
      tags: [
        { text: "CRM-System" },
        { text: "Web Design"},
        { text: "Web-development" }
      ],
    },
    {
      title: "Clickwerk",
      description: "Mounting systems with pixel strength",
      image:
        "/Project card (3).webp",
      tags: [
        { text: "Web Design"},
        { text: "Web-development" }
      ],
    },
  ];

export default function ProjectsGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {projects.map((project, index) => (
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
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            </div>

            <div className="absolute top-0 left-0 flex flex-col items-start gap-2 py-[30px] px-[18px] sm:p-[40px]">
              {project.tags.map((tag, index) => (
                <Tag key={index} text={tag.text} />
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-[16px] sm:p-[40px] bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-[18px] md:text-3xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-[14px] md:text-lg text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}