export interface BaseType {
  id: string | number;
}

export interface ExperienceType extends BaseType {
  info: string[];
  description: string;
  date: string;
  institution: string;
  location: string;
  type: string;
}

export interface ProjectType extends BaseType {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  repo: string;
  technologies: string[];
}

export interface SkillsType extends BaseType {
  title: string;
  imageUrl: string;
}
