import React from "react";
import { Meta, Story } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
	title: "Atoms/Text",
	component: Text,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"El componente Text es una parte esencial de las interfaces de usuario en aplicaciones web y móviles. Se utiliza para mostrar texto y contenido de manera clara y legible. Con Text, puedes personalizar la fuente, tamaño, color y otros estilos de texto de acuerdo con los requisitos de diseño de tu aplicación. Es una herramienta versátil y fácil de usar para mostrar contenido, desde títulos y párrafos hasta etiquetas y mensajes informativos.",
			},
		},
	},
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;
const ShowcaseTemplate: Story<TextProps> = (args) => (
	<>
		<Text as="b">Bold</Text>
		<br />
		<Text as="i">Italic</Text>
		<br />
		<Text as="u">Underline</Text>
		<br />
		<Text as="abbr">I18N</Text>
		<br />
		<Text as="cite">Citation</Text>
		<br />
		<Text as="del">Deleted</Text>
		<br />
		<Text as="em">Emphasis</Text>
		<br />
		<Text as="ins">Inserted</Text>
		<br />
		<Text as="kbd">Ctrl + C</Text>
		<br />
		<Text as="mark">Highlighted</Text>
		<br />
		<Text as="s">Strikethrough</Text>
		<br />
		<Text as="samp">Sample</Text>
		<br />
		<Text as="sub">sub</Text>
		<br />
		<Text as="sup">sup</Text>
	</>
);

export const Basic = Template.bind({});
Basic.args = {
	children: "Este es un ejemplo de texto básico.",
};

export const WithColor = Template.bind({});
WithColor.args = {
	children: "Este texto tiene color azul.",
	color: "blue.500",
};

export const WithSize = Template.bind({});
WithSize.args = {
	children: "Este texto tiene un tamaño más grande.",
	fontSize: "xl",
};

export const Showcase = ShowcaseTemplate.bind({});
Showcase.args = {};
