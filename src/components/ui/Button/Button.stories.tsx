import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as ButtonComponent } from "./Button";

export default {
	title: "UI/Button",
	component: ButtonComponent,
} as ComponentMeta<"button">;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const SizeSmall = Template.bind({});
SizeSmall.args = {
	size: "sm",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
	size: "md",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
	size: "lg",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	full: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
