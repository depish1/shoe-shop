import styled from "styled-components";

export const StyledSelectFilter = styled.select`
  padding: 0.5rem 1.5rem;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledLabel = styled.label`
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
