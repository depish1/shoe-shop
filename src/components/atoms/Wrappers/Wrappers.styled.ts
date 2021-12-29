import styled from "styled-components";

export const SectionBackgroundContainer = styled.main`
  background-color: ${({ theme: { colors } }) => colors.white2};
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  width: 100%;
  max-width: 500px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
