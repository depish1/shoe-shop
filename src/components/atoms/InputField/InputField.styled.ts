import styled from "styled-components";

interface IFormFieldProps {
  isInvalid?: boolean;
}

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
`;

export const StyledLabel = styled.label<IFormFieldProps>`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  margin-left: 1.2rem;
  color: ${({ isInvalid, theme: { colors } }) =>
    isInvalid ? colors.error : colors.secondary1};
  font-weight: bold;
  font-size: 0.9rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  padding: 0 0.3rem;
`;

export const StyledInput = styled.input<IFormFieldProps>`
  padding: 0.7rem 1.5rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  border: 2px solid
    ${({ isInvalid, theme: { colors } }) =>
      isInvalid ? colors.error : colors.secondary1};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

  &:focus,
  &:hover {
    border: 2px solid ${({ theme: { colors } }) => colors.primary1};

    & + ${StyledLabel} {
      color: ${({ theme: { colors } }) => colors.primary1};
    }
  }
`;

export const StyledErrorMsg = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.error};
  margin-top: ${({ theme: { spacing } }) => spacing.s};
`;
