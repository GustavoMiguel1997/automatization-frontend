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
  const [file, setFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ status: '', message: '', show: false });
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [valueSelected, setValueSelected] = useState('');

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 5000);
    }
  }, [alert.show]);

  async function loadCategories(currentFile, inputValue) {
    try {
      const { categories, ok, message } = await uploadFile(currentFile);
      if (ok) {
        setFile({ currentFile, inputValue });
        setCategories(categories);
        setCategorySelected(categories[0]);
        setValueSelected(categories[1]);
      } else {
        displayAlert('error', message);
      }
    } catch (error) {
      displayAlert('error', 'Ocorreu um erro');
      console.log(error);
    }
  }

  async function downloadFile() {
    try {
      const response = await getFiles(categorySelected, valueSelected);
      const blob = await response.blob();
      generateClientDownload(blob);
      handleDownloadSuccess();
    } catch (error) {
      displayAlert('error', 'Ocorreu um erro ao gerar as planilhas');
      console.log(error);
    }
  }

  function handleCategoryChange(e) {
    const { value } = e.target;
    setCategorySelected(value);
  }

  function handleValueChange(e) {
    const { value } = e.target;
    setValueSelected(value);
  }

  function handleInputChange(e) {
    const { files, value } = e.target;
    if (files[0]) {
      loadCategories(files[0], value);
    }
  }

  function displayAlert(status, message) {
    setAlert({ show: true, status, message });
  }

  function generateClientDownload(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'planilhas.zip';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function handleDownloadSuccess() {
    setIsLoading(false);
    displayAlert('success', 'Planilhas geradas com sucesso');
  }

  async function handleClick() {
    displayAlert('loading', 'Gerando planilhas');
    setFile({});
    setCategories([]);
    setIsLoading(true);
    downloadFile();
  }

  const disableButton = !file.currentFile || (file.currentFile && isLoading);
  const labelText = file.currentFile
    ? file.currentFile.name
    : 'Escolher arquivo';

  return (
    <div className="box">
      <UploadInput
        label={labelText}
        showIcon={!file.currentFile}
        value={file.value || ''}
        onChange={handleInputChange}
      />
      <SelectInput
        label="Campo da categoria"
        placeholder="Escolha a categoria para gerar"
        options={categories}
        value={categorySelected}
        onChange={handleCategoryChange}
        disabledOption={valueSelected}
      />
      <SelectInput
        label="Campo para somar valores"
        options={categories}
        value={valueSelected}
        disabledOption={categorySelected}
        onChange={handleValueChange}
      />

      <Button
        label="Gerar Planilhas"
        isDisabled={disableButton}
        onClick={handleClick}
      />
      {
        <Alert
          message={alert.message}
          status={alert.status}
          isOpen={alert.show}
        />
      }
    </div>
  );
}

export default DataHandler;
