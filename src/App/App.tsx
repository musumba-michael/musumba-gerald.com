import { Box, Container, CssBaseline, styled } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";
import { About } from "../About/About";
import { WorkExperienceSlider } from "../WorkExperience/WorkExperience";
import { Projects } from "../Projects/Projects";
import { Education } from "../Education/Education";
import { DrawerHeader, MobileDrawer } from "../Drawer/MobileDrawer";
import { DRAWER_WIDTH } from "../config/constants";
import { useState } from "react";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <MobileDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Main open={open}>
          <DrawerHeader />
          <Container>
            <About />
            <WorkExperienceSlider />
            <Projects />
            <Education />
          </Container>
        </Main>
      </Box>
    </div>
  );
}

export default App;
