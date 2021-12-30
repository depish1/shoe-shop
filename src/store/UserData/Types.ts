export enum EUserDataActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGOUT = "LOGOUT",
  AUTH_LOADING_ON = "AUTH_LOADING_ON",
  AUTH_LOADING_OFF = "AUTH_LOADING_OFF",
}

export interface IAdress {
  street?: string;
  houseNumber?: string;
  flatNumber?: string;
  city?: string;
  zipCode?: string;
}

export interface IUserData {
  uid: string;
  email: string;
  name?: string;
  adress?: IAdress;
}

export interface IUserDataState {
  userData: null | IUserData;
  isLoading: boolean;
  errorMsg: string;
}

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
