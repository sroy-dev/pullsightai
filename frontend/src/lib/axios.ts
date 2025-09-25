// src/lib/axios.ts
import axios from "axios";
import { getBaseUrl } from "./utils";

const apiClient = axios.create({
    baseURL: getBaseUrl(),
    withCredentials: true, // for cookie-based auth
});

export default apiClient;
