import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { EDUCATION } from "../config/constants";
export const Education = () => {
  return (
    <Box id="education" sx={{ marginTop: 5 }}>
      <Typography variant="h3">Education</Typography>
      <List dense>
        {EDUCATION.map((course) => (
          <ListItem key={course.endDate}>
            <Paper sx={{ width: "100%", p: 1, m: 1 }}>
              <Typography variant="h6">{course.course}</Typography>
              <Box>
                <Typography variant="subtitle1" color="GrayText">
                  {course.schoolName} {"-"} {course.grade && course.grade}
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  {course.startDate}
                  {" - "}
                  {course.endDate}
                </Typography>
              </Box>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
