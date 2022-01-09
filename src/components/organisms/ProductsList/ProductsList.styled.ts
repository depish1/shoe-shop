import styled from "styled-components";

export const StyledProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
`;
export const StyledProductsWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;