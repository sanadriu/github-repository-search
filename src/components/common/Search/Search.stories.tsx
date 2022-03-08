import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { default as SearchComponent } from "./Search";

export default {
	title: "Common/Search",
	component: SearchComponent,
	decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
} as ComponentMeta<typeof SearchComponent>;

export const Search: ComponentStory<typeof SearchComponent> = (args) => <SearchComponent {...args} />;
Search.args = {
	searchKey: "q",
};
