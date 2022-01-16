import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";
import Logo from "components/atoms/Logo/Logo";
import Navigation from "components/molecules/Navigation/Navigation";
import { useAppSelector } from "store/hooks";
import { StyledHeader, MobileWrapper } from "./Header.styled";

const Header: React.FC = () => {
  const isMenuOpen = useAppSelector((state) => state.menuReducer.isMenuOpen);
  return (
    <StyledHeader isMenuOpen={isMenuOpen}>
      <MobileWrapper>
        <Logo textPart1="Shoe" textPart2="Shop" />
        <HamburgerButton />
      </MobileWrapper>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
