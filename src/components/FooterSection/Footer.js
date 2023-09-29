import {
  FooterContainer,
  Copyright,
  FooterWrapper,
  Logo,
  SocialMediaIcons,
  SocialMediaIcon,
} from "./FooterStyled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../const/data";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Connect On Social Media!</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Suriyanarayana V. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
