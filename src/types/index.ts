export interface RepositoriesData {
	total_count: number;
	incomplete_results: boolean;
	items: Array<RepositoryData>;
}

export interface RepositoryData {
	id: string;
	name: string;
	description: string;
	html_url: string;
	owner: {
		login: string;
		html_url: string;
	};
	language: string;
	license: {
		name: string;
	};
	topics: Array<string>;
	private: boolean;
	stargazers_count: number;
	watchers_count: number;
	forks_count: number;
	updated_at: string;
	created_at: string;
}

export interface Repository {
	id: string;
	repositoryName: string;
	repositoryDescription: string;
	repositoryUrl: string;
	isPrivate: boolean;
	user: {
		username: string;
		userUrl: string;
	};
	language: string;
	license: string;
	topics: Array<string>;
	numStars: number;
	numWatchers: number;
	numForks: number;
	updatedAt: string;
	createdAt: string;
}
