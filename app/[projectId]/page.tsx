"use client";

import ProjectUi from "@/components/ProjectUi";
import { Project } from "@/types/types";

export async function generateStaticParams() {
  const categories = [
    "websites",
    "online-stores",
    "landing-pages",
    "crm-systems",
    "branding-and-logo",
    "app-design",
  ];

  let allProjects: Project[] = [];

  for (const category of categories) {
    try {
      const response = await fetch(`/projects/${category}.json`);
      if (!response.ok) {
        throw new Error(`Не удалось загрузить ${category}.json`);
      }
      const projects: Project[] = await response.json();
      allProjects = [...allProjects, ...projects];
    } catch (error) {
      console.error(`Ошибка загрузки данных для ${category}:`, error);
    }
  }

  return allProjects.map((project) => ({
    projectId: project.projectId,
  }));
}

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return <ProjectUi projectId={params.projectId} />;
}