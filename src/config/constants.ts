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
    jobRole: "Full Stack Software Engineer",
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
      "Built and maintained frontend applications for All Of US research program and Color’s genetic product.",
      "Built and integrated  All Of US backend API’s with Color’s product while working with different teams that managed these products in the organization.",
      "Participated in code reviews, debugging, testing and quality assurance session (Bugs Bash) to ensure high-quality and efficient code.",
      "Worked with product managers, genetic counselors and fellow engineers to add new features and fix bugs.",
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
    endDate: "July 2023",
    isCurrentlyWorkingHere: false,
    jobRole: "Full Stack Software Engineer",
    startDate: "Jan 2022",
    technologies: ["React", "Django", "PostgreSql", "AWS"],
    whatIAccomplished: [
      "Maintained SMS gateways that directly connect to Airtel and MTN mobile networks in Uganda that are used by different banking institutions in Uganda.",
      "Built and maintained an API used for mobile money transactions.",
      "Configured, hardened and maintained AWS linux servers used by different banking institutions.",
      "Built Applicationsto enable institutions to reach out their customers using WhatsApp api.",
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
      "Worked with cybersource payment Platform to enable Credit and Visa card transactions.",
      "Worked with different african mobile money api to enable money transfer to mobile number",
      "Built APi authentication using Laravel Sanctum and setup Twilio two factor authentication.",
      "Built  and tested API rest endpoints using Laravel and Postman.",
      "Managed and configured the linode server.",
      "Setup and manage self hosted git and mail server.",
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
      "Worked on adding new features to the web application that aggregates data from the different IOT devices at Weather stations around the country.",
      "Worked with teammates to build AdEMNEA, a tool for insect pollinator monitoring.",
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
    course: "Bachelor of Science in Networking and Cyber Security",
    endDate: "December 2021",
    schoolName: "ISBAT University",
    startDate: "August 2018",
    grade: "4.8/5.0",
  },
  {
    course: "Bachelor of Science in Software Engineering",
    endDate: "Febuary 2023",
    schoolName: "Makerere University",
    startDate: "August 2018",
    grade: "4.10/5.0",
  },
];
