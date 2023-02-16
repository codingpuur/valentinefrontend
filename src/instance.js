import axios from "axios";

const instance =axios.create({
    baseURL:"https://valentinesaga.onrender.com"
})

export default instance;
