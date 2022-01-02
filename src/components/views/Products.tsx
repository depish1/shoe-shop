import ProductsList from "components/organisms/ProductsList/ProductsList";
import FiltersList from "components/organisms/FiltersList/FiltersList";
import styled from "styled-components";
import {
  SectionBackgroundContainer,
  SectionWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  background-color: ${({ theme: { colors } }) => colors.white2};
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
