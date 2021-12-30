import styled from "styled-components";

export const SectionBackgroundContainer = styled.main`
  background-color: ${({ theme: { colors } }) => colors.white2};
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  width: 100%;
  max-width: 450px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
