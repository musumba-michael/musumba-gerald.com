import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";
import { Security, Code, BugReport, Shield } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

interface TypingEffectProps {
    text: string;
    speed?: number;
}

interface FloatingIconProps {
    icon: typeof SvgIcon;
    initialX: number;
    initialY: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <Typography
            variant="h3"
            component="span"
            sx={{
                fontFamily: "Roboto Mono",
                color: "primary.main",
                display: "inline-block",
            }}
        >
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                |
            </motion.span>
        </Typography>
    );
};

const FloatingIcon: React.FC<FloatingIconProps> = ({
    icon: Icon,
    initialX,
    initialY,
}) => (
    <motion.div
        style={{
            position: "absolute",
            x: initialX,
            y: initialY,
        }}
        animate={{
            y: [initialY - 20, initialY + 20],
            rotate: [0, 360],
        }}
        transition={{
            y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
            rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            },
        }}
    >
        <Icon sx={{ fontSize: 40, opacity: 0.5, color: "secondary.main" }} />
    </motion.div>
);

const Hero: React.FC = () => {
    return (
        <Box
            id="home"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                bgcolor: "background.default",
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h6"
                        sx={{ color: "secondary.main", mb: 2 }}
                    >
                        Hello, I'm
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                            mb: 3,
                            background:
                                "linear-gradient(45deg, #00e676 30%, #536dfe 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Gerald Michael Musumba
                    </Typography>

                    <TypingEffect text="Application Security Engineer" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mt: 4,
                                maxWidth: "600px",
                                color: "text.secondary",
                            }}
                        >
                            Securing applications through every stage of the
                            SDLC, with expertise in penetration testing, secure
                            code review, and DevSecOps practices.
                        </Typography>
                    </motion.div>
                </motion.div>
            </Container>

            <FloatingIcon icon={Security} initialX={100} initialY={100} />
            <FloatingIcon
                icon={Code}
                initialX={window.innerWidth - 150}
                initialY={150}
            />
            <FloatingIcon
                icon={BugReport}
                initialX={200}
                initialY={window.innerHeight - 200}
            />
            <FloatingIcon
                icon={Shield}
                initialX={window.innerWidth - 200}
                initialY={window.innerHeight - 150}
            />
        </Box>
    );
};

export default Hero;
