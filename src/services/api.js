import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.2.0.95:8001',
});

export default api;
