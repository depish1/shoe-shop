import Headline from "components/atoms/Headline/Headline";
import ProductListElement from "components/molecules/ProductListElement/ProductListElement";
import { useEffect } from "react";
import { IFiltersState, IFilter } from "store/Filters/Types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getProductsFromFirebase } from "store/Products/Operations";
import {
  StyledProductsContainer,
  StyledProductsWrapper,
} from "./ProductsList.styled";

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const getFiltresArr = (filters: IFiltersState): IFilter[] => {
  return Object.keys(filters)
    .map((filterKey) => filters[filterKey as keyof typeof filters])
    .filter(notEmpty);
};

const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filtersReducer);
  const products = useAppSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getProductsFromFirebase(getFiltresArr(filters)));
  }, [dispatch, filters]);
  return (
    <StyledProductsContainer>
      <StyledProductsWrapper>
        {products.map((product) => (
          <ProductListElement key={product.id} product={product} />
        ))}
      </StyledProductsWrapper>
    </StyledProductsContainer>
  );
};

export default ProductsList;
