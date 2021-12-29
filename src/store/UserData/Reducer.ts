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
  console.log("reducer", action);
  switch (action.type) {
    case UserDataActionTypes.LOGIN_LOADING:
      return { ...initialState, isLoading: true };
    case UserDataActionTypes.LOGIN_SUCCESS:
      console.log(action);
      return { ...initialState, userData: action.payload };
    case UserDataActionTypes.LOGIN_FAIL:
      console.log(action);
      return { ...initialState, errorMsg: action.payload };
    case UserDataActionTypes.LOGOUT:
      console.log(action);
      return initialState;
    default:
      return state;
  }
};

export default userDataReducer;
