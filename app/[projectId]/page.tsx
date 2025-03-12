import ProjectUi from "@/components/ProjectUi";
import { ProjectData, Project } from "@/types/types";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Project Details",
  description: "Project details page",
  metadataBase: new URL("https://my-site.vercel.app"), // Replace with your domain
};

export default async function ProjectPage({ params }: { params: { projectId: string } }) {
  console.log("Params:", params); // Отладка
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
      const dataModule = await import(`@/data/projects/${category}.json`);
      const projects: Project[] = dataModule.default as Project[];
      allProjects = [...allProjects, ...projects];
    } catch (error) {
      console.error(`Ошибка загрузки данных для ${category}:`, error);
    }
  }

  const validProjects = [];
  for (const project of allProjects) {
    try {
      await import(`@/data/sitedata/${project.projectId}.json`);
      validProjects.push(project);
    } catch (error) {
      console.warn(`Нет JSON-файла для ${project.projectId}, пропускаем`);
    }
  }

  return validProjects.map((project) => ({
    projectId: project.projectId,
  }));
}