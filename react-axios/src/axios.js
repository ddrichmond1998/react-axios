import Axios from "node_modules/axios";

export const axios = Axios.create({ baseURL: "http://localhost:30000" });
