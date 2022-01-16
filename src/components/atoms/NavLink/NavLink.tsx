import { StyledNavLink, StyledNavElement } from "./NavLink.styled";
import { useAppDispatch } from "store/hooks";
import { EUserDataActionTypes } from "store/UserData/Types";
import { EMenuActionTypes } from "store/Menu/Types";

interface INavLinkProps {
  text: string;
  path: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isLogout?: boolean;
}

const NavLink: React.FC<INavLinkProps> = ({ text, path, Icon, isLogout }) => {
  const dispatch = useAppDispatch();
  const logoutHandle = () => {
    dispatch({ type: EUserDataActionTypes.LOGOUT });
  };

  const clickHandler = () => {
    dispatch({ type: EMenuActionTypes.TOGGLE_MENU });
    isLogout && logoutHandle();
  };
  return (
    <StyledNavElement>
      <StyledNavLink to={path} onClick={clickHandler}>
        {text}
        <Icon />
      </StyledNavLink>
    </StyledNavElement>
  );
};

export default NavLink;
