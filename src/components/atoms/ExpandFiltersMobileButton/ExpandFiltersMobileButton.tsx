import { StyledExpandButton } from "./ExpandFiltersMobileButtons.styled";
import { ReactComponent as ExpandIcon } from "assets/icons/ExpandIcon.svg";

interface IExpandFiltersMobileButton {
  isOpen: boolean;
  clickHandler: () => void;
}

const ExpandFiltersMobileButton: React.FC<IExpandFiltersMobileButton> = ({
  isOpen,
  clickHandler,
}) => {
  return (
    <StyledExpandButton isOpen={isOpen} onClick={clickHandler}>
      {isOpen ? "Ukryj filtry" : "Rozwiń filtry"}
      <ExpandIcon />
    </StyledExpandButton>
  );
};

export default ExpandFiltersMobileButton;
