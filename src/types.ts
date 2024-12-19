export interface NavItem {
    label: string;
    href: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    location: string;
    description: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}

export interface Education {
    school: string;
    degree: string;
    period: string;
    location: string;
    gpa?: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    link?: string;
}
