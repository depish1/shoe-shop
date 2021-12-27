import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { UserDataActionTypes } from "./Types";
import { FirebaseMethods } from "utils/firebase/FirebaseHelper";

export const login =
  (email: string, password: string) =>
  async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({
        type: UserDataActionTypes.LOGIN_LOADING,
      });
      const authUserResp = await FirebaseMethods.authUser(email, password);
      const userData = await FirebaseMethods.getDocumentById(
        authUserResp.uid,
        "userData"
      );

      dispatch({
        type: UserDataActionTypes.LOGIN_SUCCESS,
        payload: {
          ...authUserResp,
          name: userData.name,
          adress: userData.adress,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: UserDataActionTypes.LOGIN_FAIL,
        payload: "Błąd logowania",
      });
    }
  };
