import React, { useEffect, useRef } from 'react';
import './Alert.css';

function Alert({ message, status }) {
  const alertClass = 'alert'.concat(` -${status}`);
  const alertRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      alertRef.current.classList.add('-show');
    }, 200);
  }, []);

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
