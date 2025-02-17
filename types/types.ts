export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
  }
  
  export interface ProjectsData {
    categories: string[];
    projects: Record<string, Project[]>;
  }
  