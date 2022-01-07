import { TFiltersActions } from "./Actions";
import { EFilterActionTypes, IFiltersState } from "./Types";

const initialState = {
  gender: null,
  brand: null,
  minPrice: null,
  maxPrice: null,
  size: null,
};
const filtersReducer = (
  state: IFiltersState = initialState,
  action: TFiltersActions
) => {
  switch (action.type) {
    case EFilterActionTypes.SET_FILTERS:
      return { ...action.payload };
    case EFilterActionTypes.CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export default filtersReducer;
