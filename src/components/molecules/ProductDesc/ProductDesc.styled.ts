import styled from "styled-components";

export const StyledProductDescWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 2rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledBrand = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.dark2};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s};
`;

export const AccessText = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: ${({ theme: { spacing } }) => spacing.s};

  svg {
    fill: ${({ theme: { colors } }) => colors.primary};
    margin-right: ${({ theme: { spacing } }) => spacing.s};
    width: 1em;
    height: 1em;
  }
`;

export const StyledPrice = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0rem;
  color: ${({ theme: { colors } }) => colors.dark1};
`;
export const StyledLabel = styled.span`
  display: block;
  width: min-content;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.dark2};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s};
`;

export const DataWrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.l};

  &:first-child {
    margin-top: 0;
  }
`;
