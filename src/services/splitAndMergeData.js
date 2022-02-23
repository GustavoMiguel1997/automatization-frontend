import { BASE_URL, SPLIT_MERGE_DATA } from './urls';

async function getSpreadsheetZip(file) {
  const formdata = new FormData();
  formdata.append('file', file);
  formdata.append('field', 'Plano de Contas');
  formdata.append('values_name', 'Valor Pg.');

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
    mode: 'cors',
  };

  try {
    const response = await fetch(
      `${BASE_URL}/${SPLIT_MERGE_DATA}`,
      requestOptions
    );
    return validateReponse(response);
  } catch (error) {
    console.error(error);
    return error;
  }
}

function validateReponse(response) {
  switch (response.status) {
    case response:
      return response;
    case 404:
      return new Error('Mano deu merda');
  }
}

export { getSpreadsheetZip };
