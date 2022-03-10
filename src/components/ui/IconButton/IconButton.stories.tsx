import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
	AiFillCloseCircle,
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from "react-icons/ai";
import { default as IconButtonComponent } from "./IconButton";

const icons = {
	close: AiFillCloseCircle,
	up: AiOutlineArrowUp,
	down: AiOutlineArrowDown,
	left: AiOutlineArrowLeft,
	right: AiOutlineArrowRight,
};

const labels = {
	close: "close",
	up: "up",
	down: "down",
	left: "left",
	right: "right",
};

export default {
	title: "UI/Icon Button",
	component: IconButtonComponent,
	argTypes: {
		size: { type: "number", defaultValue: 24 },
		disabled: { type: "boolean", defaultValue: false },
		children: {
			options: Object.keys(icons),
			mapping: icons,
			control: {
				type: "select",
				labels,
			},
			defaultValue: "close",
		},
		onClick: { action: "onClick" },
		onMouseOver: { action: "onMouseOver" },
		onMouseOut: { action: "onMouseOut" },
	},
} as ComponentMeta<typeof IconButtonComponent>;

const Template: ComponentStory<typeof IconButtonComponent> = (args) => <IconButtonComponent {...args} />;

export const Default = Template.bind({});

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
