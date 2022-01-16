import { useAppDispatch, useAppSelector } from "store/hooks";
import { EMenuActionTypes } from "store/Menu/Types";
import {
  StyledButton,
  TopLine,
  MiddleLine,
  BottomLine,
} from "./HamburgerButton.styled";

const HamburgerButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.menuReducer.isMenuOpen);

  const clickHandler = () => {
    dispatch({ type: EMenuActionTypes.TOGGLE_MENU });
  };
  return (
    <StyledButton isMenuOpen={isMenuOpen} onClick={clickHandler}>
      <TopLine isMenuOpen={isMenuOpen} />
      <MiddleLine isMenuOpen={isMenuOpen} />
      <BottomLine isMenuOpen={isMenuOpen} />
    </StyledButton>
  );
};

export default HamburgerButton;
