import NavLink from "components/atoms/NavLink/NavLink";
import { useAppSelector } from "store/hooks";
import { StyledNavigation, StyledMenuList } from "./Navigation.styled";
import { navData } from "./Navigation.data";

const Navigation: React.FC = () => {
  const userData = useAppSelector((state) => state.userDataReducer.userData);
  const linksToRender = userData ? navData.registered : navData.unregistered;
  return (
    <StyledNavigation>
      <StyledMenuList>
        {linksToRender.map((navObject, index) => (
          <NavLink key={index} {...navObject} />
        ))}
      </StyledMenuList>
    </StyledNavigation>
  );
};

export default Navigation;
