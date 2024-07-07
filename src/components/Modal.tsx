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
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="w-full flex items-center justify-center h-screen absolute top-0 left-0">
        <div className={styles.centered}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
