import { TBasketActions } from "./Actions";
import { EBasketActionTypes, IBasketState, IBasketProduct } from "./Types";

const initialState = {
  products: [],
};

const removeProductById = (products: IBasketProduct[], id: string) => {
  const index = products.findIndex((product) => product.id === id);
  if (index > -1) {
    return products.splice(index, 1);
  } else {
    return products;
  }
};

const filtersReducer = (
  state: IBasketState = initialState,
  action: TBasketActions
) => {
  switch (action.type) {
    case EBasketActionTypes.ADD_PRODUCT:
      return { products: [...state.products, action.payload] };
    case EBasketActionTypes.REMOVE_PRODUCT:
      return {
        products: [...removeProductById(state.products, action.payload)],
      };
    case EBasketActionTypes.CLEAR_BASKET:
      return initialState;
    default:
      return state;
  }
};

export default filtersReducer;
