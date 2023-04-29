import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://192.168.1.110:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = data =>
  api
    .get('/user', data)
    .then(resp => resp.data)
    .catch(error => error);

export const dataSearch = () =>
  api
    .get('/request')
    .then(resp => resp.data)
    .catch(error => error);

export const update = data =>
  api
    .put('/request', data)
    .then(resp => resp.data)
    .catch(error => error);

export const sendData = data =>
  api
    .post('/request', data)
    .then(resp => resp.data)
    .catch(error => error);
