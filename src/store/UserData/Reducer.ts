import { UserDataActions, UserDataActionTypes, IUserDataState } from "./Types";

const initialState = {
  isFetching: false,
  userData: null,
};
const userDataReducer = (
  state: IUserDataState = initialState,
  action: UserDataActions
) => {
  switch (action.type) {
    case UserDataActionTypes.LOGIN:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

export default userDataReducer;
