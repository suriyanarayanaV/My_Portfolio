import React, { Fragment } from "react";

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
import { Fade } from "react-reveal";
import Tooltip from "@mui/material/Tooltip";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc>
        <Fade right duration={2000}>
          <Subtitle>Full Stack Development</Subtitle>
        </Fade>
        <Fade left duration={2000}>
          <SkillsContainer>
            <Skill>
              <SkillList>
                {skills.map((skill, i) => (
                  <SkillItem key={i}>
                    <Tooltip arrow title={skill.name}>
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
