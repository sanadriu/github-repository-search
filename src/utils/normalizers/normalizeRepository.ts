import { Repository, RepositoryData } from "../../types";
import config from "../../config";

export function normalizeRepository(item: RepositoryData): Repository {
	return {
		id: item.id,
		repositoryName: item.name,
		repositoryDescription: item.description,
		repositoryUrl: item.html_url,
		isPrivate: item.private,
		user: {
			username: item.owner.login,
			userUrl: item.owner.html_url,
		},
		language: item.language,
		license: item.license?.name,
		topics: item.topics,
		numStars: item.stargazers_count,
		numWatchers: item.watchers_count,
		numForks: item.forks_count,
		updatedAt: config.dateFormatter.format(Date.parse(item.updated_at)),
		createdAt: config.dateFormatter.format(Date.parse(item.created_at)),
	};
}
