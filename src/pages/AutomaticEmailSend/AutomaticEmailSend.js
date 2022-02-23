import React from 'react';
import constructionImage from './images/construction.png';
import './AutomaticEmailSend.css';

function AutomaticEmailSend() {
  return (
    <div
      className="automaticEmailSend"
      style={{ backgroundImage: `url(${constructionImage})` }}
    >
      <h1 className="automaticEmailSend__title">Em desenvolvimento</h1>
    </div>
  );
}

export default AutomaticEmailSend;
