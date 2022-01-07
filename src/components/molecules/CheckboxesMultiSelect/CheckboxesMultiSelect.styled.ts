import styled from "styled-components";

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing.m};
`;
