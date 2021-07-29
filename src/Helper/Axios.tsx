import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLA"
});


export default api;
