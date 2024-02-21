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
              Hi There, am Gerald Musumba. I am a passionate professional with a
              focus on performance and security. With experience in both
              healthcare and fintech sectors, I specialize in developing APIs,
              as well as web and mobile applications. I am currently pursuing a
              Master's degree in Information and Cyber Security at the
              University of California, Berkeley School of Information.
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
