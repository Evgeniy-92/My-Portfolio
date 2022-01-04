import axios from "axios";

export const formAPI = {
    post: (name, email, message) => {
        return axios.post('https://smtp-nodejs-server3.herokuapp.com/sendMessage', {name, email, message})
    }
}