import React from "react";
import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { Project } from "../types";

const projects: Project[] = [
    {
        title: "AI-Driven Vulnerability Remediation",
        description:
            "Developed an AI system that automatically identifies and remediates security vulnerabilities in open-source code using LangChain, ChatGPT, and other AI technologies.",
        technologies: ["Python", "LangChain", "ChatGPT", "RabbitMQ", "GCP"],
        github: "https://github.com/AI-CyberBears",
    },
    {
        title: "Healthcare Research Platform",
        description:
            "Built and maintained web applications for the 'All of Us' research program, scaling from 10,000 to 1.25M participants while ensuring HIPAA compliance.",
        technologies: [
            "React",
            "Django",
            "TypeScript",
            "Python",
            "Material-UI",
        ],
        link: "https://allofus.nih.gov/",
    },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
    index,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background:
                    "linear-gradient(145deg, rgba(0,230,118,0.1), rgba(83,109,254,0.1))",
                "&:hover": {
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease-in-out",
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        mb: 2,
                        color: "primary.main",
                        fontWeight: "bold",
                    }}
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.technologies.map((tech, i) => (
                        <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                                bgcolor: "background.paper",
                                border: "1px solid",
                                borderColor: "secondary.main",
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
                {project.github && (
                    <Button
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code
                    </Button>
                )}
                {project.link && (
                    <Button
                        startIcon={<Launch />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </Button>
                )}
            </CardActions>
        </Card>
    </motion.div>
);

const Projects: React.FC = () => {
    return (
        <Box
            id="projects"
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
                        Featured Projects
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={project.title}>
                            <ProjectCard project={project} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
