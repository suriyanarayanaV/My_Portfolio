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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { projects } from "../../const/data";
import { Fade } from "react-awesome-reveal";
import VideoPlayer from "../videoComponent/VideoPlayer";
const Projects = () => {
  const [showVidePlayer, setShowVidePlayer] = React.useState(false);
  const [video, setVideo] = React.useState("");
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
                  <Fade cascade>
                    {project.techs.map((tech) => (
                      <Typography
                        key={tech}
                        variant="span"
                        component="span"
                        style={{
                          display: "block",
                          fontSize: "12px",
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: "450",
                          backgroundColor: "#b778c3",
                          borderRadius: "10px",
                          margin: "0 10px 10px 0",
                          padding: "2px 8px",
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Fade>
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
                {project.demo && (
                  <Button size="large">
                    <a
                      href={project.demo}
                      style={{ textDecoration: "none", fontSize: "18px" }}
                    >
                      View App
                    </a>
                  </Button>
                )}
                {project.video && (
                  <Button
                    size="large"
                    onClick={() => {
                      setVideo(project.video);
                      setShowVidePlayer(true);
                    }}
                  >
                    View App
                  </Button>
                )}
                {project.getApp && (
                  <Button size="large">
                    <a
                      href={project.getApp}
                      style={{ textDecoration: "none", fontSize: "18px" }}
                    >
                      Get App
                    </a>
                  </Button>
                )}
                {project.git && <Button size="small">Source Code</Button>}
              </CardActions>
            </Card>
          ))}
          {showVidePlayer && (
            <VideoPlayer
              hide={() => {
                setShowVidePlayer(false);
              }}
              src={video}
            />
          )}
        </Body>
      </Wrapper>
    </ProjectsContainer>
  );
};

export default Projects;
