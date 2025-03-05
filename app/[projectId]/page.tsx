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
      const datamodule = await import(`@/data/projects/${category}.json`);
      const projects: Project[] = datamodule.default as Project[];
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