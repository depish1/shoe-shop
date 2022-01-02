import styled from "styled-components";

export const StyledFiltersList = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.white1};
  width: 100%;
  padding: 2rem;
`;
