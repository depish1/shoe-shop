import { EModalActionTypes } from "./Types";

interface ICloseModalAction {
  type: EModalActionTypes.CLOSE_MODAL;
}
interface IOpenModalAction {
  type: EModalActionTypes.OPEN_MODAL;
  payload: JSX.Element;
}

export type TModalActions = ICloseModalAction | IOpenModalAction;
