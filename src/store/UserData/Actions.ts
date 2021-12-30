import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { EUserDataActionTypes } from "./Types";
import { FirebaseMethods } from "utils/firebase/FirebaseHelper";

export const login =
  (email: string, password: string) =>
  async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({
        type: EUserDataActionTypes.LOGIN_LOADING,
      });
      const authUserResp = await FirebaseMethods.authUser(email, password);
      const userData = await FirebaseMethods.getDocumentById(
        authUserResp.uid,
        "userData"
      );

      dispatch({
        type: EUserDataActionTypes.LOGIN_SUCCESS,
        payload: {
          ...authUserResp,
          name: userData.name,
          adress: userData.adress,
        },
      });
    } catch (error) {
      dispatch({
        type: EUserDataActionTypes.LOGIN_FAIL,
        payload: "Niepoprawny email lub hasło",
      });
      throw new Error("Błąd logowania");
    }
  };
