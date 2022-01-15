import styled from "styled-components";

export const ErrorMsg = styled.p<{ smallSpacing?: true }>`
  width: 100%;
  border: 2px solid ${({ theme: { colors } }) => colors.error};
  color: ${({ theme: { colors } }) => colors.error};
  background-color: ${({ theme: { colors } }) => colors.errorBg};
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: ${({ smallSpacing, theme: { spacing } }) =>
    smallSpacing ? spacing.s : spacing.l};
  text-align: center;
`;
