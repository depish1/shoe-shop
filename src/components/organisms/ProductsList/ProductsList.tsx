import Headline from "components/atoms/Headline/Headline";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getProductsFromFirebase } from "store/Products/Operations";
import {
  StyledProductsContainer,
  StyledProductsWrapper,
} from "./ProductsList.styled";

const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filtersReducer.filters);
  useEffect(() => {
    dispatch(getProductsFromFirebase(filters));
  }, [dispatch, filters]);
  return (
    <StyledProductsContainer>
      <Headline size={2}>Produkty</Headline>
      <StyledProductsWrapper></StyledProductsWrapper>
    </StyledProductsContainer>
  );
};

export default ProductsList;
