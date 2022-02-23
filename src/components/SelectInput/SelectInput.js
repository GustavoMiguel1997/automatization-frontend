import React from 'react';
import './SelectInput.css';

function SelectInput({ value, options }) {
  const hasOptions = options.length > 0;
  const selectInputClass = 'select'.concat(!hasOptions ? ' -disabled' : '');
  return (
    <select
      className={selectInputClass}
      value={value}
      disabled={!hasOptions}
      onChange={(e) => console.log(e.target.value)}
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
