import styled from "styled-components";

export const lightTheme = {
  bg: "#FFFFFF",
  bgLight: "#f0f0f0",
  primary: "#be1adb",
  text_primary: "#F2F3F4",
  text_secondary: "black",
  card: "#FFFFFF",
  card_light: "#191924",
  button: "#5c5b5b",
};

export const GradientBackground = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 93%, 0 100%);
`;
