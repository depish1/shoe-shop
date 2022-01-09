import ProductsList from "components/organisms/ProductsList/ProductsList";
import FiltersList from "components/organisms/FiltersList/FiltersList";
import styled from "styled-components";
import { SectionBackgroundContainer } from "components/atoms/Wrappers/Wrappers.styled";

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 2rem;
  background-color: ${({ theme: { colors } }) => colors.white1};
  width: 100%;
  max-width: 1200px;
`;

const Products: React.FC = () => {
  return (
    <SectionBackgroundContainer>
      <StyledProductsContainer>
        <FiltersList />
        <ProductsList />
      </StyledProductsContainer>
    </SectionBackgroundContainer>
  );
};

export default Products;
