import {
  styled,
  Drawer,
  ListItemButton,
  ListItemIcon,
  List,
  Divider,
  IconButton,
  useTheme,
  ListItem,
  ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { FC } from "react";
import { PAGES } from "../config/constants";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 240;

export interface IMobileDrawer {
  open: boolean;
  handleDrawerClose: () => void;
}
export const MobileDrawer: FC<IMobileDrawer> = (props) => {
  const { open, handleDrawerClose } = props;
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {PAGES.map((page) => {
            return (
              <ListItem key={page.id}>
                <ListItemButton href={`#${page.id}`}>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              href="https://github.com/musumba-michael"
              target="_blank"
            >
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              href="https://www.linkedin.com/in/musumba-gerald/"
              target="_blank"
            >
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkendIn" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              href="mailto:musumbagerald98@gmail.com"
              target="_blank"
            >
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
