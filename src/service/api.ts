import axios from "axios"


const api = axios.create({
    baseURL:"https://mycontacts-api-u7ov.onrender.com/",
    //baseURL:"http://localhost:3500/",
})


export default api