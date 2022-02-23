import React from 'react';
import loadingImage from '../../assets/images/spinner.gif';
import './LoadingIndicator.css';

function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <img src={loadingImage} />
    </div>
  );
}

export default LoadingIndicator;
