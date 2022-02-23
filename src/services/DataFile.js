import { BASE_URL, UPLOAD_FILE, GET_FILES } from './urls';

async function uploadFile(file) {
  const formdata = new FormData();
  formdata.append('file', file);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(`${BASE_URL}/${UPLOAD_FILE}`, requestOptions);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getFiles(category, valueField) {
  try {
    const response = await fetch(
      `${BASE_URL}/${GET_FILES}?category=${category}&valueField=${valueField}`,
      { method: 'GET' }
    );
    return await response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { uploadFile, getFiles };
