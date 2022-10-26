import axios from 'axios';
const baseUrl = 'https://secret-headland-86569.herokuapp.com/api/schools';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getAll };