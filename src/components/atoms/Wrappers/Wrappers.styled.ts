import styled from "styled-components";
import { MouseEvent } from "react";

export const SectionBackgroundContainer = styled.main`
  background-color: ${({ theme: { colors } }) => colors.white2};
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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

export const TextParagraph = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.l};
`;

export const StyledModalBackground = styled.div<{
  onClick?: (e: MouseEvent) => void;
}>`
  background-color: ${({ theme: { colors } }) => colors.white3}bb;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
