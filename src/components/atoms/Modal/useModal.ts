import { useAppDispatch } from "store/hooks";
import { EModalActionTypes } from "store/Modal/Types";
import { MouseEvent } from "react";

export const useModal = () => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch({ type: EModalActionTypes.CLOSE_MODAL });
  };
  const openModal = (e?: MouseEvent, rest?: JSX.Element[]) => {
    let modalContent;
    if (rest) {
      [modalContent] = rest;
    }

    dispatch({ type: EModalActionTypes.OPEN_MODAL, payload: modalContent });
  };

  return { openModal, closeModal };
};
