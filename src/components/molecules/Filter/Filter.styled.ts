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
  color: ${({ theme: { colors } }) => colors.dark1};
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  padding: 0.3rem;
  padding-bottom: 0.4rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  background: ${({ theme: { colors } }) => colors.white1};
  transition: color 0.1s ease-in-out;
  font-size: 0.9rem;

  svg {
    fill: ${({ theme: { colors } }) => colors.dark3};
    transition: transform 0.1s ease-in-out, fill 0.1s ease-in-out;
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
    height: 1px;
    left: 0;
    bottom: 0;
    background-color: ${({ theme: { colors } }) => colors.dark3};
    transition: background-color 0.1s ease-in-out;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.dark1};

    svg {
      fill: ${({ theme: { colors } }) => colors.dark1};
      transform: scale(1.1);
    }

    &::after {
      background-color: ${({ theme: { colors } }) => colors.dark1};
    }
  }
`;

export const StyledChildWrapper = styled.div<IStyledFilterProps>`
  height: auto;
  transition: height 0.1s ease-in-out;
  ${({ isOpen }) =>
    !isOpen &&
    `
  height: 0;
  `}
`;
