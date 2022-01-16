import styled, { css } from "styled-components";

export const StyledHeader = styled.header<{ isMenuOpen: boolean | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  height: ${({ theme }) => theme.headerHeight};
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 800px) {
    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: auto;
        flex-direction: column;
        padding: 0;
      `}
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.headerHeight};
  padding: 0 2rem;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
