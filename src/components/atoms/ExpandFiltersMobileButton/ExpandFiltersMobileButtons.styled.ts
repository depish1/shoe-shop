import styled from "styled-components";

interface IStyledExpandButtonProps {
  isOpen: boolean;
}

export const StyledExpandButton = styled.button<IStyledExpandButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.dark1};
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  background: ${({ theme: { colors } }) => colors.white1};
  transition: color 0.1s ease-in-out;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme: { colors } }) => colors.white3} 1px solid;

  svg {
    fill: ${({ theme: { colors } }) => colors.dark3};
    transition: transform 0.1s ease-in-out, fill 0.1s ease-in-out;
    ${({ isOpen }) =>
      isOpen &&
      `
    transform: rotate(180deg);
    `}
  }

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.dark1};
    border: 1px solid ${({ theme: { colors } }) => colors.primary};

    svg {
      fill: ${({ theme: { colors } }) => colors.dark1};
    }
  }

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;
