import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { CustomButtonProps } from "./Button";

export default {
	title: "Atoms/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"El componente 'Button' es un elemento interactivo crucial en la interfaz de usuario que se usa para acciones principales. Proporciona una llamada a la acción destacada y permite a los usuarios interactuar con la aplicación de manera intuitiva. Su diseño, accesibilidad y feedback visual adecuados mejoran la experiencia del usuario en general.",
			},
		},
	},
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <Button {...args} />;

const TemplateVariants: Story<CustomButtonProps> = (args) => (
	<>
		<Button colorScheme="primary" {...args} display="block" mb={3}>
			Primary
		</Button>
		<Button colorScheme="complementary" display="block" mb={3} {...args}>
			Complementary
		</Button>
		<Button colorScheme="white" {...args} display="block" mb={3}>
			White
		</Button>
		<Button colorScheme="neutral" {...args} display="block" mb={3}>
			Neutral
		</Button>
		<Button colorScheme="black" {...args} display="block" mb={3}>
			Black
		</Button>
		<Button colorScheme="error" {...args} display="block" mb={3}>
			Error
		</Button>
		<Button colorScheme="success" {...args} display="block" mb={3}>
			Success
		</Button>
		<Button colorScheme="warning" {...args} display="block" mb={3}>
			Warning
		</Button>
		<Button colorScheme="info" {...args} display="block" mb={3}>
			Info
		</Button>
		<Button colorScheme="sales" {...args} display="block" mb={3}>
			Sales
		</Button>
	</>
);

export const Primary = Template.bind({});
Primary.args = {
	children: "Mejora tu vida",
};

export const Variants = TemplateVariants.bind({});
Variants.args = {};
