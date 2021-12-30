import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  height: ${({ theme }) => theme.headerHeight};
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  z-index: 2;
`;
