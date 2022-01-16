import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme: { colors } }) => colors.white3};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.white1};
  overflow: hidden;
  color: ${({ theme: { colors } }) => colors.dark1};
  text-decoration: none;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
export const StyledProductImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  overflow: hidden;
`;
export const StyledProductCardImg = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const StyledProductCardDesc = styled.p`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-top: 1px solid ${({ theme: { colors } }) => colors.white3};
`;

export const StyledProductName = styled.span`
  font-weight: bold;
`;
export const StyledProductPrice = styled.span`
  margin-top: 0.5rem;
  color: ${({ theme: { colors } }) => colors.dark2};
`;
