// Modal.js
import React from 'react';
import './index.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
        {/* 
        to prevent the modal when click on modal we use stopPropergation() method in event object. 
        otherwise modal will close when click on modal because it trigger onClose function 
        */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-actions">
            <button className="modal-close-btn" onClick={onClose}>
            Close
            </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
