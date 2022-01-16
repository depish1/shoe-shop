import styled from "styled-components";

export const StyledButton = styled.button<{
  isSecondary?: boolean;
  additionalTopMargin?: boolean;
}>`
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  margin-top: ${({ additionalTopMargin, theme: { spacing } }) =>
    additionalTopMargin ? spacing.l : null};
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.8rem 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({ isSecondary, theme: { colors } }) =>
    isSecondary
      ? `
  color: ${colors.secondary};
  background-color: ${colors.white1};
  border: 1px solid ${colors.dark3};
`
      : `
  color: ${colors.white1};
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};

`}

  &:hover,
  &focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    color: ${({ theme: { colors } }) => colors.white1};
    background-color: ${({ theme: { colors } }) => colors.primaryHover};
    border: 1px solid ${({ theme: { colors } }) => colors.primaryHover};
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
