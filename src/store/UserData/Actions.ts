import { EUserDataActionTypes, IUserData } from "./Types";

export interface IAuthLoadingOnAction {
  type: EUserDataActionTypes.AUTH_LOADING_ON;
}

export interface IAuthLoadingOffAction {
  type: EUserDataActionTypes.AUTH_LOADING_OFF;
}

export interface ILoginSuccessAction {
  type: EUserDataActionTypes.LOGIN_SUCCESS;
  payload: IUserData;
}

export interface ILogoutAction {
  type: EUserDataActionTypes.LOGOUT;
}

export type TUserDataActions =
  | IAuthLoadingOnAction
  | IAuthLoadingOffAction
  | ILoginSuccessAction
  | ILogoutAction;
