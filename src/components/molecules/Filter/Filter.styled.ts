import styled from "styled-components";

interface IStyledFilterProps {
  isOpen: boolean;
}

export const StyledFilter = styled.div<IStyledFilterProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme: { spacing } }) => spacing.m};
  ${({ isOpen }) =>
    !isOpen &&
    `
  overflow: hidden;
  `}

  &:last-of-type {
    margin-bottom: ${({ theme: { spacing } }) => spacing.l};
  }
`;

export const StyledBigLabel = styled.button<IStyledFilterProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.dark3};
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  padding: 0.3rem;
  padding-bottom: 0.5rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  background: ${({ theme: { colors } }) => colors.white1};
  transition: color 0.2s ease-in-out;

  svg {
    fill: ${({ theme: { colors } }) => colors.dark3};
    transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;
    ${({ isOpen }) =>
      isOpen &&
      `
    transform: rotate(180deg);
    `}
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: ${({ theme: { colors } }) => colors.dark3};
    transition: background-color 0.2s ease-in-out;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.dark1};

    svg {
      fill: ${({ theme: { colors } }) => colors.dark1};
    }

    &::after {
      background-color: ${({ theme: { colors } }) => colors.dark1};
    }
  }
`;

export const StyledChildWrapper = styled.div<IStyledFilterProps>`
  height: auto;
  ${({ isOpen }) =>
    !isOpen &&
    `
  height: 0;
  `}
  transition: height 0.2s ease-in-out;
`;
