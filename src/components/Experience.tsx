import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import { Work } from "@mui/icons-material";
import { Experience } from "../types";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";

const experiences: Experience[] = [
    {
        company: "University of California, Berkeley",
        position: "Graduate Student Researcher",
        period: "Feb 2024 – July 2024",
        location: "Berkeley, CA",
        description: [
            "Member of an 8-person team challenged to leverage advances in AI to invent the next generation of cybersecurity defenses",
            "Worked to develop AI-driven systems to automatically secure critical code",
            "Utilized LangChain, litellm, ChatGPT, and other technologies for vulnerability remediation",
        ],
    },
    {
        company: "Turing",
        position: "Software Engineer - Contractor",
        period: "Apr 2022 – Jan 2024",
        location: "Palo Alto, California",
        description: [
            "Maintained and developed 5 web applications for the 'All of Us' research program",
            "Collaborated in a 13-member global team to produce high-quality scalable web applications",
            "Scaled program from 10,000 to 1.25M participants",
            "Developed backend REST APIs, and Django views, and oversaw data integration projects.",
            "Ensured code quality through rigorous reviews and proactive debugging.",
            "Contributed to QA sessions, streamlined development processes, reduced security vulnerabilities, and improved risk mitigation with active SAST, DAST, and SCA testing using tools including Semgrep, mypy and also active monitoring using sentry, honeycomb, and Datadog.",
        ],
    },
    {
        company: "Dmark Mobile",
        position: "Software Engineer",
        period: "Jan 2022 – June 2022",
        location: "Kampala, Uganda",
        description: [
            "Developed applications for new software capabilities including bulk payments, mobile banking, value-added services, and custom software solutions.",
            "Managed SMS gateways, establishing direct API connections with Airtel and MTN networks, vital for efficient communication with banking institutions.",
            "Designed and maintained a secure API for mobile money transactions, ensuring seamless financial interactions.",
            "Spearheaded the configuration, hardening, and ongoing maintenance of AWS Linux servers, tailored to the unique needs of various banking institutions.",
            "Created innovative applications using WhatsApp API to facilitate efficient customer engagement for institutions.",
        ],
    },
    {
        company: "Asterisint",
        position: "Software Engineer",
        period: "Aug 2021 – Dec 2021",
        location: "Kampala, Uganda",
        description: [
            "Led a 5-person team of engineers and developed fintech applications for simplified money transfers from diaspora to African families.",
            "Integrated CyberSource payment platform for seamless Credit and Visa card transactions and set up security controls to ensure PCI compliance.",
            "Set up multi-factor authentication for all transactions and user accounts as well as security features such as secure session management, and role-based access control with a focus on least privilege and zero trust architecture.",
            "Designed and rigorously tested RESTful API endpoints using Laravel and Postman, ensuring robust functionality.",
            "Integrated various African mobile money APIs to enable hassle-free money transfer between user accounts to mobile numbers.",
            "Managed and configured Linux Linode servers, and hardened them for security, performance, and reliability.",
        ],
    },
    {
        company: "Wimea-ICT",
        position: "Software Engineer Intern",
        period: "June 2021 – Sep 2021",
        location: "Kampala, Uganda",
        description: [
            "Collaborated with Wimea-ICT, a research organization at Makerere University, focusing on agriculture-related research with global university partnerships.",
            "Enhanced a data aggregation web application for IoT devices at weather stations, introducing new features for improved data collection and analysis.",
            "Contributed to developing AdEMNEA, a specialized tool for insect pollinator monitoring, collaborating closely with fellow engineers.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <Box
            id="experience"
            sx={{
                py: 8,
                bgcolor: "background.default",
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 6,
                            textAlign: "center",
                            background:
                                "linear-gradient(45deg, #00e676 30%, #536dfe 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Professional Experience
                    </Typography>

                    <Timeline position="alternate">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <TimelineDot color="primary">
                                            <Work />
                                        </TimelineDot>
                                    </motion.div>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: index % 2 === 0 ? 50 : -50,
                                        }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            color="primary"
                                        >
                                            {exp.company}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                        >
                                            {exp.position}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="textSecondary"
                                        >
                                            {exp.period} | {exp.location}
                                        </Typography>
                                        <Box sx={{ mt: 1 }}>
                                            {exp.description.map((desc, i) => (
                                                <Typography
                                                    key={i}
                                                    variant="body2"
                                                    sx={{ mb: 0.5 }}
                                                >
                                                    • {desc}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ExperienceSection;
