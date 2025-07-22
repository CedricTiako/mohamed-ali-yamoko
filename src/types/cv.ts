export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  birthDate: string;
  status: string;
  website: string;
  avatar?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  grade?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'language';
}

export interface CVData {
  personalInfo: PersonalInfo;
  objective: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: string[];
  interests: string[];
  strengths: string[];
  certifications?: string[];
  projects?: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
}