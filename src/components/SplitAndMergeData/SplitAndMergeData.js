import React, { useState, useRef, useEffect } from 'react';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import Alert from '../components/Alert/Alert';
import { getSpreadsheetZip } from '../services/splitAndMergeData';
import './splitAndMergeData.css';

function splitAndMergeData(){
  const [file, setFile] = useState(null);
  const [isLoadingSpreadsheet, setIsLoadingSpreadsheet] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);

  function handleInputChange(e) {
    const inputElement = inputRef.current;
    if (inputElement.files[0]) {
      const fileName = inputElement.files[0];
      setFile(fileName);
    }
  }

  async function handleClick() {
    setIsLoadingSpreadsheet(true);

    try {
      const blob = await getSpreadsheetZip(file);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'planilhas.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setAlertMessage('Planilha gerada com sucesso!');
    } catch (error) {
      setAlertMessage('Ocorreu um erro, tente novamente');
    }

    // esse set está dando problema - setFile(null);
    setShowAlert(true);
    setIsLoadingSpreadsheet(false);
  }

  const disableButton = !file || (file && isLoadingSpreadsheet);
  const buttonClass = 'button'.concat(disableButton ? ' -disabled' : '');

  return (
    <main>
      <h1>Split and Merge Data</h1>
      <div className="box">
        <div>
          <input
            id="file"
            type="file"
            name="file"
            ref={inputRef}
            className="inputfile"
            onChange={handleInputChange}
          />
          <label htmlFor="file" id="label">
            {file ? file.name : 'Selecionar arquivo...'}
          </label>
        </div>
        <select name="filter" id="filter">
          <option value="">Campo de filtros</option>
        </select>
        <select name="values" id="values">
          <option value="">Campo de Valores</option>
        </select>
        <button className={buttonClass} onClick={handleClick}>
          Gerar Planilhas
        </button>
        {isLoadingSpreadsheet && <LoadingIndicator />}
      </div>
      {showAlert && <Alert message={alertMessage} />}
    </main>
  );
}

export default splitAndMergeData;