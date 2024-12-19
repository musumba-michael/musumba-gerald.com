// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { Security, School, Code, Assignment } from "@mui/icons-material";

interface HighlightBoxProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const highlights = [
    {
        icon: <Security fontSize="large" />,
        title: "Application Security",
        description:
            "Specializing in securing applications throughout the SDLC with expertise in penetration testing and secure code review.",
    },
    {
        icon: <School fontSize="large" />,
        title: "Education",
        description:
            "Pursuing Master of Information and Cybersecurity at UC Berkeley, with a strong foundation in both software engineering and cybersecurity.",
    },
    {
        icon: <Code fontSize="large" />,
        title: "Full Stack Development",
        description:
            "Experienced in both frontend and backend development with a security-first approach to writing code.",
    },
    {
        icon: <Assignment fontSize="large" />,
        title: "Security Frameworks",
        description:
            "Proficient in implementing and maintaining compliance with SOC2, HIPAA, NIST CSF, PCI DSS, and ISO 27001.",
    },
];

const HighlightBox: React.FC<HighlightBoxProps> = ({
    icon,
    title,
    description,
    index,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        <Paper
            elevation={3}
            sx={{
                p: 3,
                height: "100%",
                background:
                    "linear-gradient(145deg, rgba(0,230,118,0.1), rgba(83,109,254,0.1))",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-5px)",
                },
            }}
        >
            <Box sx={{ color: "primary.main", mb: 2 }}>{icon}</Box>
            <Typography variant="h6" sx={{ mb: 1, color: "primary.main" }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Paper>
    </motion.div>
);

const About: React.FC = () => {
    return (
        <Box
            id="about"
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
                            mb: 4,
                            textAlign: "center",
                            background:
                                "linear-gradient(45deg, #00e676 30%, #536dfe 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        About Me
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mb: 6,
                            textAlign: "center",
                            maxWidth: "800px",
                            mx: "auto",
                            color: "text.secondary",
                        }}
                    >
                        I'm a results-oriented Application Security Engineer
                        with a passion for integrating security at every stage
                        of the Software Development Life Cycle. Currently
                        pursuing my Master's in Information and Cybersecurity at
                        UC Berkeley, I combine my software engineering expertise
                        with advanced security knowledge to build and protect
                        robust applications.
                    </Typography>

                    <Grid container spacing={4}>
                        {highlights.map((highlight, index) => (
                            <Grid item xs={12} md={6} key={highlight.title}>
                                <HighlightBox {...highlight} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
