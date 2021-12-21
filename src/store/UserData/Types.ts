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
  name: string;
  adress?: IAdress;
}

export interface IUserDataState {
  userData: null | IUserData;
  isFetching: boolean;
}

export enum UserDataActionTypes {
  LOGIN = "LOGIN",
  SET_USER_DATA = "SET_USER_DATA",
  CLEAR_USER_DATA = "CLEAR_USER_DATA",
}

type LoginUserActionType = {
  type: UserDataActionTypes.LOGIN;
  payload: {
    email: string;
    password: string;
  };
};
type SetUserDataActionType = {
  type: UserDataActionTypes.SET_USER_DATA;
  payload: IUserData;
};

type ClearUserDataActionType = {
  type: UserDataActionTypes.CLEAR_USER_DATA;
};

interface SetFetchingActionType {
  type: "SET_FETCHING";
  isFetching: boolean;
}

export type UserDataActions =
  | LoginUserActionType
  | SetUserDataActionType
  | ClearUserDataActionType
  | SetFetchingActionType;
