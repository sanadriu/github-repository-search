import { useQuery } from "react-query";
import config from "../../config";
import { RepositoriesData } from "../../types";
import { getRepositories, RepositorySearchParams } from "../../utils/api/getRepositories";
import queryIDs from "./query-ids";

export default function useRepositories(params: RepositorySearchParams = {}, autoFetch?: boolean) {
	const { q, sort, order, per_page, page } = params;

	const queryKey = [queryIDs.repositories, q, sort, order, per_page, page];
	const handler = (): Promise<RepositoriesData> => getRepositories(params);

	return useQuery(queryKey, handler, { ...config.reactQuery, enabled: autoFetch });
}
