import { StyledButton, ButtonWrapper } from "./Button.styled";
import { MouseEvent } from "react";

interface IButtonProps {
  text: string;
  type: "submit" | "button";
  clickHandler?: (event: MouseEvent, ...rest: any[]) => void;
  isSecondary?: boolean;
  additionalTopMargin?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  text,
  type,
  clickHandler,
  isSecondary,
  additionalTopMargin,
}) => {
  return (
    <ButtonWrapper>
      <StyledButton
        type={type}
        onClick={clickHandler}
        isSecondary={isSecondary}
        additionalTopMargin={additionalTopMargin}
      >
        {text}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
