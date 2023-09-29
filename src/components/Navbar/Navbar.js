import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "styled-components";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Span,
  NavItems,
  NavLink,
  ButtonContainer,
  LinkedInButton,
  GitHubButton,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavStyled";
import { Bio } from "../../const/data";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "black",
            marginBottom: "20",
            cursor: "pointer",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <LinkedInButton href={Bio.linkedin} target="_blank">
            Linked In
          </LinkedInButton>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>

            <GitHubButton
              style={{
                padding: "10px 56px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github
            </GitHubButton>
            <LinkedInButton
              style={{
                padding: "10px 46px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.linkedin}
              target="_blank"
            >
              Linked In
            </LinkedInButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
