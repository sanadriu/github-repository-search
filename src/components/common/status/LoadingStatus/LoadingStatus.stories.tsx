import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as LoadingStatusComponent } from "./LoadingStatus";

export default {
	title: "Request Status/Loading",
	component: LoadingStatusComponent,
} as ComponentMeta<typeof LoadingStatusComponent>;

export const LoadingStatus: ComponentStory<typeof LoadingStatusComponent> = (args) => <LoadingStatusComponent />;
