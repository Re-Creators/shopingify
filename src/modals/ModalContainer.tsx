import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

interface Props {
  onClose: () => void;
  isShow: boolean;
  children: React.ReactNode;
}
const modalRoot = document.getElementById("portal") as HTMLElement;

function ModalContainer({ onClose, isShow, children }: Props) {
  return createPortal(
    <>
      <CSSTransition in={isShow} timeout={300} classNames="fade" unmountOnExit>
        <div
          className={`fixed inset-0 bg-overlay-dark`}
          onClick={onClose}
        ></div>
      </CSSTransition>
      <CSSTransition in={isShow} timeout={300} classNames="fade" unmountOnExit>
        {children}
      </CSSTransition>
    </>,
    modalRoot
  );
}

export default ModalContainer;
