import { Box, Button, Modal, Paper } from "@mui/material";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface IProjectImage {
  handleClose: () => void;
  image: string;
}
export const ProjectImage: FC<IProjectImage> = (props) => {
  const { handleClose, image } = props;
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="screenshoots"
      aria-describedby="screenshots"
    >
      <Paper
        sx={{
          position: "absolute",
          top: "5vh",
          left: "10vw",
          display: "flex",
          flexDirection: "column",
          width: "80vw",
        }}
      >
        <Box>
          <img src={image} height={"100%"} width={"100%"} alt="screenshot" />
        </Box>
        <Button
          variant="contained"
          endIcon={<CloseIcon />}
          onClick={handleClose}
        >
          Close
        </Button>
      </Paper>
    </Modal>
  );
};
