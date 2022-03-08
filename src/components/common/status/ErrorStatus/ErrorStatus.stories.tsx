import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as ErrorStatusComponent } from "./ErrorStatus";

export default {
	title: "Request Status/Error",
	component: ErrorStatusComponent,
} as ComponentMeta<typeof ErrorStatusComponent>;

export const ErrorStatus: ComponentStory<typeof ErrorStatusComponent> = (args) => <ErrorStatusComponent {...args} />;
ErrorStatus.args = {
	message: "Sample message",
};
