import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action, ActionCreator, Dispatch } from "redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserDataActionTypes, UserDataActions } from "./Types";

// import { Dispatch } from "redux";

export const login =
  (email: string, password: string) =>
  async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({
        type: UserDataActionTypes.LOGIN_LOADING,
      });
      console.log("xdddd");
      const asyncResp = await authUser(email, password);

      const userData = {
        email: asyncResp.user.email,
        uid: asyncResp.user.uid,
        name: asyncResp.user.displayName,
      };
      console.log(userData);

      dispatch({
        type: UserDataActionTypes.LOGIN_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: UserDataActionTypes.LOGIN_FAIL,
        payload: "Błąd logowania",
      });
    }
  };

const authUser = async (email: string, password: string): Promise<any> => {
  const auth = getAuth();
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials;
  } catch (error: any) {
    throw new Error(error);
  }
};
