import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.5rem 1.5rem;
`;

export const StyledLabel = styled.label`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  margin-left: 1.2rem;
  color: ${({ theme: { colors } }) => colors.secondary1};
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  padding: 0 0.3rem;
`;

export const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  grid-gap: ${({ theme: { spacing } }) => spacing.m};
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
`;

export const StyledBigLabel = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

export const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: ${({ theme: { spacing } }) => spacing.m};
`;
