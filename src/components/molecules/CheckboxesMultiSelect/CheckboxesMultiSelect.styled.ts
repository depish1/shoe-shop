import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
`;
export const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s};
`;
export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing.m};
`;
