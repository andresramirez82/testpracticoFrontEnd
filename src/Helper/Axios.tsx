import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5200"
});


const Token = localStorage.getItem('token');

export const config = {
  headers: {
    'Authorization': 'Bearer ' + Token
  }
}

export default api;
