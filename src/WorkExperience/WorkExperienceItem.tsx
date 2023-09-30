import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { WorkExperience } from "../config/types";
export interface IWorkExperienceItem {
  workExpirience: WorkExperience;
}
export const WorkExperienceItem: FC<IWorkExperienceItem> = (props) => {
  const { workExpirience } = props;
  return (
    <Card sx={{ width: 400, m: 1 }}>
      <CardHeader
        title={workExpirience.jobRole}
        subheader={
          <Box>
            <Typography variant="subtitle1">
              {workExpirience.company.name} {workExpirience.company.location}
            </Typography>
            <Typography variant="subtitle2">
              {workExpirience.startDate} -{" "}
              {workExpirience.endDate && workExpirience.endDate}
              {workExpirience.isCurrentlyWorkingHere && "Present"}
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ height: 300, overflowY: "auto" }}>
        <Typography>{workExpirience.description}</Typography>
        <ul>
          {workExpirience.whatIAccomplished.map((item) => (
            <li key={item}>
              <Typography>{item}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        {workExpirience.technologies.map((technology) => (
          <Chip
            label={technology}
            variant="filled"
            color="primary"
            key={technology}
          />
        ))}
      </CardActions>
    </Card>
  );
};
