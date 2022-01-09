import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 900px;
  height: calc(100vh - 4rem - ${({ theme }) => theme.headerHeight});
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media only screen and (max-width: 1300px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w1300};
  }
  @media only screen and (max-width: 1100px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w1100};
  }
  @media only screen and (max-width: 900px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w900};
  }
  @media only screen and (max-width: 800px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w800};
  }
  @media only screen and (max-width: 700px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w700};
    height: calc(80vh - 4rem - ${({ theme }) => theme.headerHeight});
  }
  @media only screen and (max-width: 650px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w650};
  }
  @media only screen and (max-width: 600px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w600};
  }
  @media only screen and (max-width: 550px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w550};
  }
  @media only screen and (max-width: 500px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w500};
  }
  @media only screen and (max-width: 450px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w450};
  }
  @media only screen and (max-width: 400px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w400};
  }
  @media only screen and (max-width: 350px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w350};
  }
  @media only screen and (max-width: 300px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w300};
  }
  @media only screen and (max-width: 250px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w250};
  }
`;
export const Slides = styled.div<{
  slidesTransition: string;
}>`
  display: flex;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-${({ slidesTransition }) => slidesTransition}, -50%);
  transition: transform 0.4s ease-in-out;
`;

export const Slide = styled.div`
  padding: 1rem;
  height: calc(100vh - 2rem - ${({ theme }) => theme.headerHeight});
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white1};

  @media only screen and (max-width: 1300px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w1300};
  }
  @media only screen and (max-width: 1100px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w1100};
  }
  @media only screen and (max-width: 900px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w900};
  }
  @media only screen and (max-width: 800px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w800};
  }
  @media only screen and (max-width: 700px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w700};
  }
  @media only screen and (max-width: 650px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w650};
  }
  @media only screen and (max-width: 600px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w600};
  }
  @media only screen and (max-width: 550px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w550};
  }
  @media only screen and (max-width: 500px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w500};
  }
  @media only screen and (max-width: 450px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w450};
  }
  @media only screen and (max-width: 400px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w400};
  }
  @media only screen and (max-width: 350px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w350};
  }
  @media only screen and (max-width: 300px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w300};
  }
  @media only screen and (max-width: 250px) {
    width: ${({ theme: { sliderWidthforMedia } }) => sliderWidthforMedia.w250};
  }
`;
export const Image = styled.img`
  display: block;
  max-width: calc(100% - 1rem);
  max-height: 100%;
  height: auto;
  width: auto;
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
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
