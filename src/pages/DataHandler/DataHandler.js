import React, { useEffect, useState } from 'react';
import {
  Button,
  Alert,
  UploadInput,
  SelectInput,
} from '../../components/components';
import { uploadFile, getFiles } from '../../services/DataFile';
import './DataHandler.css';

function DataHandler() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);

  async function loadCategories(currentFile) {
    try {
      const { categories } = await uploadFile(currentFile);
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChange(e) {
    const { files } = e.target;
    if (files[0]) {
      setFile(files[0]);
      loadCategories(files[0]);
    }
  }

  async function downloadFile() {
    getFiles()
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = 'todo-1.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  async function handleClick() {
    downloadFile();
    /* setIsLoading(true);
    try {
      const response = await getSpreadsheetZip(file);
      downloadFile(response);
      setAlertStatus('success');
      setAlertMessage('Planilha gerada com sucesso!');
    } catch (error) {
      setAlertStatus('error');
      setAlertMessage('Ocorreu um erro, tente novamente');
    }
    setShowAlert(true);
    setIsLoading(false); */
  }

  const disableButton = !file || (file && isLoading);
  const labelText = file ? file.name : 'Escolher arquivo';

  return (
    <div className="box">
      <UploadInput
        label={labelText}
        showIcon={!file}
        onChange={handleInputChange}
      />
      {<SelectInput options={categories} />}
      <Button
        label="Gerar Planilhas"
        isDisabled={disableButton}
        onClick={handleClick}
      />
      {showAlert && <Alert message={alertMessage} status={alertStatus} />}
    </div>
  );
}

export default DataHandler;
