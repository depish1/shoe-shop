import ProductCard from "components/molecules/ProductCard/ProductCard";
import { useEffect } from "react";
import { IFiltersState, IFilter } from "store/Filters/Types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getProductsFromFirebase } from "store/Products/Operations";
import {
  StyledProductsContainer,
  StyledProductsWrapper,
} from "./ProductsList.styled";

function notEmpty<TValue>(value: TValue | null): value is TValue {
  return value !== null;
}

const getFiltresArr = (filters: IFiltersState): IFilter[] => {
  return Object.keys(filters)
    .map((filterKey) => filters[filterKey as keyof typeof filters])
    .filter(notEmpty);
};

interface IProductsListProps {
  isFiltersWindowOpen: boolean;
}

const ProductsList: React.FC<IProductsListProps> = ({
  isFiltersWindowOpen,
}) => {
  const dispatch = useAppDispatch();
  const [filters, products] = useAppSelector((state) => [
    state.filtersReducer,
    state.productReducer.products,
  ]);

  useEffect(() => {
    dispatch(getProductsFromFirebase(getFiltresArr(filters)));
  }, [dispatch, filters]);
  return (
    <StyledProductsContainer isFiltersWindowOpen={isFiltersWindowOpen}>
      <StyledProductsWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledProductsWrapper>
    </StyledProductsContainer>
  );
};

export default ProductsList;
