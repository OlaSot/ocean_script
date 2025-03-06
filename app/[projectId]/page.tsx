import ProjectUi from "@/components/ProjectUi";
import { Project, ProjectData } from "@/types/types";


export default async function ProjectPage({ params }: { params: { projectId: string } }) {
  const { projectId } = params;

  let projectData: ProjectData;

  try {
    const dataModule = await import(`@/data/sitedata/${projectId}.json`);
    projectData = dataModule.default as ProjectData;
  } catch (error) {
    console.error(`Ошибка загрузки данных для ${projectId}:`, error);
    throw new Error("Project not found"); 
  }

  return (
    <>
      <ProjectUi projectData={projectData} />
    </>
  );
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

  return allProjects.map((project) => ({
    projectId: project.projectId,
  }));
}