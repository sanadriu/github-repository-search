import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { default as PaginationComponent } from "./Pagination";

export default {
	title: "Common/Pagination",
	component: PaginationComponent,
	decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
} as ComponentMeta<typeof PaginationComponent>;

export const Pagination: ComponentStory<typeof PaginationComponent> = (args) => <PaginationComponent {...args} />;
Pagination.args = {
	lastPage: 5,
};
