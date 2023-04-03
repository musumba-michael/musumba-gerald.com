import { CssBaseline } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";
import { About } from "../About/About";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { Projects } from "../Projects/Projects";
import { Education } from "../Education/Education";
import { PublicationsAndTalks } from "../PublicationsAndTalks/PublicationsAndTalks";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <About />
      <WorkExperience />
      <Projects />
      <Education />
      <PublicationsAndTalks />
    </div>
  );
}

export default App;
