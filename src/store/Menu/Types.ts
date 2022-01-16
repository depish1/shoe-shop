export enum EMenuActionTypes {
  TOGGLE_MENU = "TOGGLE_MENU",
}

export interface IMenuState {
  isMenuOpen: boolean | null;
}
