import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    IconButton,
    Paper,
    Snackbar,
    Alert,
} from "@mui/material";
import { Email, LinkedIn, GitHub, Language } from "@mui/icons-material";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const socialLinks: SocialLink[] = [
    {
        icon: <Email />,
        href: "mailto:musumbagerald@berkeley.edu",
        label: "Email",
    },
    {
        icon: <LinkedIn />,
        href: "https://linkedin.com/in/musumba-gerald/",
        label: "LinkedIn",
    },
    {
        icon: <GitHub />,
        href: "https://github.com/musumba-michael",
        label: "GitHub",
    },
    {
        icon: <Language />,
        href: "https://musumbagerald.com",
        label: "Website",
    },
];

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
        "success"
    );
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: "Gerald",
                reply_to: formData.email,
            };

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setAlertSeverity("success");
            setAlertMessage("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Failed to send email:", error);
            setAlertSeverity("error");
            setAlertMessage("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
            setOpen(true);
        }
    };

    return (
        <Box
            id="contact"
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
                        Get In Touch
                    </Typography>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    p: 4,
                                    background:
                                        "linear-gradient(145deg, rgba(0,230,118,0.1), rgba(83,109,254,0.1))",
                                }}
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            multiline
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            disabled={isSubmitting}
                                            sx={{ py: 1.5 }}
                                        >
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Message"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 4 }}>
                                <Typography variant="h5" sx={{ mb: 4 }}>
                                    Let's connect and discuss how we can work
                                    together
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ mb: 4 }}
                                >
                                    Whether you're interested in cybersecurity
                                    consulting, application security assessment,
                                    or just want to connect, I'm always open to
                                    new opportunities and conversations.
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                                    {socialLinks.map((link, index) => (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <IconButton
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={link.label}
                                                sx={{
                                                    color: "primary.main",
                                                    "&:hover": {
                                                        color: "secondary.main",
                                                    },
                                                }}
                                            >
                                                {link.icon}
                                            </IconButton>
                                        </motion.div>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert onClose={() => setOpen(false)} severity={alertSeverity}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
