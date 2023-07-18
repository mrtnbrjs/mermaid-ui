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
		<Heading size="4xl" mb={5} {...args} />
		<Heading size="3xl" mb={5} {...args} />
		<Heading size="2xl" mb={5} {...args} />
		<Heading size="xl" mb={5} {...args} />
		<Heading size="lg" mb={5} {...args} />
		<Heading size="md" mb={5} {...args} />
		<Heading size="sm" mb={5} {...args} />
		<Heading size="xs" mb={5} {...args} />
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
