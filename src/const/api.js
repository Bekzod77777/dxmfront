import axios from "axios";

const api = axios.create({
  baseURL: "https://my.adliya.uz/api/application/v1/",
});

export default api;
