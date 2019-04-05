import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-84b2d.firebaseio.com/'
});

export default instance;