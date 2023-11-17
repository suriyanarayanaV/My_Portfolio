import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Desc,
  Subtitle,
  SkillsContainer,
  Skill,
  SkillList,
  SkillItem,
  SkillImage,
} from "./SkillsStyled";
import { skills } from "../../const/data";
import { Fade } from "react-awesome-reveal";
import Tooltip from "@mui/material/Tooltip";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2.5 years.
        </Desc>
        <Fade direction={"right"} duration={2000}>
          <Subtitle>Full Stack Development</Subtitle>
        </Fade>
        <Fade direction={"left"} duration={2000}>
          <SkillsContainer>
            <Skill>
              <SkillList>
                {skills.map((skill, i) => (
                  <SkillItem key={i}>
                    <Tooltip enterTouchDelay={0} arrow title={skill.name}>
                      <SkillImage src={skill.image} />
                    </Tooltip>
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          </SkillsContainer>
        </Fade>
      </Wrapper>
    </Container>
  );
};

export default Skills;
