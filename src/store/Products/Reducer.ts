import { TProductsActions } from "./Actions";
import { EProductsActionTypes, IProductsState } from "./Types";

const initialState = {
  isLoading: false,
  products: null,
};
const productsReducer = (
  state: IProductsState = initialState,
  action: TProductsActions
) => {
  switch (action.type) {
    case EProductsActionTypes.SET_PRODUCTS:
      return { products: action.payload, isLoading: false };
    case EProductsActionTypes.PROD_LOADING_ON:
      return { ...state, isLoading: true };
    case EProductsActionTypes.PROD_LOADING_OFF:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default productsReducer;
