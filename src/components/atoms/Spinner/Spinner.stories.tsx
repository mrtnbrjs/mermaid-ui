import React from "react";
import { Meta, Story } from "@storybook/react";
import Spinner, { SpinnerProps } from "./Spinner";

export default {
	title: "Atoms/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"El componente Spinner es una representación visual de un indicador de carga o progreso en una interfaz de usuario. Se presenta como un símbolo animado, generalmente una serie de círculos o puntos que giran o se mueven en sentido horario para mostrar que una acción está en progreso o que se está cargando contenido.",
			},
		},
	},
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const WithColor = Template.bind({});
WithColor.args = {
	color: "blue.500",
};

export const WithSize = Template.bind({});
WithSize.args = {
	size: "xl",
};
