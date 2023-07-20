import React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Un checkbox es un elemento de interfaz gráfica que permite a los usuarios seleccionar una o varias opciones de un conjunto limitado de opciones. Se presenta como un cuadro pequeño que puede estar marcado (checked) o desmarcado (unchecked) según el estado de selección. Los checkboxes son comúnmente utilizados para permitir a los usuarios hacer selecciones múltiples en formularios, configuraciones o listas de opciones.",
			},
		},
	},
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
	label: "Aceptar términos y condiciones",
	isChecked: true,
	onChange: () => {},
};

export const Unchecked = Template.bind({});
Unchecked.args = {
	label: "Aceptar términos y condiciones",
	isChecked: false,
	onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Checkbox desactivado",
	isChecked: false,
	isDisabled: true,
	onChange: () => {},
};
