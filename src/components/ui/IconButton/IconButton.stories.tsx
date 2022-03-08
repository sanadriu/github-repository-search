import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { default as IconButtonComponent } from "./IconButton";

export default {
	title: "UI/Icon Button",
	component: IconButtonComponent,
	args: {
		children: AiFillCloseCircle,
	},
} as ComponentMeta<typeof IconButtonComponent>;

const Template: ComponentStory<typeof IconButtonComponent> = (args) => <IconButtonComponent {...args} />;

export const SmallButton = Template.bind({});
SmallButton.args = {
	size: 24,
};

export const MediumButton = Template.bind({});
MediumButton.args = {
	size: 32,
};

export const LargeButton = Template.bind({});
LargeButton.args = {
	size: 40,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
	disabled: true,
};
