import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00e676",
        },
        secondary: {
            main: "#536dfe",
        },
        background: {
            default: "#0a1929",
            paper: "#0a1929",
        },
    },
    typography: {
        fontFamily: '"Roboto Mono", monospace',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="app">
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <Contact />
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
