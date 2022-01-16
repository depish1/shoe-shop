import { EMenuActionTypes } from "./Types";

interface IToggleMenuAction {
  type: EMenuActionTypes.TOGGLE_MENU;
}

export type TMenuActions = IToggleMenuAction;
