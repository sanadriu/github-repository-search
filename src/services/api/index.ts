import axios, { AxiosInstance } from "axios";
import config from "../../config";

const api: AxiosInstance = axios.create({
	baseURL: config.githubUrl,
	headers: {
		Authorization: `Bearer ${config.githubToken}`
	}
})

export default api;

