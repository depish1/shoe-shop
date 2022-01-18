import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  z-index: 2;
  cursor: pointer;
  left: 0;
  top: 0;
  transform: background 0.2s ease-in-out;

  svg {
    fill: ${({ theme: { colors } }) => colors.dark3};
    width: 50px;
    height: 50px;
    transform: fill 0.2s ease-in-out;
  }

  &:hover {
    background: ${({ theme: { colors } }) => colors.white2};
    svg {
      fill: ${({ theme: { colors } }) => colors.dark1};
    }
  }

  @media only screen and (max-width: 800px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 400px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;
