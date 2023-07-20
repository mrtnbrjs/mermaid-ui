import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Heading, { HeadingProps } from "./Heading";

export default {
	title: "Atoms/Heading",
	component: Heading,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Un 'Heading' es un componente esencial para resaltar títulos y encabezados en una página web. Se utiliza para establecer la jerarquía de contenido y mejorar la accesibilidad y el SEO. Este componente asegura una presentación consistente y legible, permitiendo una mejor experiencia de usuario en la aplicación web.",
			},
		},
	},
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
