import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as NoDataStatusComponent } from "./NoDataStatus";

export default {
	title: "Request Status/No Data",
	component: NoDataStatusComponent,
} as ComponentMeta<typeof NoDataStatusComponent>;

export const NoDataStatus: ComponentStory<typeof NoDataStatusComponent> = () => <NoDataStatusComponent />;
