import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:7226/api", // replace 7226 with your API port
});

export default API;
