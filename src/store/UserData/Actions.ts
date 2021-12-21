import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserDataActionTypes, UserDataActions } from "./Types";

export const loginAction = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  } catch {
    console.log("xd");
  }
};

export const setFetching = (isFetching: boolean): UserDataActions => {
  return { type: UserDataActionTypes.SET_FETCHING, isFetching };
};

export const loginUser = (
  email: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true));
      console.log("Login in progress");
      setTimeout(() => {
        dispatch(set("this_is_access_token"));
        setTimeout(() => {
          dispatch(isFetching(false));
          console.log("Login done");
          resolve();
        }, 1000);
      }, 3000);
    });
  };
};
