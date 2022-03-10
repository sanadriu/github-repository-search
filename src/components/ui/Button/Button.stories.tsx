import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as ButtonComponent } from "./Button";

export default {
	title: "UI/Button",
	component: ButtonComponent,
	argTypes: {
		size: { control: { type: "select" }, options: ["sm", "md", "lg"], defaultValue: "md" },
		full: { type: "boolean", defaultValue: false },
		disabled: { type: "boolean", defaultValue: false },
		children: { type: "string", defaultValue: "Button" },
		onClick: { action: "onClick" },
		onMouseOver: { action: "onMouseOver" },
		onMouseOut: { action: "onMouseOut" },
	},
} as ComponentMeta<"button">;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Default = Template.bind({});

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
