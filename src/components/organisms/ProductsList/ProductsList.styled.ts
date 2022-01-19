import styled from "styled-components";

interface IStyledProductsContainerProps {
  isFiltersWindowOpen: boolean;
}

export const StyledProductsContainer = styled.section<IStyledProductsContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;

  @media only screen and (max-width: 700px) {
    display: ${({ isFiltersWindowOpen }) =>
      isFiltersWindowOpen ? "none" : "flex"};
  }
`;
export const StyledProductsWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
