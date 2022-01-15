import styled from "styled-components";

export const StyledBenefitsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Benefit = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  border-top: 1px solid ${({ theme: { colors } }) => colors.white3};
  color: ${({ theme: { colors } }) => colors.dark3};
  font-size: 1.1rem;

  svg {
    fill: ${({ theme: { colors } }) => colors.dark3};
    margin-right: 1rem;
  }
`;

export const BenefitBoldedText = styled.span`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.success};
`;
