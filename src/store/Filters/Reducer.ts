import { TFiltersActions } from "./Actions";
import { EFilterActionTypes, IFiltersState } from "./Types";

const initialState = {
  filters: [],
};
const modalReducer = (
  state: IFiltersState = initialState,
  action: TFiltersActions
) => {
  switch (action.type) {
    case EFilterActionTypes.SET_FILTERS:
      return {
        filters: action.payload,
      };
    case EFilterActionTypes.CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
