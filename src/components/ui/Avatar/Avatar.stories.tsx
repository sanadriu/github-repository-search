import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as AvatarComponent } from "./Avatar";

export default {
	title: "UI/Avatar",
	component: AvatarComponent,
	argTypes: {
		size: { control: { type: "select" }, options: ["sm", "md", "lg"], defaultValue: "md" },
		shape: { control: { type: "select" }, options: ["circle", "rounded"], defaultValue: "circle" },
		src: { control: { type: "text" } },
		alt: { control: { type: "text" }, defaultValue: "avatar" },
	},
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent {...args} />;

export const Default = Template.bind({});

export const SizeSmall = Template.bind({});
SizeSmall.args = {
	size: "sm",
	src: "https://i.pravatar.cc/300",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
	size: "md",
	src: "https://i.pravatar.cc/300",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
	size: "lg",
	src: "https://i.pravatar.cc/300",
};

export const ShapeCircle = Template.bind({});
ShapeCircle.args = {
	shape: "circle",
	src: "https://i.pravatar.cc/300",
};

export const ShapeRounded = Template.bind({});
ShapeRounded.args = {
	shape: "rounded",
	src: "https://i.pravatar.cc/300",
};
