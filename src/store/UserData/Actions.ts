import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { EUserDataActionTypes } from "./Types";
import { FirebaseMethods, IErrorCodes } from "utils/firebase/FirebaseHelper";

export const login =
  (email: string, password: string) =>
  async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({
        type: EUserDataActionTypes.AUTH_LOADING_ON,
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
    } catch (error: any) {
      dispatch({
        type: EUserDataActionTypes.AUTH_LOADING_OFF,
      });
      switch (error.message) {
        case IErrorCodes.WRONG_PASSWORD:
        case IErrorCodes.USER_NOT_FOUND:
          throw new Error("Nieprawidłowy email lub hasło");
        default:
          throw new Error(
            "Wystąpił niespodziewany problem. Spróbuj ponownie później "
          );
      }
    }
  };
