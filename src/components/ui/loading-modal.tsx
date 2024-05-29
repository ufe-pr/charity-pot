import React from "react";
import "./loading-modal.css";

interface ModalProps {
  isOpen?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const LoadingModal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="loader"></div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LoadingModal;
