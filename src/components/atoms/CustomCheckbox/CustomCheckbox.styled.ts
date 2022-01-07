import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const CustomCheckboxLabel = styled.label`
  display: block;
  background-color: ${({ theme: { colors } }) => colors.white1};
  color: ${({ theme: { colors } }) => colors.secondary};
  border: ${({ theme: { colors } }) => colors.primary} 2px solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme: { colors } }) => colors.white2};
  }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${CustomCheckboxLabel} {
    color: ${({ theme: { colors } }) => colors.white1};
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;
