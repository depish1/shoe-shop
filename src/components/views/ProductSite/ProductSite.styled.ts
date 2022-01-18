import styled from "styled-components";

export const StyledProductSiteContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme: { colors } }) => colors.white3};
  background-color: ${({ theme: { colors } }) => colors.white1};
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-areas: "slider data";
  grid-template-columns: 1fr 400px;
  min-height: calc(100vh - 4rem - ${({ theme }) => theme.headerHeight});
  position: relative;

  @media only screen and (max-width: 800px) {
    max-width: 550px;
    min-height: calc(80vh - 4rem - ${({ theme }) => theme.headerHeight});
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "slider"
      "data";
  }
`;
