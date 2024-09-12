export interface ExperienceType {
  info: string[];
  description: string;
  date: string;
  institution: string;
  location: string;
  type: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  repo: string;
  technologies: string[];
}

export interface SkillsType {
  personal: string[];
  technical: string[];
}
