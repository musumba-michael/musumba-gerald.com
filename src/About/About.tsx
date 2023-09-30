import { Grid, Typography, Avatar, IconButton, Paper } from "@mui/material";
import { FC } from "react";
import logo from "../images/profile_photo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export const About: FC = () => {
  return (
    <Paper>
      <Grid container sx={{ height: "100vh", margin: 5 }}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ alignContent: "center", height: "100vh" }}
        >
          <Typography variant="h2">Software Engineer</Typography>
          <Typography variant="body1">
            Hi There am Musumba Gerald Michael, Am a passionate software
            developer based in Kampala, Uganda.
          </Typography>
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
        </Grid>
        <Grid item xs={12} md={4}>
          <Avatar src={logo} alt="photo" sx={{ height: 400, width: 400 }} />
        </Grid>
      </Grid>
    </Paper>
  );
};
