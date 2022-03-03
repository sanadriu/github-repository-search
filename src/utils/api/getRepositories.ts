import { AxiosResponse } from "axios";
import api from "../../services/api";
import { RepositoriesData } from "../../types";
import * as endpoints from "./endpoints";

export interface RepositorySearchParams {
	q?: string | null;
	order?: "asc" | "desc" | null;
	sort?: "stars" | "forks" | "updated" | null;
	per_page?: number | null;
	page?: number | null;
}

export async function getRepositories(params: RepositorySearchParams): Promise<RepositoriesData> {
	const response: AxiosResponse<RepositoriesData> = await api({
		url: endpoints.REPOSITORIES,
		method: "GET",
		params,
	});

	return response.data;
}
