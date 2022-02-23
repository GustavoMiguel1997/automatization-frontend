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
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getFiles() {
  try {
    const response = await fetch(`${BASE_URL}/${GET_FILES}`, { method: 'GET' });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { uploadFile, getFiles };
