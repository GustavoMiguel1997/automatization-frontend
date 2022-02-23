import React from 'react';
import './SelectInput.css';

function SelectInput({ label, value, disabledOption, options, onChange }) {
  const hasOptions = options.length > 0;
  const selectClass = 'select'.concat(!hasOptions ? ' -disabled' : '');
  return (
    <div className={selectClass}>
      {label && <label className="select__label">{label}</label>}
      <select
        className="select__input"
        value={value}
        disabled={!hasOptions}
        onChange={onChange}
      >
        {options.map((item) => (
          <option
            key={item}
            value={item}
            disabled={item === disabledOption}
            className={item === disabledOption ? ' .-disabled' : ''}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
