import styled from "styled-components";

export const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme: { colors } }) => colors.secondary}99;
  margin: ${({ theme: { spacing } }) => spacing.l} 0;
  position: relative;
`;

export const StyledSeparatorText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme: { colors } }) => colors.secondary};
  background-color: ${({ theme: { colors } }) => colors.white1};
  padding: 0 0.2rem;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
