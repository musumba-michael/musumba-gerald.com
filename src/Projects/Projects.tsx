import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FC } from "react";
import { PROJECTS } from "../config/constants";
import { ShowImage } from "./ShowImage";
export const Projects: FC = () => {
  return (
    <Box id="project" sx={{ marginTop: 5 }}>
      <Typography variant="h3">Projects</Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {PROJECTS.map((project) => (
          <Box key={project.name}>
            <Card sx={{ width: 400, m: 1 }}>
              <CardContent sx={{ height: 150, overflowY: "auto" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h5">{project.name}</Typography>
                  <Box flexGrow={1} />
                  {project.websiteLink && (
                    <Tooltip title="Visit Website">
                      <IconButton
                        onClick={() => window.open(`${project.websiteLink}`)}
                      >
                        <ArrowOutwardIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.github && (
                    <Tooltip title="View Github">
                      <IconButton
                        onClick={() => window.open(`${project.github}`)}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.image && <ShowImage image={project.image} />}
                </Box>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                {project.technologies.map((technology) => (
                  <Chip
                    label={technology}
                    variant="filled"
                    color="primary"
                    key={technology}
                  />
                ))}
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
