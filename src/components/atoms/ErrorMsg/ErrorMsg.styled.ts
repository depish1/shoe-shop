import styled from "styled-components";

export const ErrorMsg = styled.p`
  width: 100%;
  border: 2px solid ${({ theme: { colors } }) => colors.error};
  color: ${({ theme: { colors } }) => colors.error};
  background-color: ${({ theme: { colors } }) => colors.errorBg};
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: ${({ theme: { spacing } }) => spacing.l};
  text-align: center;
`;
