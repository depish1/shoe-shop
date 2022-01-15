import styled from "styled-components";

interface StyledHeadlineProps {
  noMargin?: boolean;
}

export const StyledHeadline2 = styled.h2<StyledHeadlineProps>`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: ${({ noMargin, theme: { spacing } }) =>
    noMargin ? "0" : spacing.l};
  position: relative;
  z-index: 2;

  &::before {
    display: block;
    content: "";
    width: 110%;
    height: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
export const StyledHeadline3 = styled.h2<StyledHeadlineProps>`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: ${({ noMargin, theme: { spacing } }) =>
    noMargin ? "0" : spacing.l};
  position: relative;
  z-index: 2;

  &::before {
    display: block;
    content: "";
    width: 110%;
    height: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
export const StyledHeadline4 = styled.h2<StyledHeadlineProps>`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: ${({ noMargin, theme: { spacing } }) =>
    noMargin ? "0" : spacing.l};
  position: relative;
  z-index: 2;

  &::before {
    display: block;
    content: "";
    width: 110%;
    height: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
