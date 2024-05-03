import axios from "axios";
export const instance = axios.create({
  baseURL: "https://food-delivery-back-1.onrender.com",
  timeout: 8000,
});
