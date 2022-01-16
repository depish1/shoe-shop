import { TMenuActions } from "./Actions";
import { EMenuActionTypes, IMenuState } from "./Types";

const initialState = {
  isMenuOpen: null,
};

const menuReducer = (
  state: IMenuState = initialState,
  action: TMenuActions
) => {
  switch (action.type) {
    case EMenuActionTypes.TOGGLE_MENU:
      return { isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};

export default menuReducer;
