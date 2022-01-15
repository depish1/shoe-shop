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

export const StyledPrice = styled.span`
  display: block;
  width: max-content;
  font-size: 2rem;
  font-weight: bold;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme: { colors } }) => colors.white1};
  background-color: ${({ theme: { colors } }) => colors.error};
`;
export const StyledLabel = styled.span`
  display: block;
  width: min-content;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.secondary};
  margin-bottom: 1rem;
`;

export const StyledData = styled.span`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme: { colors } }) => colors.dark2};
`;

export const DataWrapper = styled.p``;
