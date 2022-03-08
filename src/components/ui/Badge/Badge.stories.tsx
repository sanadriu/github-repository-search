import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as BadgeComponent } from "./Badge";

export default {
	title: "UI/Badge",
	component: BadgeComponent,
} as ComponentMeta<typeof BadgeComponent>;

const Template: ComponentStory<typeof BadgeComponent> = (args) => <BadgeComponent {...args} />;

export const VariantFilled = Template.bind({});
VariantFilled.args = {
	variant: "filled",
};

export const VariantOutline = Template.bind({});
VariantOutline.args = {
	variant: "outline",
};
