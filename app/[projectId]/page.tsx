import ProjectUi from "@/components/ProjectUi";
import { ProjectData, Project } from "@/types/types";
import { notFound } from "next/navigation";


export default async function ProjectPage({ params }: any) {
  console.log("Params before await:", params);

  if (params instanceof Promise) {
    params = await params;
  }

  console.log("Params after await:", params);

  const { projectId } = params;

  let projectData: ProjectData;

  try {
    const dataModule = await import(`@/data/sitedata/${projectId}.json`);
    projectData = dataModule.default as ProjectData;
  } catch (error) {
    console.error(`Ошибка загрузки данных для ${projectId}:`, error);
    notFound();
  }

  return <ProjectUi projectData={projectData} />;
}

export function generateStaticParams() {
  const categories = [
    "websites",
    "online-stores",
    "landing-pages",
    "crm-systems",
    "branding-and-logo",
    "app-design",
  ];

  let allProjects: Project[] = [];
  categories.forEach((category) => {
    try {
      const dataModule = require(`@/data/projects/${category}.json`);
      const raw = dataModule.default ?? dataModule;
      if (Array.isArray(raw)) {
        allProjects = [...allProjects, ...raw];
      } else {
        console.warn(`Данные из ${category}.json не являются массивом`);
      }
    } catch (error) {
      console.error(`Ошибка загрузки данных для ${category}:`, error);
    }
  });
  

  const validProjects = allProjects.filter((project) => {
    try {
      require(`@/data/sitedata/${project.projectId}.json`);
      return true;
    } catch (error) {
      console.warn(`Нет JSON-файла для ${project.projectId}, пропускаем`);
      return false;
    }
  });

  return validProjects.map((project) => ({
    params: { projectId: project.projectId },
  }));
}