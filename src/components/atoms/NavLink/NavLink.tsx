import { StyledNavLink, StyledNavElement } from "./NavLink.styled";
import { useAppDispatch } from "store/hooks";
import { EUserDataActionTypes } from "store/UserData/Types";

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
  return (
    <StyledNavElement>
      <StyledNavLink to={path} onClick={isLogout ? logoutHandle : undefined}>
        {text}
        <Icon />
      </StyledNavLink>
    </StyledNavElement>
  );
};

export default NavLink;
