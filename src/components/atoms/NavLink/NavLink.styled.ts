import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavElement = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 100%;
    border-top: 1px solid ${({ theme: { colors } }) => colors.primary};

    &:last-of-type {
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export const StyledNavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 2rem;
  color: ${({ theme: { colors } }) => colors.white1};
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: background-color 0.2s ease-in-out;
  width: 100%;

  svg {
    height: 2rem;
    margin-left: 1rem;
    fill: ${({ theme: { colors } }) => colors.primary};
    transition: fill 0.2s ease-in-out;
  }

  &::after {
    display: block;
    content: "";
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme: { colors } }) => colors.primary};
    width: 0;
    height: 0;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.secondaryHover};
    @media only screen and (min-width: 800px) {
      &::after {
        width: 100%;
        height: 4px;
      }
    }
  }
`;
