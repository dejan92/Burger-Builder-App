import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-burger-builder-b5b01.firebaseio.com/"
});

export default instance;