import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as IdleStatusComponent } from "./IdleStatus";

export default {
	title: "Request Status/Idle",
	component: IdleStatusComponent,
} as ComponentMeta<typeof IdleStatusComponent>;

export const IdleStatus: ComponentStory<typeof IdleStatusComponent> = () => <IdleStatusComponent />;
