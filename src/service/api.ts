import axios from "axios"


const api = axios.create({
    baseURL:"https://mycontacts-api-u7ov.onrender.com/",
})


export default api