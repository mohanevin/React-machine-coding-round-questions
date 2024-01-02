import React from "react";

const Modal = ({ open, close }) => {
  if (!open) return;
  return (
    <div className="overlay" onClick={() => close(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container">
          <h1>Sample Modal</h1>
          <button onClick={() => close(false)}>close</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
