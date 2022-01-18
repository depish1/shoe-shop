import { ReactComponent as BackIcon } from "assets/icons/BackIcon.svg";
import { StyledButton } from "./BackButton.styled";

interface IBackButtonProps {
  backHandler: () => void;
}

const BackButton: React.FC<IBackButtonProps> = ({ backHandler }) => {
  return (
    <StyledButton onClick={backHandler}>
      <BackIcon />
    </StyledButton>
  );
};

export default BackButton;
