import styled from "styled-components";

export const StyledHeadline2 = styled.h2`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
  position: relative;
  z-index: 2;

  &::before {
    display: block;
    content: "";
    width: 110%;
    height: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary1};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
export const StyledHeadline3 = styled.h2`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
  position: relative;
  z-index: 2;

  &::before {
    display: block;
    content: "";
    width: 110%;
    height: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary1};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
export const StyledHeadline4 = styled.h2`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
  position: relative;
  z-index: 2;

  &::before {
    display: block;
    content: "";
    width: 110%;
    height: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary1};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
