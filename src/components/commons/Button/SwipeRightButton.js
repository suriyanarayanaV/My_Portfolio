import React from "react";
import { Wrapper, StyledLink } from "./SwiperightButtonStyled"; // Update the path

const SwipeButton = (props) => {
  return (
    <Wrapper>
      <StyledLink href="#">{props.text}</StyledLink>
    </Wrapper>
  );
};

export default SwipeButton;
