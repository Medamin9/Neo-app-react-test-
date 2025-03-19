import axios from 'axios';

const API_KEY = 'DEMO_KEY';
// Base URL for NASA's Near Earth Object (NEO) API
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse';

export const fetchNEOData = async () => {
  
  // Send a GET request to the NASA API to retrieve NEO data
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  return response.data;
};
