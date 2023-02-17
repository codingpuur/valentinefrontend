import axios from "axios";

const instance =axios.create({
    baseURL:"https://backend-fiuc.onrender.com"
})

export default instance;
