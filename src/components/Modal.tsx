import { ReactNode } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  setIsOpen,

  children,
}: {
  setIsOpen: (e: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>{children}</div>
    </>
  );
};

export default Modal;
