import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { EDUCATION } from "../config/constants";
export const Education = () => {
  return (
    <Box id="education" sx={{ marginTop: 5 }}>
      <Typography variant="h3">Education</Typography>
      <List dense>
        {EDUCATION.map((course) => (
          <ListItem>
            <ListItemText
              primary={course.course}
              secondary={
                <>
                  <Typography variant="subtitle1">
                    {course.schoolName} {"-"} {course.grade && course.grade}
                  </Typography>
                  <Typography variant="subtitle2">
                    {course.startDate}
                    {" - "}
                    {course.endDate}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
