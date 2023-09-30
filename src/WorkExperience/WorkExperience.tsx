import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { WORK_EXPERIENCE_LIST } from "../config/constants";
export const WorkExperienceSlider: FC = () => {
  return (
    <Box id="work-experience" sx={{ marginTop: 5 }}>
      <Typography variant="h3">Work Experience</Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {WORK_EXPERIENCE_LIST.map((workExpirience) => (
          <Box key={workExpirience.description}>
            <WorkExperienceItem workExpirience={workExpirience} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
