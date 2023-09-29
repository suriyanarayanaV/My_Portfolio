import { ThemeProvider } from "styled-components";
import { getDownloadURL, ref } from "firebase/storage";
import { Body } from "./AppStyled";
import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme, lightTheme, OverAllWrapper } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import Skills from "./components/SkillsSection/Skills";
import Footer from "./components/FooterSection/Footer";
import Education from "./components/EducationSection/Education";
import Experience from "./components/ExperienceSection/Experience";
import Projects from "./components/ProjectsSection/Projects";
import Contact from "./components/ContactSection/Contact";
import { useEffect, useState } from "react";
import storage from "./firebase";
import { Snackbar } from "@mui/material";

function App() {
  const [resume, setResume] = useState(null);
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);

  useEffect(() => {
    getDownloadURL(ref(storage, "SURIYANARAYANA_CV.pdf")).then((url) => {
      setResume(url);
    });
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <AboutSection url={resume} />
          <OverAllWrapper>
            <Skills />
          </OverAllWrapper>
          <Education />
          <OverAllWrapper>
            <Experience />
          </OverAllWrapper>
          <Projects />
          <OverAllWrapper>
            <Contact
              showSnack={() => setOpen(true)}
              showErrSnack={() => setOpenErr(true)}
            />
          </OverAllWrapper>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
            style={{ zIndex: 9999 }}
          />
          <Snackbar
            open={openErr}
            autoHideDuration={6000}
            onClose={() => setOpenErr(false)}
            message="Failed to send email!"
            severity="erorr"
          />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
