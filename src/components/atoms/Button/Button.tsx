import { StyledButton } from "./Button.styled";
import { MouseEvent } from "react";

interface IButtonProps {
  text: string;
  type: "submit" | "button";
  clickHandler?: (event: MouseEvent) => void;
  isSecondary?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  text,
  type,
  clickHandler,
  isSecondary,
}) => {
  return (
    <StyledButton type={type} onClick={clickHandler} isSecondary={isSecondary}>
      {text}
    </StyledButton>
  );
};

export default Button;
