import NavLink from "components/atoms/NavLink/NavLink";
import { useAppSelector } from "store/hooks";
import { StyledNavigation, StyledMenuList } from "./Navigation.styled";
import { navData } from "./Navigation.data";

const Navigation: React.FC = () => {
  const userData = useAppSelector((state) => state.userDataReducer.userData);
  const isMenuOpen = useAppSelector((state) => state.menuReducer.isMenuOpen);
  const linksToRender = userData ? navData.registered : navData.unregistered;
  return (
    <StyledNavigation isMenuOpen={isMenuOpen}>
      <StyledMenuList>
        {linksToRender.map((navObject, index) => (
          <NavLink key={index} {...navObject} />
        ))}
      </StyledMenuList>
    </StyledNavigation>
  );
};

export default Navigation;
