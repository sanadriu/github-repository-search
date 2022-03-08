const config = {
	githubUrl: process.env.REACT_APP_GITHUB_URL,
	githubToken: process.env.REACT_APP_GITHUB_AUTH_TOKEN,
	reactQuery: {
		staleTime: 600000,
		cacheTime: 900000,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	},
	queryParams: {
		per_page: 10,
	},
	numberFormatter: new Intl.NumberFormat(),
	dateFormatter: new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }),
};

export default config;
