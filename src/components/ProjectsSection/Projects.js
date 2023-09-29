import {
  ProjectsContainer,
  Wrapper,
  Title,
  Desc,
  Body,
} from "./ProjectsStyled";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { projects } from "../../const/data";
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Crafting digital experiences that blend creativity and functionality.
          Explore a showcase of my diverse projects, each a journey of
          innovation and skill
        </Desc>
        <Body>
          {projects.map((project, i) => (
            <Card
              key={i}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: 400,
                maxHeight: "auto",
              }}
              style={{
                backgroundColor: "#171721",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 16px 2px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    color: "#F2F3F4",
                    marginTop: "10px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center",
                  }}
                >
                  {project.title}
                </Typography>

                <CardContent style={{ display: "flex", flexWrap: "wrap" }}>
                  {project.techs.map((tech) => (
                    <Typography
                      key={tech}
                      variant="span"
                      component="span"
                      style={{
                        fontSize: "12px",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: "450",
                        backgroundColor: "#b778c3",
                        borderRadius: "10px",
                        margin: "0 10px 5px 0",
                        padding: "2px 8px",
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </CardContent>

                <Typography
                  variant="body2"
                  color="#F2F3F4"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {project.desc}
                </Typography>
              </CardContent>
              <CardActions style={{ alignSelf: "flex-end" }}>
                {project.demo && <Button size="small">View Demo</Button>}
                {project.git && <Button size="small">Source Code</Button>}
              </CardActions>
            </Card>
          ))}
        </Body>
      </Wrapper>
    </ProjectsContainer>
  );
};

export default Projects;
