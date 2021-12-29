import Logo from "components/atoms/Logo/Logo";
import Navigation from "components/molecules/Navigation/Navigation";
import { StyledHeader } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo textPart1="Shoe" textPart2="Shop" />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
