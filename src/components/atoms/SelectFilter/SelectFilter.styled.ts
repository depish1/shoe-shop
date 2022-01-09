import styled from "styled-components";

export const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  margin-left: 0.7rem;
  color: ${({ theme: { colors } }) => colors.secondary1};
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  padding: 0 0.3rem;
`;

export const StyledSelectFilter = styled.select`
  padding: 0.7rem 1rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme: { colors } }) => colors.primary};

    & + ${StyledLabel} {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
