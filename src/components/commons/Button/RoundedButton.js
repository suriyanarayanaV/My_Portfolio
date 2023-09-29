import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 0.45rem 1.05rem;
  border: none;
  border-radius: 10rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0cf;
    border-radius: 10rem;
    z-index: -2;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #008fb3;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }

  &:hover {
    color: #fff;
  }

  &:hover:before {
    width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.65rem 1.15rem;
  }
`;

const RoundedButton = (props) => {
  return <Button onClick={props.onClick}>{props.text}</Button>;
};

export default RoundedButton;
