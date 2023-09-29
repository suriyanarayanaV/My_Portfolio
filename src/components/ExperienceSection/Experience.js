import React, { useState } from "react";
import "./Experience.css";
import { experiences } from "../../const/data";
import { Container, Wrapper, Title, Desc } from "../SkillsSection/SkillsStyled";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Fade } from "react-awesome-reveal";
import { GlowButton } from "../commons/Button/GlowButton";

const WorkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      fill="#be1adb"
    >
      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
    </svg>
  );
};

const Experience = () => {
  const [showSkills, setShowSkills] = useState([""]);

  const clickHandler = (index) => {
    if (index === showSkills) {
      setShowSkills(null); // Clicking the same card again hides its skills
    } else {
      setShowSkills(index); // Clicking a different card shows its skills
    }
  };

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Embark on my professional journey—a narrative of challenges conquered
          and skills honed. Navigate through experiences that shaped my
          expertise, offering a glimpse into a career driven by continuous
          growth and impactful contributions.
        </Desc>
        <VerticalTimeline lineColor={"#191924"}>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work icon"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={
                showSkills === index
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : { background: "#191924" }
              }
              icon={<WorkIcon />}
              iconOnClick={() => {
                clickHandler(index);
              }}
            >
              <h3 className="vertical-timeline-element-title title">
                {experience.role}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.company}
              </h4>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                {experience.period}
              </h4>
              <Fade>
                {showSkills === index ? (
                  <div className="skills">
                    {experience.skills.map((skill) => (
                      <GlowButton
                        key={skill}
                        text={skill}
                        onClick={() => {}}
                        fs={`medium`}
                        width={`auto`}
                        mr={`10px`}
                      ></GlowButton>
                    ))}
                  </div>
                ) : (
                  <p>{experience.desc}</p>
                )}
              </Fade>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
