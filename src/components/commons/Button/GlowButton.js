import { Button } from "./GlowbuttonStyled";
export const GlowButton = (props) => {
  return (
    <Button
      type="button"
      onClick={props.onClick}
      fs={props.fs}
      padding={props.padding}
      width={props.width}
      mr={props.mr}
    >
      {props.text}
    </Button>
  );
};
