import axios from 'axios'

const instance = axios.create({
    baseURL: "https://salem-oulad.com",
    withCredentials: true
})

export default instance;