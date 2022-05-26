import React, { useContext, useRef } from "react";
import { ThemeContext } from "../services/themeProvider/ThemeProvider";
import { useOutsideClick } from "../utils/customHooks";
import styles from "../styles/modal.module.scss";
import Button from "./Button";

function Modal({ children }) {
  const { showModal, toggleShowModal } = useContext(ThemeContext);
  const ref = useRef();
  useOutsideClick(ref, () => {
    toggleShowModal(showModal !== true);
  });
  const handleClick = () => {
    toggleShowModal();
  };
  return (
    <div className={styles.modal}>
      {showModal && (
        <div className="modal-background">
          <div className="modal-popup" ref={ref}>
            <Button text={"X"} buttonType={"x-btn"} handleClick={handleClick} />
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
