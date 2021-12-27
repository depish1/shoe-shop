import { StyledButton } from "./Button.styled";
import { MouseEvent } from "react";

interface IButtonProps {
  text: string;
  clickHandler?: (event: MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ text, clickHandler }) => {
  return <StyledButton onClick={clickHandler}>{text}</StyledButton>;
};

export default Button;
