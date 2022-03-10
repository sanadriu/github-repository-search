import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as InputFieldComponent } from "./InputField";

export default {
	title: "UI/Input Field",
	component: InputFieldComponent,
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["text", "search", "email", "password", "date", "tel", "number"],
			defaultValue: "text",
		},
		invalid: { type: "boolean", defaultValue: false },
		disabled: { type: "boolean", defaultValue: false },
		onBlur: { action: "onBlur" },
		onFocus: { action: "onFocus" },
		onChange: { action: "onChange" },
	},
} as ComponentMeta<typeof InputFieldComponent>;

const Template: ComponentStory<typeof InputFieldComponent> = (args) => <InputFieldComponent {...args} />;

export const Default = Template.bind({});

export const Invalid = Template.bind({});
Invalid.args = {
	invalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
