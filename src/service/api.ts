import axios from "axios"


const api = axios.create({
    baseURL:"https://mycontacts-srtk.onrender.com"
})


export default api