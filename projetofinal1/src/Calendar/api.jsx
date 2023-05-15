import axios from 'axios';
const date = new Date();

const anoatual = date.getFullYear();

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/feriados/v1/' + anoatual,
});

export default api;
