import config from "../../../config";
import { Repository } from "../../../types";

export default {
	id: "string",
	repositoryName: "Repository Name",
	repositoryDescription: "Repository Description",
	repositoryUrl: "",
	isPrivate: false,
	user: {
		username: "Username",
		userUrl: "",
	},
	language: "Javascript",
	license: "None",
	topics: ["Foo", "Bar", "Baz"],
	numStars: 0,
	numWatchers: 0,
	numForks: 0,
	updatedAt: config.dateFormatter.format(new Date()),
	createdAt: config.dateFormatter.format(new Date()),
} as Repository;
