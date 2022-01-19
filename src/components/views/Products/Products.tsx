import ProductsList from "components/organisms/ProductsList/ProductsList";
import FiltersList from "components/organisms/FiltersList/FiltersList";
import styled from "styled-components";
import { SectionBackgroundContainer } from "components/atoms/Wrappers/Wrappers.styled";
import ExpandFiltersMobileButton from "components/atoms/ExpandFiltersMobileButton/ExpandFiltersMobileButton";
import { useState } from "react";

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1rem;
  width: 100%;
  max-width: 1200px;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    max-width: 550px;
  }
`;

const Products: React.FC = () => {
  const [isFiltersWindowOpen, setIsFiltersWindowOpen] =
    useState<boolean>(false);

  const expandHandlaer = () => {
    console.log("xddd");
    setIsFiltersWindowOpen((prevState) => !prevState);
  };
  return (
    <SectionBackgroundContainer>
      <StyledProductsContainer>
        <ExpandFiltersMobileButton
          isOpen={isFiltersWindowOpen}
          clickHandler={expandHandlaer}
        />
        <FiltersList isFiltersWindowOpen={isFiltersWindowOpen} />
        <ProductsList isFiltersWindowOpen={isFiltersWindowOpen} />
      </StyledProductsContainer>
    </SectionBackgroundContainer>
  );
};

export default Products;
