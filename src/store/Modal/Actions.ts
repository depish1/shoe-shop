import { EModalActionTypes } from "./Types";

export interface ICloseModalAction {
  type: EModalActionTypes.CLOSE_MODAL;
}
export interface IOpenModalAction {
  type: EModalActionTypes.OPEN_MODAL;
  payload: JSX.Element;
}

export type TModalActions = ICloseModalAction | IOpenModalAction;
