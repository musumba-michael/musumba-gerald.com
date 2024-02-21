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
      "I was a contractor at Color Health through Turing.com, I Served as a full stack software engineer for Colors precision care team that managed the All Of Us program and core genetic product.",
    endDate: "September 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Software Engineer",
    startDate: "Aprill 2022",
    technologies: [
      "React",
      "Django",
      "PostgreSql",
      "AWS",
      "Jira",
      "Git",
      "CircleCi",
    ],
    whatIAccomplished: [
      'Developed and maintained front-end applications for the "All Of Us" research program and Color\'s genetic product. Utilized React, TypeScript, and Material-UI to enhance user engagement and experience.',
      'Spearheaded backend development, creating REST APIs, and Django views, and overseeing data integration projects. Modified Django tables for seamless "All Of Us" report integration, optimizing Python scripts for large-scale data management and system performance.',
      "Ensured code quality through rigorous reviews and proactive debugging. Actively participated in QA sessions to streamline development processes.",
      "Collaborated with product managers, genetic counselors, fellow engineers, and cross-functional teams to introduce innovative features and implement crucial bug fixes, fostering a collaborative and results-driven environment.",
    ],
  },
  {
    company: {
      name: "Dmark Mobile",
      location: "Uganda/Kampala",
      website: "https://dmarkmobile.com/",
    },
    description:
      "Dmark mobile is a company that develops applications to enable bulk payments, mobile banking, mobile VAS and also carried out custom software development",
    endDate: "July 2022",
    isCurrentlyWorkingHere: false,
    jobRole: "Software Engineer",
    startDate: "Jan 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Developed applications for bulk payments, mobile banking, value-added services, and custom software solutions.",
      "Managed SMS gateways, establishing direct connections with Airtel and MTN networks, vital for efficient communication with banking institutions.",
      "Designed and maintained a secure API for mobile money transactions, ensuring seamless financial interactions.",
      "Spearheaded the configuration, hardening, and ongoing maintenance of AWS Linux servers, tailored to the unique needs of various banking institutions.",
      "Created innovative applications using the WhatsApp API to facilitate efficient customer engagement for institutions.",
    ],
  },
  {
    company: {
      name: "Asteriskint",
      location: "Uganda/Kampala",
      website: "https://asteriskintgroup.com/",
    },
    description:
      "At Asteriskint I was part of a cohort to develop a fintech application to enable money transfer from diaspora to family in africa.",
    endDate: "December 2021",
    isCurrentlyWorkingHere: false,
    jobRole: "Software Engineer",
    startDate: "August 2021",
    technologies: ["React", "Laravel", "MysqlSql", "Php", "Linux"],
    whatIAccomplished: [
      "Developed a fintech application for simplified money transfers from the diaspora to African families.",
      "Integrated the Cybersource payment platform for seamless Credit and Visa card transactions.",
      "Implemented API authentication with Laravel Sanctum and Twilio two-factor authentication for enhanced security.",
      "Designed and rigorously tested RESTful API endpoints using Laravel and Postman, ensuring robust functionality.",
      "Collaborated with various African mobile money APIs to enable hassle-free transfers to mobile numbers.",
      "Managed and configured Linode servers for optimal performance and reliability.",
    ],
  },
  {
    company: {
      name: "WimeaICT",
      location: "Uganda/Kampala",
      website: "https://wimea-ict.net/",
    },
    description:
      "Wimea-ict is a research organization at Makerere University that partners with different universities around the world to do research in fields relating to Agriculture.",
    endDate: "September 2021",
    isCurrentlyWorkingHere: false,
    jobRole: "Software Engineer Intern",
    startDate: "June 2021",
    technologies: ["React", "Django", "PostgreSql", "Linux"],
    whatIAccomplished: [
      "Collaborated with Wimea-ICT, a research organization at Makerere University, focusing on agriculture-related research with global university partnerships.",
      "Enhanced a data aggregation web application for IoT devices at weather stations, introducing new features for improved data collection and analysis.",
      "Contributed to the development of AdEMNEA, a specialized tool for insect pollinator monitoring, collaborating closely with fellow engineers.",
    ],
  },
];

export const PROJECTS: Projects[] = [
  {
    description:
      "This dashboard is used by All of us participants to recieve their results, schedule genetic counseling appointment, fax results to health-care provider, etc.",
    name: "All Of Us Dashboard",
    websiteLink: "https://participant-stb.joinallofus.org/",
    image: "/images/all_of_us.png",
    isVisible: true,
    technologies: ["Django", "React"],
  },
  {
    description:
      "This tool is used by genetic counselor while holding genetic counseling sessions.",
    name: "Counseling Tool",
    image: "/images/counseling.png",
    isVisible: true,
    technologies: ["Django", "Angular"],
  },
  {
    description:
      "This tool was used to generate pdf reports for All Of Us participants",
    name: "All Of Us reports",
    image: "/images/aou-reports.png",
    isVisible: true,
    technologies: ["React", "Node"],
  },
  {
    description:
      "This tool was used to generate pdf reports for All Of Us participants",
    name: "This website",
    image: "/images/website.png",
    isVisible: true,
    technologies: ["React"],
    github: "https://github.com/musumba-michael/musumba-gerald.com",
    websiteLink: "https://www.musumbagerald.com/",
  },
];

export const EDUCATION: Education[] = [
  {
    course: "Masters of information and Cyber Security",
    endDate: "December 2025",
    schoolName: "University Of California, Berkeley",
    startDate: "January 2024",
  },
  {
    course: "Bachelor of Science in Software Engineering",
    endDate: "Febuary 2023",
    schoolName: "Makerere University",
    startDate: "August 2018",
    grade: "4.10/5.0",
  },
  {
    course: "Bachelor of Science in Networking and Cyber Security",
    endDate: "December 2021",
    schoolName: "ISBAT University",
    startDate: "August 2018",
    grade: "4.8/5.0",
  },
];
