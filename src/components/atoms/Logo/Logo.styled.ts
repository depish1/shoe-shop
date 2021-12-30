import styled from "styled-components";
import { Link } from "react-router-dom";

interface IStyledLogoProps {
  to: string;
}

export const StyledLogo = styled(Link)<IStyledLogoProps>`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

export const FirstTextPart = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const SecondTextPart = styled.span`
  color: ${({ theme: { colors } }) => colors.white1};
`;
