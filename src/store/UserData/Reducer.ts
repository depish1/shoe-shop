import { TUserDataActions } from "./Actions";
import { EUserDataActionTypes, IUserDataState } from "./Types";

const initialState = {
  isLoading: false,
  userData: null,
};
const userDataReducer = (
  state: IUserDataState = initialState,
  action: TUserDataActions
) => {
  switch (action.type) {
    case EUserDataActionTypes.AUTH_LOADING_ON:
      return { ...initialState, isLoading: true };
    case EUserDataActionTypes.AUTH_LOADING_OFF:
      return { ...initialState, isLoading: false };
    case EUserDataActionTypes.LOGIN_SUCCESS:
      return { ...initialState, userData: action.payload };
    case EUserDataActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userDataReducer;
