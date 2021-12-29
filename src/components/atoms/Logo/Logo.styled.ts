import styled from "styled-components";

export const StyledLogo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const FirstTextPart = styled.span`
  color: ${({ theme: { colors } }) => colors.primary1};
`;
export const SecondTextPart = styled.span`
  color: ${({ theme: { colors } }) => colors.white1};
`;
