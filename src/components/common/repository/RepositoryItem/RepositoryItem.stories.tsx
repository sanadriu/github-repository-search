import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as RepositoryItemComponent } from "./RepositoryItem";

import item from "../sample";

export default {
	title: "Common/Repository Item",
	component: RepositoryItemComponent,
	args: {
		item,
	},
} as ComponentMeta<typeof RepositoryItemComponent>;

export const RepositoryItem: ComponentStory<typeof RepositoryItemComponent> = (args) => (
	<RepositoryItemComponent {...args} />
);
