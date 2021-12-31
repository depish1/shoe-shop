import {
  StyledModalBackground,
  SectionWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";
import { MouseEvent, useEffect } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { EModalActionTypes } from "store/Modal/Types";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, modalContent } = useAppSelector(
    (state) => state.modalReducer
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const closeModal = (event: MouseEvent) => {
    const target = event.target as Element;
    console.log(target.id);
    if (target.id === "root-modal") {
      dispatch({
        type: EModalActionTypes.CLOSE_MODAL,
      });
    }
  };
  console.log(modalContent);
  return isModalOpen
    ? ReactDOM.createPortal(
        <StyledModalBackground onClick={closeModal}>
          <SectionWrapper>{modalContent}</SectionWrapper>
        </StyledModalBackground>,
        document.getElementById("root-modal")!
      )
    : null;
};

export default Modal;
