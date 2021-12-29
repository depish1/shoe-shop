export enum UserDataActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGIN_LOADING = "LOGIN_LOADING",
  LOGOUT = "LOGOUT",
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

export interface LoginLoading {
  type: typeof UserDataActionTypes.LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof UserDataActionTypes.LOGIN_SUCCESS;
  payload: IUserData;
}
export interface LoginFail {
  type: typeof UserDataActionTypes.LOGIN_FAIL;
  payload: string;
}
export interface LogoutAction {
  type: typeof UserDataActionTypes.LOGOUT;
}

export type UserDataActions =
  | LoginLoading
  | LoginSuccess
  | LoginFail
  | LogoutAction;
