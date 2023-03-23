import axios from "axios"


const api = axios.create({
    //baseURL:"http://mycontacts-srtk.onrender.com/",
    baseURL:"http://localhost:3500/",
})


export default api