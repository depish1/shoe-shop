import styled from "styled-components";

interface IFormFieldProps {
  isInvalid?: boolean;
  noMargin?: boolean;
}

export const FieldWrapper = styled.div<IFormFieldProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({ noMargin, theme: { spacing } }) =>
    noMargin ? "0" : spacing.l};
`;

export const StyledLabel = styled.label<IFormFieldProps>`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  margin-left: 0.7rem;
  color: ${({ isInvalid, theme: { colors } }) =>
    isInvalid ? colors.error : colors.secondary1};
  font-weight: bold;
  font-size: 0.9rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  padding: 0 0.3rem;
`;

export const StyledInput = styled.input<IFormFieldProps>`
  padding: 0.7rem 1rem;
  padding-right: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  border: 2px solid
    ${({ isInvalid, theme: { colors } }) =>
      isInvalid ? colors.error : colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  width: 100%;

  &:focus,
  &:hover {
    border: 2px solid
      ${({ isInvalid, theme: { colors } }) =>
        isInvalid ? colors.errorHover : colors.primary};

    & + ${StyledLabel} {
      color: ${({ isInvalid, theme: { colors } }) =>
        isInvalid ? colors.errorHover : colors.primary};
    }
  }
`;

export const StyledErrorMsg = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.error};
  margin-top: ${({ theme: { spacing } }) => spacing.s};
`;
