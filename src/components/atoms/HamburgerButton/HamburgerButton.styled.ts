import styled, { keyframes, css } from "styled-components";

interface IHamburgerButtonProps {
  isMenuOpen: boolean | null;
}

const TopCloseKeyframes = keyframes`
  50% {
    width: 0;
  }
  55% {
    width: 0;
    transform: rotate(-45deg) ;
  }
  100% {
    width: 100%;
    transform: rotate(-45deg);
  }
`;
const TopOpenKeyframes = keyframes`
  0% {
    width: 100%;
    transform: rotate(-45deg);
  }
  50% {
    width: 0;
    transform: rotate(-45deg);
  }
  55% {
    width: 0;
    transform: rotate(0) ;
  }
  100% {
    width: 100%;
    transform: rotate(0);
  }
`;

const getTopAnimation = (isMenuOpen: boolean | null) => {
  if (isMenuOpen === null) return null;
  return css`
    animation: 0.4s linear normal
      ${isMenuOpen ? TopCloseKeyframes : TopOpenKeyframes} forwards;
  `;
};
const MiddleCloseKeyframes = keyframes`
  0% {
    width: 70%;
  }
  55% {
    width: 0;
  }

  100% {
    width: 0;
  }
`;
const MiddleOpenKeyframes = keyframes`
  0% {
    width: 0
  }
  55% {
    width: 0;
  }

  100% {
    width: 70%;
  }
`;

const getMiddleAnimation = (isMenuOpen: boolean | null) => {
  if (isMenuOpen === null) return null;
  return css`
    animation: 0.4s linear normal
      ${isMenuOpen ? MiddleCloseKeyframes : MiddleOpenKeyframes} forwards;
  `;
};

const BottomCloseKeyframes = keyframes`
  50% {
    width: 0;
  }
  55% {
    width: 0;
    transform: rotate(45deg) ;
  }
  100% {
    width: 100%;
    transform: rotate(45deg);
  }
`;
const BottomOpenKeyframes = keyframes`
  0% {
    width: 100%;
    transform: rotate(45deg);
  }
  50% {
    width: 0;
    transform: rotate(45deg);
  }
  55% {
    width: 0;
    transform: rotate(0);
  }
  100% {
    width: 100%;
    transform: rotate(0);
  }
`;

const getBottomAnimation = (isMenuOpen: boolean | null) => {
  if (isMenuOpen === null) return null;
  return css`
    animation: 0.4s linear 0s 1 normal
      ${isMenuOpen ? BottomCloseKeyframes : BottomOpenKeyframes} forwards;
  `;
};

export const StyledButton = styled.button<IHamburgerButtonProps>`
  width: 2rem;
  height: 1.5rem;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

export const TopLine = styled.span<IHamburgerButtonProps>`
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme: { colors } }) => colors.white1};
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform-origin: top right;

  ${({ isMenuOpen }) => getTopAnimation(isMenuOpen)};
`;
export const MiddleLine = styled.span<IHamburgerButtonProps>`
  display: block;
  width: 70%;
  height: 2px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: ${({ theme: { colors } }) => colors.white1};
  ${({ isMenuOpen }) => getMiddleAnimation(isMenuOpen)};

  ${({ isMenuOpen }) => (isMenuOpen ? `width: 0;` : null)}
`;
export const BottomLine = styled.span<IHamburgerButtonProps>`
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme: { colors } }) => colors.white1};
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform-origin: bottom right;

  ${({ isMenuOpen }) => getBottomAnimation(isMenuOpen)};
`;
