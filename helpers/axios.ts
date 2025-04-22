import axios from "axios";

const api = axios.create({
    //baseURL: 'https://workshop-node-ts-intro-exemplo1.onrender.com'
    baseURL: 'https://viacep.com.br/ws'
})

export default api