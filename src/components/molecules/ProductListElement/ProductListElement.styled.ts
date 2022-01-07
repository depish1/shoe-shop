import styled from "styled-components";

export const StyledProductListElement = styled.a`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.white1};
  overflow: hidden;
`;
export const StyledProductImgWrapper = styled.div`
  display: flex;
  height: 300px;
  overflow: hidden;
`;
export const StyledProductListElementImg = styled.img`
  display: block;
  max-width: 355px;
  width: 100%;
  height: auto;
  max-height: 100%;
`;

export const StyledProductListElementDesc = styled.p`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-top: 2px solid ${({ theme: { colors } }) => colors.secondary}99;
`;

export const StyledProductName = styled.span`
  font-weight: bold;
`;
export const StyledProductPrice = styled.span`
  margin-top: 0.5rem;
`;
