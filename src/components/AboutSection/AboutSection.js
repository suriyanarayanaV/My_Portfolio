import { AboutBackgroundAnimation } from "./AboutBackgroundAnimation";
import Typewriter from "typewriter-effect";
import {
  AboutContainer,
  AboutBackground,
  AboutBackgroundAnimContainer,
  AboutArticle,
  AboutLeftArticle,
  AboutRightArticle,
  Title,
  TextLoop,
  Span,
  SubTitle,
  ResumeButton,
  Img,
} from "./AboutSectionStyled";
import { Bio } from "../../const/data";
import HeroImage from "../../Images/HeroImage.jpeg";
import { GlowButton } from "../commons/Button/GlowButton";

const AboutSection = (props) => {
  const downloadResumeHandler = () => {
    const link = document.createElement("a");
    link.href = props.url;
    link.download = "SURIYANARAYANA_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  return (
    <AboutContainer id="about">
      <AboutBackground>
        <AboutBackgroundAnimContainer>
          <AboutBackgroundAnimation />
        </AboutBackgroundAnimContainer>
      </AboutBackground>
      <AboutArticle>
        <AboutLeftArticle>
          <Title>
            Hello, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton target="display">
            <GlowButton
              text={"Resume"}
              onClick={() => {
                downloadResumeHandler();
              }}
              fs={`large`}
              width={`220px`}
            ></GlowButton>
          </ResumeButton>
        </AboutLeftArticle>
        <AboutRightArticle>
          <Img src={HeroImage} alt="hero-image" />
        </AboutRightArticle>
      </AboutArticle>
    </AboutContainer>
  );
};

export default AboutSection;
