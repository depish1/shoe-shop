export enum EModalActionTypes {
  CLOSE_MODAL = "CLOSE_MODAL",
  OPEN_MODAL = "OPEN_MODAL",
}

export interface IModalState {
  isModalOpen: boolean;
  modalContent: JSX.Element | null;
}
