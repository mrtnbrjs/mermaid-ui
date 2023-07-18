import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
	title: "Atoms/Button",
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const TemplateVariants: Story<ButtonProps> = (args) => (
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
