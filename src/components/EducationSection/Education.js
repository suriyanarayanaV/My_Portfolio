import {
  EducationContainer,
  Wrapper,
  Title,
  Desc,
  Window,
  WindowNav,
  WindowUl,
  WindowLi,
  WindowNavLi,
  WindowMain,
  WindowLogo,
  AcademicDetails,
  AcademicDescriptionDiv,
  AcademicDescription,
  WindowNavTitle,
} from "./EducationStyled";
import { motion, AnimatePresence } from "framer-motion";
import "./Education.css";
import { Fade } from "react-awesome-reveal";

import { educations } from "../../const/data";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [selectedTab, setSelectedTab] = useState(educations[0]);
  return (
    <EducationContainer id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>My Educational Milestone And Qualifications</Desc>
        <Fade direction={"up"} duration={2000}>
          <Window>
            <WindowNav>
              {educations.map((education) => (
                <WindowNavLi
                  key={education.name}
                  onClick={() => setSelectedTab(education)}
                >
                  <WindowNavTitle
                    selected={education.name === selectedTab.name}
                  >
                    {education.title}
                  </WindowNavTitle>
                  {education.name === selectedTab.name ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </WindowNavLi>
              ))}
            </WindowNav>
            <WindowMain>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab.name ? selectedTab.name : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedTab ? (
                    <>
                      <WindowLogo>
                        <FaGraduationCap size={"4rem"} />

                        <AcademicDetails>
                          <WindowLi>{selectedTab.name}</WindowLi>
                          <WindowLi>{selectedTab.year}</WindowLi>
                        </AcademicDetails>
                      </WindowLogo>
                      <AcademicDescriptionDiv>
                        <AcademicDescription>
                          {selectedTab.description}
                        </AcademicDescription>
                      </AcademicDescriptionDiv>
                    </>
                  ) : (
                    "😋"
                  )}
                </motion.div>
              </AnimatePresence>
            </WindowMain>
          </Window>
        </Fade>
      </Wrapper>
    </EducationContainer>
  );
};
export default Education;
