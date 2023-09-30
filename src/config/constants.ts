import { Education, Page, Projects, WorkExperience } from "./types";
export const DRAWER_WIDTH = 240;

export const PAGES: Page[] = [
  { name: "About", id: "about" },
  { name: "Work Experience", id: "work-experience" },
  { name: "Projects", id: "project" },
  { name: "Education", id: "education" },
];

export const WORK_EXPERIENCE_LIST: WorkExperience[] = [
  {
    company: {
      name: "Color Health",
      location: "USA(remote)",
      website: "https://www.color.com/",
    },
    description:
      "I was a contractor at Color Health through Turing.com. Throught my time working there I was part of the precision care team that worked on building and mantaining the All Of Us platform and the genetic testing product.",
    endDate: "September 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Full Stack Software Engineer",
    startDate: "Aprill 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Developed and maintained full-stack web applications.",
      "Collaborated with cross-functional teams to design and implement scalable and user-friendly software solutions.",
      "Participated in code reviews, debugging, and troubleshooting to ensure high-quality and efficient code.",
    ],
  },
  {
    company: {
      name: "Color Health",
      location: "USA(remote)",
      website: "https://www.color.com/",
    },
    description:
      "I was a contractor at Color Health through Turing.com. Throught my time working there I was part of the precision care team that worked on building and mantaining the All Of Us platform and the genetic testing product.",
    endDate: "September 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Full Stack Software Engineer",
    startDate: "Aprill 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Developed and maintained full-stack web applications.",
      "Collaborated with cross-functional teams to design and implement scalable and user-friendly software solutions.",
      "Participated in code reviews, debugging, and troubleshooting to ensure high-quality and efficient code.",
    ],
  },
  {
    company: {
      name: "Color Health",
      location: "USA(remote)",
      website: "https://www.color.com/",
    },
    description:
      "I was a contractor at Color Health through Turing.com. Throught my time working there I was part of the precision care team that worked on building and mantaining the All Of Us platform and the genetic testing product.",
    endDate: "September 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Full Stack Software Engineer",
    startDate: "Aprill 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Developed and maintained full-stack web applications.",
      "Collaborated with cross-functional teams to design and implement scalable and user-friendly software solutions.",
      "Participated in code reviews, debugging, and troubleshooting to ensure high-quality and efficient code.",
    ],
  },
  {
    company: {
      name: "Color Health",
      location: "USA(remote)",
      website: "https://www.color.com/",
    },
    description:
      "I was a contractor at Color Health through Turing.com. Throught my time working there I was part of the precision care team that worked on building and mantaining the All Of Us platform and the genetic testing product.",
    endDate: "September 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Full Stack Software Engineer",
    startDate: "Aprill 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Developed and maintained full-stack web applications.",
      "Collaborated with cross-functional teams to design and implement scalable and user-friendly software solutions.",
      "Participated in code reviews, debugging, and troubleshooting to ensure high-quality and efficient code.",
    ],
  },
  {
    company: {
      name: "Color Health",
      location: "USA(remote)",
      website: "https://www.color.com/",
    },
    description:
      "I was a contractor at Color Health through Turing.com. Throught my time working there I was part of the precision care team that worked on building and mantaining the All Of Us platform and the genetic testing product.",
    endDate: "September 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Full Stack Software Engineer",
    startDate: "Aprill 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Developed and maintained full-stack web applications.",
      "Collaborated with cross-functional teams to design and implement scalable and user-friendly software solutions.",
      "Participated in code reviews, debugging, and troubleshooting to ensure high-quality and efficient code.",
    ],
  },
];

export const PROJECTS: Projects[] = [
  {
    description: "All of us program",
    name: "All Of Us",
    websiteLink: "https://participant-stb.joinallofus.org/",
    image: "/images/all_of_us.png",
    isVisible: true,
    technologies: ["Django", "React"],
  },
  {
    description: "Counseling Tool",
    name: "Counseling Tool",
    image: "/images/counseling.png",
    isVisible: true,
    technologies: ["Django", "Angular"],
  },
];

export const EDUCATION: Education[] = [
  {
    course: "Bachelor of Science in Networking and Cyber Security",
    endDate: "December 2021",
    schoolName: "ISBAT University",
    startDate: "August 2018",
  },
  {
    course: "Bachelor of Science in Software Engineering",
    endDate: "Febuary 2023",
    schoolName: "Makerere University",
    startDate: "August 2018",
  },
];
