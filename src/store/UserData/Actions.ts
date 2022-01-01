import { EUserDataActionTypes, IUserData } from "./Types";

interface IAuthLoadingOnAction {
  type: EUserDataActionTypes.AUTH_LOADING_ON;
}

interface IAuthLoadingOffAction {
  type: EUserDataActionTypes.AUTH_LOADING_OFF;
}

interface ILoginSuccessAction {
  type: EUserDataActionTypes.LOGIN_SUCCESS;
  payload: IUserData;
}

interface ILogoutAction {
  type: EUserDataActionTypes.LOGOUT;
}

export type TUserDataActions =
  | IAuthLoadingOnAction
  | IAuthLoadingOffAction
  | ILoginSuccessAction
  | ILogoutAction;
