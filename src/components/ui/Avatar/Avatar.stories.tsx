import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as AvatarComponent } from "./Avatar";

export default {
	title: "UI/Avatar",
	component: AvatarComponent,
	args: {
		src: "https://i.pravatar.cc/300",
	},
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent {...args} />;

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

export const ShapeCircle = Template.bind({});
ShapeCircle.args = {
	shape: "circle",
};

export const ShapeRounded = Template.bind({});
ShapeRounded.args = {
	shape: "rounded",
};
