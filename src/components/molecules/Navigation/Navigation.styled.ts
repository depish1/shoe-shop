import styled from "styled-components";

export const StyledNavigation = styled.nav<{ isMenuOpen: boolean | null }>`
  height: 100%;

  @media only screen and (max-width: 800px) {
    width: 100%;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    align-items: start;
  }
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;

  @media only screen and (max-width: 800px) {
    height: auto;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;
