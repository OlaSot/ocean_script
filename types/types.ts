export interface Project {
  projectId: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface SiteData {
  name: string;
  mainpage: string;
  location: string;
  description: string;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface HeroSection {
  bg: string;
  tagText: string;
}

export interface GridValues {
  category: string;
  location: string;
  price: string;
  timeline: string;
}

export interface Section {
  gridValues: GridValues;
  description: string;
}

export interface Image {
  alt: string;
  src: string;
}

export interface ProjectData {
  siteData: SiteData;
  logos: Logo[];
  heroSection: HeroSection;
  sections: Section;
  images: Image[];
  squareImages: Image[];
  mobImages: Image[];
}