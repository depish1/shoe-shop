export enum EUserDataActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGIN_LOADING = "LOGIN_LOADING",
  LOGOUT = "LOGOUT",
  CLEAR_ERROR = "CLEAR_ERROR",
}

interface IAdress {
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

export interface ILoginLoadingAction {
  type: EUserDataActionTypes.LOGIN_LOADING;
}
export interface ILoginSuccessAction {
  type: EUserDataActionTypes.LOGIN_SUCCESS;
  payload: IUserData;
}
export interface ILoginFailAction {
  type: EUserDataActionTypes.LOGIN_FAIL;
  payload: string;
}
export interface ILogoutAction {
  type: EUserDataActionTypes.LOGOUT;
}
export interface IClearErrorAction {
  type: EUserDataActionTypes.CLEAR_ERROR;
}

export type TUserDataActions =
  | ILoginLoadingAction
  | ILoginSuccessAction
  | ILoginFailAction
  | ILogoutAction
  | IClearErrorAction;
