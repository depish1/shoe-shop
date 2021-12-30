import {
  TUserDataActions,
  EUserDataActionTypes,
  IUserDataState,
} from "./Types";

const initialState = {
  isLoading: false,
  userData: null,
  errorMsg: "",
};
const userDataReducer = (
  state: IUserDataState = initialState,
  action: TUserDataActions
) => {
  switch (action.type) {
    case EUserDataActionTypes.LOGIN_LOADING:
      return { ...initialState, isLoading: true };
    case EUserDataActionTypes.LOGIN_SUCCESS:
      return { ...initialState, userData: action.payload };
    case EUserDataActionTypes.LOGIN_FAIL:
      return { ...initialState, errorMsg: action.payload };
    case EUserDataActionTypes.LOGOUT:
      return initialState;
    case EUserDataActionTypes.CLEAR_ERROR:
      return { ...initialState, errorMsg: "" };
    default:
      return state;
  }
};

export default userDataReducer;
