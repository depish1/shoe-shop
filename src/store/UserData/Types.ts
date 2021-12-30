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
}
