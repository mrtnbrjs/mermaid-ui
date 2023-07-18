import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Heading, { HeadingProps } from "./Heading";

export default {
	title: "Atoms/Heading",
	component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

const TemplateShowcase: Story<HeadingProps> = (args) => (
	<>
		<Heading size="4xl" {...args} />
		<Heading size="3xl" {...args} />
		<Heading size="2xl" {...args} />
		<Heading size="xl" {...args} />
		<Heading size="lg" {...args} />
		<Heading size="md" {...args} />
		<Heading size="sm" {...args} />
		<Heading size="xs" {...args} />
	</>
);

export const Default = Template.bind({});
Default.args = {
	children: "¡Mejora tu vida!",
};

export const showcase = TemplateShowcase.bind({});
showcase.args = {
	children: "¡Mejora tu vida!",
	as: "h1",
};
