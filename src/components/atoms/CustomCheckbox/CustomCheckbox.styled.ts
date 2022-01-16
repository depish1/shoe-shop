import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const CustomCheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white1};
  color: ${({ theme: { colors } }) => colors.secondary};
  border: ${({ theme: { colors } }) => colors.white3} 1px solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: ${({ theme: { colors } }) => colors.dark3} 1px solid;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${CustomCheckboxLabel} {
    border: ${({ theme: { colors } }) => colors.primary} 1px solid;
    color: ${({ theme: { colors } }) => colors.white1};
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;
