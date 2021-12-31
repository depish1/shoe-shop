import { TModalActions } from "./Actions";
import { EModalActionTypes, IModalState } from "./Types";

const initialState = {
  isModalOpen: false,
  modalContent: null,
};
const modalReducer = (
  state: IModalState = initialState,
  action: TModalActions
) => {
  switch (action.type) {
    case EModalActionTypes.CLOSE_MODAL:
      return {
        modalContent: null,
        isModalOpen: false,
      };
    case EModalActionTypes.OPEN_MODAL:
      return {
        modalContent: action.payload,
        isModalOpen: true,
      };
    default:
      return state;
  }
};

export default modalReducer;
