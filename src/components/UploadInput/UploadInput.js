import React from 'react';
import uploadIcon from './icons/upload.png';
import './UploadInput.css';

function UploadInput({ label, value, showIcon, onChange }) {
  return (
    <>
      <input
        id="file"
        type="file"
        className="uploadInput"
        value={value}
        onChange={onChange}
      />
      <label htmlFor="file" className="uploadInput-label">
        {showIcon && <img src={uploadIcon} />}
        {label}
      </label>
    </>
  );
}

export default UploadInput;
