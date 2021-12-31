import styled, { keyframes } from "styled-components";

const loaderKF = keyframes`
	0%, 10%, 100% {
		width: 80px;
		height: 80px;
	}
	65% {
		width: 150px;
		height: 150px;
	}
`;

const loaderBlockKF = (value: string) => keyframes`
	0%, 30% { 
		transform: rotate(0);
	}
	55% {
		background-color: ${value};
	}
	100% {
		transform: rotate(90deg);

	}
`;
const loaderBlockInverseKF = (value: string) => keyframes`
	0%, 20% { 
		transform: rotate(0);
	}
	55% {
		background-color: ${value};
	}
	100% {
		transform: rotate(-90deg);
	}
`;

export const StyledLoaderBackground = styled.div`
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

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
  animation: ${loaderKF} 1.2s infinite ease-in-out;
`;

export const StyledSquare = styled.span`
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  animation: ${({ theme: { colors } }) => loaderBlockKF(colors.primary)} 1.2s
    infinite ease-in-out both;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};

  &:nth-child(1) {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    top: 0;
    right: 0;
    animation: ${({ theme: { colors } }) =>
        loaderBlockInverseKF(colors.primary)}
      1.2s infinite ease-in-out both;
  }
  &:nth-child(3) {
    bottom: 0;
    left: 0;
    animation: ${({ theme: { colors } }) =>
        loaderBlockInverseKF(colors.primary)}
      1.2s infinite ease-in-out both;
  }
  &:nth-child(4) {
    bottom: 0;
    right: 0;
  }
`;
