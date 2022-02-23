const { hostname, port } = location;
const LOCAL = `http://localhost:3000`;
const PROD = 'https://splitandmergedata.herokuapp.com';
const BASE_URL =
  hostname === 'localhost' || hostname === '127.0.0.1' ? LOCAL : PROD;

const SPLIT_MERGE_DATA = 'download';
const UPLOAD_FILE = 'upload';
const GET_FILES = 'getFiles';

export { BASE_URL, UPLOAD_FILE, GET_FILES, SPLIT_MERGE_DATA };
