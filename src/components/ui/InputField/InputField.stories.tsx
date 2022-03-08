import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as InputFieldComponent } from "./InputField";

export default {
	title: "UI/Input Field",
	component: InputFieldComponent,
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
