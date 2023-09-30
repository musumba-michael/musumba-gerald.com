import {
  Typography,
  Avatar,
  IconButton,
  Paper,
  useTheme,
  Box,
} from "@mui/material";
import { FC } from "react";
import logo from "../images/profile_photo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import clipArt from "../images/clip_art.svg";
export const About: FC = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        position: "relative",
        height: "90vh",
        borderRadius: 10,
      }}
    >
      <Box
        sx={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          p: 1,
          m: 1,
          height: "90%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              m: 1,
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2">Software Engineer</Typography>
            <Box sx={{ height: theme.spacing(2) }} />
            <Typography variant="body1">
              Hi There, am Musumba Gerald Michael, am a passionate software
              engineer. My journey in tech started young, and I've since
              mastered various languages and technologies. I thrive on solving
              complex problems with clean, scalable solutions. Continual
              learning keeps me sharp, and I love collaborating in diverse
              teams.
            </Typography>
            <Box sx={{ height: theme.spacing(2) }} />
            <Typography>
              When not coding, I'm exploring the outdoors, reading novels, or
              swimming at the pool. Welcome to my portfolio. Explore my work,
              and let's chat about your next project. Connect with me on
              [LinkedIn/GitHub/Email] for a chat.
            </Typography>
          </Box>
          <Box>
            <Avatar
              sx={{
                height: 420,
                width: 420,
                bgcolor: theme.palette.primary.main,
              }}
            >
              <Avatar src={logo} alt="photo" sx={{ height: 400, width: 400 }} />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <IconButton
                href="https://github.com/musumba-michael"
                target="_blank"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <GitHubIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/musumba-gerald/"
                target="_blank"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <LinkedInIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton
                href="mailto:musumbagerald98@gmail.com"
                target="_blank"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <EmailIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={clipArt}
          style={{ borderRadius: 40, color: "red" }}
          alt="clip art"
        />
      </Box>
    </Paper>
  );
};
