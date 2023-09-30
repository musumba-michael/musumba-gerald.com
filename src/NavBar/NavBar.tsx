import { Box, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, Fragment } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { DRAWER_WIDTH, PAGES } from "../config/constants";
import { PageTabs } from "./components/PageTabs";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export interface INavBar {
  open: boolean;
  handleDrawerOpen: () => void;
}
export const NavBar: FC<INavBar> = (props) => {
  const { open, handleDrawerOpen } = props;
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        {PAGES.map((page) => {
          return (
            <Fragment key={page.id}>
              <PageTabs id={page.id} name={page.name} />
            </Fragment>
          );
        })}
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          href="https://github.com/musumba-michael"
          target="_blank"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <GitHubIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/musumba-gerald/"
          target="_blank"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <LinkedInIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          href="mailto:musumbagerald98@gmail.com"
          target="_blank"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <EmailIcon sx={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
