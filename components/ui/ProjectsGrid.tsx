"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tag } from "../ui/tag";
import projectsRaw from "@/data/projects.json";
import { ProjectsData, Project } from "@/types/types"


const projectsData: ProjectsData = projectsRaw as ProjectsData;

interface ProjectsGridProps {
  selectedCategory?: string;
}

export default function ProjectsGrid({ selectedCategory }: ProjectsGridProps) {
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!selectedCategory) return; 

    const projects = projectsData.projects[selectedCategory as keyof typeof projectsData.projects] || [];
    setCurrentProjects(projects);
  }, [selectedCategory]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {currentProjects.slice(0, 4).map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            className="group relative overflow-hidden rounded-3xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
              {project.tags.map((tag: string, idx: number) => (
                <Tag key={idx} text={tag} />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-[16px] sm:p-[40px] bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-[18px] md:text-3xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[14px] md:text-lg text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
