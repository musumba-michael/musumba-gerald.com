import {
  Box,
  Typography,
  Card,
  Grid,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FC } from "react";
import { PROJECTS } from "../config/constants";
export const Projects: FC = () => {
  return (
    <Box id="project" sx={{ marginTop: 5 }}>
      <Typography variant="h3">Projects</Typography>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {PROJECTS.map((project) => (
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 400, padding: 1 }}>
              <CardMedia
                component="img"
                height="194"
                image={project.image}
                alt="screenshot"
              />
              <CardContent>
                <Typography>{project.name}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              {project.technologies.map((technology) => (
                <Chip label={technology} variant="filled" color="primary" />
              ))}
              <CardActions disableSpacing>
                <Box flexGrow={1} />
                {project.websiteLink && (
                  <Button
                    aria-label="website"
                    href={project.websiteLink}
                    endIcon={<ArrowOutwardIcon />}
                    color="secondary"
                  >
                    Website
                  </Button>
                )}
                {project.github && (
                  <Button
                    aria-label="github"
                    href={project.github}
                    endIcon={<GitHubIcon />}
                    color="secondary"
                  >
                    Github
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
