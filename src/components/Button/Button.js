import React from 'react';
import './Button.css';

function Button({ label, isDisabled, color, onClick }) {
  const buttonClass = 'button'.concat(
    ` -${color}`,
    isDisabled ? ' -disabled' : ''
  );
  return (
    <button className={buttonClass} disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  color: 'green',
  isDisabled: false,
};

export default Button;
