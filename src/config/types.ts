export interface Page {
  name: string;
  id: string;
}
interface Company {
  name: string;
  website?: string;
  location?: string;
}

export interface WorkExperience {
  startDate: string;
  endDate: string;
  jobRole: string;
  company: Company;
  description: string;
  technologies: string[];
  isCurrentlyWorkingHere: boolean;
  whatIAccomplished: string[];
}
export interface Education {
  schoolName: string;
  course: string;
  startDate: string;
  endDate: string;
  grade?: string;
}

export interface Projects {
  name: string;
  websiteLink?: string;
  image: string;
  github?: string;
  description: string;
  isVisible: boolean;
  technologies: string[];
}
