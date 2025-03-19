import axios from 'axios';

const API_KEY = 'DEMO_KEY';
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse';

export const fetchNEOData = async () => {
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  return response.data;
};
