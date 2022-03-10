import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as BadgeComponent } from "./Badge";

export default {
	title: "UI/Badge",
	component: BadgeComponent,
	argTypes: {
		text: { control: { type: "text" }, defaultValue: "Badge" },
		variant: { control: { type: "select" }, options: ["filled", "outline"], defaultValue: "Badge" },
	},
} as ComponentMeta<typeof BadgeComponent>;

const Template: ComponentStory<typeof BadgeComponent> = (args) => <BadgeComponent {...args} />;

export const VariantFilled = Template.bind({});
VariantFilled.args = {
	variant: "filled",
};

VariantFilled.storyName = "Variant Filled (Default)";

export const VariantOutline = Template.bind({});
VariantOutline.args = {
	variant: "outline",
};
