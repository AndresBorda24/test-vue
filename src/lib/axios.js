import axios from "axios";

export const ax = axios.create({
    baseURL: import.meta.env.VITE_API_EXTERNAL
})

export const axLocal = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
