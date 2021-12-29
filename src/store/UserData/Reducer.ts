import { UserDataActions, UserDataActionTypes, IUserDataState } from "./Types";

const initialState = {
  isLoading: false,
  userData: null,
  errorMsg: "",
};
const userDataReducer = (
  state: IUserDataState = initialState,
  action: UserDataActions
) => {
  switch (action.type) {
    case UserDataActionTypes.LOGIN_LOADING:
      return { ...initialState, isLoading: true };
    case UserDataActionTypes.LOGIN_SUCCESS:
      return { ...initialState, userData: action.payload };
    case UserDataActionTypes.LOGIN_FAIL:
      return { ...initialState, errorMsg: action.payload };
    case UserDataActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userDataReducer;
