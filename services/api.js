import axios from 'axios';

app = axios.create({
    baseURL: 'https://viacep.com.br/ws/01001000/json/',
});

export default app;