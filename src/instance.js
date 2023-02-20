import axios from "axios";

const instance =axios.create({
    baseURL:"https://backend-fiuc.onrender.com",
    headers: {"Authorization" : "Bearer" + localStorage.getItem("usertoken")}
})

export default instance;
