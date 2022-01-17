import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  grid-area: slider;
  border-right: 1px solid ${({ theme: { colors } }) => colors.white3};
  display: flex;
  align-items: center;
  justify-content: start;
  @media only screen and (max-width: 800px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.white3};
  }
`;

export const Slide = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white1};
`;
export const Image = styled.img`
  display: block;
  max-height: calc(100% - 1rem);
  height: auto;
  width: calc(100% - 1rem);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 700px) {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
