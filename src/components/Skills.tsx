// src/components/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { Skill } from "../types";

const skills: Skill[] = [
    {
        category: "Core Competencies",
        items: [
            "Web Application Security Testing",
            "Secure Code Reviews",
            "DevSecOps",
            "Penetration Testing",
            "Reverse Engineering",
            "DAST",
            "SAST",
            "Vulnerability Assessment",
            "Full Stack Web Development",
            "Mobile app development",
            "Backend Development",
            "Frontend Development",
        ],
    },
    {
        category: "Programming Languages and Frameworks",
        items: [
            "Python",
            "JavaScript",
            "TypeScript",
            "Rust",
            "Java",
            "C",
            "Bash",
            "Dart",
            "React",
            "Nextjs",
            "Flutter",
            "React Native",
            "Django",
            "Flask",
            "Node.js",
            "FastApi",
        ],
    },
    {
        category: "Security Tools",
        items: [
            "Metasploit",
            "Burp Suite",
            "Nmap",
            "Wireshark",
            "Snyk",
            "Semgrep",
            "Synopsys",
            "Hashcat",
            "John The Ripper",
            "John OCR",
            "OpenVAS",
            "Burp Collaborator",
            "ZAP",
            "Nessus",
            "Qualys",
            "Checkmarx",
            "Fortify",
        ],
    },
    {
        category: "DevOps & Cloud",
        items: [
            "AWS",
            "GCP",
            "Azure",
            "Git",
            "GitHub Actions",
            "CircleCI",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Helm",
        ],
    },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
    skill,
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
                "&:hover": {
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease-in-out",
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    mb: 2,
                    color: "primary.main",
                    fontWeight: "bold",
                }}
            >
                {skill.category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {skill.items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + index * 0.1 }}
                    >
                        <Box
                            sx={{
                                px: 2,
                                py: 0.5,
                                bgcolor: "background.paper",
                                borderRadius: 2,
                                fontSize: "0.875rem",
                                display: "inline-block",
                                border: "1px solid",
                                borderColor: "primary.main",
                            }}
                        >
                            {item}
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Paper>
    </motion.div>
);

const Skills: React.FC = () => {
    return (
        <Box
            id="skills"
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
                        Technical Skills
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} md={6} key={skill.category}>
                            <SkillCard skill={skill} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
