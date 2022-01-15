import styled from "styled-components";

export const StyledFiltersList = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme: { colors } }) => colors.white3};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.white1};
  width: 100%;
  padding: 2rem;
`;

export const StyledInputsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: ${({ theme: { spacing } }) => spacing.m};
`;

export const StyledPaddingWrapper = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing.m};
`;
