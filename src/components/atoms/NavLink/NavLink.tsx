import { StyledNavLink, StyledNavElement } from "./NavLink.styled";

interface INavLinkProps {
  text: string;
  path: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const NavLink: React.FC<INavLinkProps> = ({ text, path, Icon }) => {
  return (
    <StyledNavElement>
      <StyledNavLink to={path}>
        {text}
        <Icon />
      </StyledNavLink>
    </StyledNavElement>
  );
};

export default NavLink;
