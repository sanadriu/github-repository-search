import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as RepositoryListComponent } from "./RepositoryList";
import item from "../sample";

export default {
	title: "Common/Repository List",
	component: RepositoryListComponent,
	args: {
		list: Array.from({ length: 5 }, (v, i) => ({ ...item, id: i.toString() })),
		total: 10000,
	},
} as ComponentMeta<typeof RepositoryListComponent>;

export const RepositoryList: ComponentStory<typeof RepositoryListComponent> = (args) => (
	<RepositoryListComponent {...args} />
);
