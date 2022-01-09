import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.white1};
  overflow: hidden;
  color: ${({ theme: { colors } }) => colors.dark1};
  text-decoration: none;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }
`;
export const StyledProductImgWrapper = styled.div`
  display: flex;
  height: 300px;
  overflow: hidden;
`;
export const StyledProductCardImg = styled.img`
  display: block;
  max-width: 355px;
  width: 100%;
  height: auto;
  max-height: 100%;
`;

export const StyledProductCardDesc = styled.p`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-top: 1px solid ${({ theme: { colors } }) => colors.secondary}99;
`;

export const StyledProductName = styled.span`
  font-weight: bold;
`;
export const StyledProductPrice = styled.span`
  margin-top: 0.5rem;
  color: ${({ theme: { colors } }) => colors.dark2};
`;
