import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-myburger-7e8c4.firebaseio.com/'
});

export default instance;
