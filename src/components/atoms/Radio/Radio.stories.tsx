import React from "react";
import { Meta, Story } from "@storybook/react";
import Radio, { RadioButtonProps } from "./Radio";

export default {
	title: "Atoms/RadioButton",
	component: Radio,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Un botón de opción (RadioButton) es un componente de interfaz gráfica que permite a los usuarios seleccionar una única opción de un conjunto de opciones mutuamente excluyentes. Se presenta como un botón circular o redondo que puede estar marcado (checked) para indicar la opción seleccionada o desmarcado (unchecked) para opciones no seleccionadas. Los botones de opción son especialmente útiles cuando solo se permite una elección entre varias opciones relacionadas. Su diseño intuitivo y claro facilita la toma de decisiones por parte del usuario y mejora la interacción en formularios, encuestas y otras aplicaciones donde se necesita seleccionar una opción exclusiva entre varias alternativas.",
			},
		},
	},
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
	label: "Opción 1",
	isChecked: true,
	value: "option1",
	onChange: () => {},
};

export const Unchecked = Template.bind({});
Unchecked.args = {
	label: "Opción 2",
	isChecked: false,
	value: "option2",
	onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Opción 3 (desactivada)",
	isChecked: false,
	value: "option3",
	isDisabled: true,
	onChange: () => {},
};

export const MultipleOptions = () => (
	<>
		<Radio label="Opción A" isChecked={true} value="a" onChange={() => {}} />
		<Radio label="Opción B" isChecked={false} value="b" onChange={() => {}} />
		<Radio label="Opción C" isChecked={false} value="c" onChange={() => {}} />
	</>
);
