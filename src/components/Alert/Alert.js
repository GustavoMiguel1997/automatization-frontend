import React, { useRef } from 'react';
import './Alert.css';

function Alert({ message, status, isOpen }) {
  const alertClass = 'alert'.concat(` -${status}`, `${isOpen ? ' -show' : ''}`);
  const alertRef = useRef(null);

  return (
    <div className={alertClass} ref={alertRef}>
      <label>{message}</label>
    </div>
  );
}

Alert.defaultProps = {
  status: 'success',
};

export default Alert;
