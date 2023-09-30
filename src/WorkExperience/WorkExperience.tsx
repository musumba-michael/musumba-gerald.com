import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { WORK_EXPERIENCE_LIST } from "../config/constants";
export const WorkExperienceSlider: FC = () => {
  return (
    <Box id="work-experience" sx={{ marginTop: 5 }}>
      <Typography variant="h3">Work Experience</Typography>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {WORK_EXPERIENCE_LIST.map((workExpirience) => (
          <Grid item xs={12} md={4}>
            <WorkExperienceItem workExpirience={workExpirience} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
