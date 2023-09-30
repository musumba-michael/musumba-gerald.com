import { FC, useState } from "react";
import { ProjectImage } from "./ProjectImage";
import { IconButton, Tooltip } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

interface IShowImage {
  image: string;
}
export const ShowImage: FC<IShowImage> = (props) => {
  const { image } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip title="View Images">
        <IconButton onClick={handleOpen}>
          <ImageIcon />
        </IconButton>
      </Tooltip>
      {open && <ProjectImage handleClose={handleClose} image={image} />}
    </>
  );
};
