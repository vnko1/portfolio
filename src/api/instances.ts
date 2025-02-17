import axios from "axios";

export const strapiApi = axios.create({ baseURL: process.env.BASE_URL });
