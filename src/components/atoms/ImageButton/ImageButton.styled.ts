import styled from "styled-components";

export const StyledImageButton = styled.button<{ isSelected: boolean }>`
  width: 70px;
  height: 70px;
  border: ${({ isSelected, theme: { colors } }) =>
    isSelected ? `2px solid ${colors.primary}` : `1px dashed ${colors.dark3}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white1};
  cursor: ${({ isSelected }) => (isSelected ? "default" : "pointer")};
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.6")};

  &:hover {
    opacity: 1;
    border: ${({ isSelected, theme: { colors } }) =>
      isSelected ? `2px solid ${colors.primary}` : `1px solid ${colors.dark3}`};
  }

  @media only screen and (max-width: 700px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  heigth: auto;
`;
